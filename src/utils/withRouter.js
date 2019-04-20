import React,{Component} from 'react';
import { withRouter } from 'dva/router'

//用高阶组件withRouter实现路由跳转
const MyBar = withRouter(
    class EnhenceList extends Component{
        constructor(props){
            super(props);
            this.state={
                current:"/"
            }
        }

        //可实现刷新页面tabbar高亮仍然显示
        componentDidMount(){
            const path = this.props.location.pathname;
            this.setState({
                current: path.substring(path.lastIndexOf('/')+1,path.length)
            })
            //监听路由变化
            this.props.history.listen((event)=>{
                const pathTest = event.pathname;
                const text = pathTest.substring(pathTest.lastIndexOf('/')+1,pathTest.length)
                this.setState({
                    current:text
                })
            })
        }

        //页面跳转
        jump(){
            this.props.history.push(this.props.to);
        }

        render(){
            const { current } = this.state;
            const { id, active } = this.props;
            return(
                <li onClick={this.jump.bind(this)} style={{"color":current === id  || active === '0' ? 'red':'#424040'}}>
                    {this.props.children}
                </li>
            )
        }
    }
)

export default MyBar
