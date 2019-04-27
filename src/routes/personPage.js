import React,{Component} from 'react'
import TopHead from 'components/head/header'
import { ActionSheet } from 'antd-mobile'
import 'css/person.less'

class PersonPage extends Component{
    constructor(){
        super();
        this.state={
            clicked: 'none'
        }
        this.clickLogin = this.clickLogin.bind(this);
    }

    clickLogin(){
            const BUTTONS = ['注册账号', '点击登陆', '取消'];
            ActionSheet.showActionSheetWithOptions({
              options: BUTTONS,
              cancelButtonIndex: BUTTONS.length - 1,
              destructiveButtonIndex: BUTTONS.length - 2,
              maskClosable: true,
              'data-seed': 'logId'
            },
            (buttonIndex) => {
              this.setState({ 
                  clicked: BUTTONS[buttonIndex] 
              },()=>{
                  const { clicked } = this.state;
                  clicked === '注册账号' && this.props.history.push('/registe');
                  clicked === '点击登陆' && this.props.history.push('/loginIn');
                  clicked === '取消' && this.props.history.push('/person');
              });
            });
    }

    render(){
        return(
            <div>
                <TopHead address='/homePage'></TopHead>
                <div className='clickLogin'>
                    <div onClick={this.clickLogin}>登陆</div>
                    <p>找到更适合你的电影哟~</p>
                </div>
                <ul className='personList'>
                    <li>
                        <span className='iconfont icon-wodedingdan'></span>
                        <span>我的订单</span>
                    </li>  
                    <li>
                        <span className='iconfont icon-wodefankui'></span>
                        <span>意见反馈</span>
                    </li>  
                    <li>
                        <span className='iconfont icon-jushoucang'></span>
                        <span>我的收藏</span>
                    </li>  
                    <li>
                        <span className='iconfont icon-xiaoxizhongxin'></span>
                        <span>联系客服</span>
                    </li>  
                </ul>
            </div>
        )
    }
}

export default PersonPage