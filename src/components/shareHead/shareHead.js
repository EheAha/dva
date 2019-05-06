import React,{Component} from 'React'
import {withRouter} from 'dva/router'
import './style.less'

class ShareHead extends Component{
    jumpSearch(){
        this.props.history.push('/search');
    }
    jumpCity(){
        this.props.history.push('/selectCity');
    }

    render(){
        return(
            <ul className='headerHome'>
                <li>
                    <span onClick={this.jumpCity.bind(this)}>{localStorage.getItem('cityName')}</span>
                    <span className="iconfont icon--xialajiantou"></span>
                </li>
                <li>
                    淘票
                </li>
                <li onClick={this.jumpSearch.bind(this)}>
                    <span className="iconfont icon-sousuo"></span>
                </li>
            </ul>
        )
    }
}

export default withRouter(ShareHead)