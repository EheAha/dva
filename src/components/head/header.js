import React,{Component} from 'react'
import { withRouter } from 'dva/router'
import './style.less'

class TopHead extends Component{
    constructor(){
        super();
        this.stste={

        }
        this.rowJump = this.rowJump.bind(this);
    }

    //跳转到前一页
    rowJump(){
        this.props.history.push(this.props.address);
    }

    render(){
        return(
            <div className='head_wrap'>
                <span className="iconfont icon-sdf" onClick={this.rowJump}></span>
                <p className='title'>{this.props.headInfo}</p>
            </div>
        )
    }
}

export default withRouter(TopHead)