import React,{Component} from 'react';
import MyBar from 'utils/withRouter'
import { withRouter } from 'dva/router'
import styles from './style.less'

class Tabs extends Component{
    constructor(){
        super();
        this.state={
            acqIndex:''
        }
    }

    componentDidMount(){
        //首次打开页面时，默认首页为红色
        this.props.history.listen((event)=>{
            if(event.pathname === '/'){
                this.setState({
                    acqIndex:'0'
                })
            }else{
                this.setState({
                    acqIndex:''
                })
            }
        })
    }

    render(){
        const {acqIndex} = this.state;
        return(
            <ul className={styles.tabBarContain}>
                <MyBar to='/homePage' id='homePage' active={acqIndex}>
                    <span className="iconfont icon-dianying"></span>
                    <span>首页</span>
                </MyBar>
                <MyBar to='/movie' id='movie'>
                    <span className="iconfont icon-dianyingzhiye-KQ"></span>
                    <span>影院</span>
                </MyBar>
                <MyBar to='/person' id='person'>
                    <span className="iconfont icon-wode2"></span>
                    <span>我的</span>
                </MyBar>
            </ul>
        )
    }
}

export default withRouter(Tabs)
