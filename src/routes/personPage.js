import React, { Component } from 'react'
import TopHead from 'components/head/header'
import { ActionSheet, Toast,Modal, Button, } from 'antd-mobile'
import axios from 'axios'
import 'css/person.less'

const alert = Modal.alert;

class PersonPage extends Component {
    constructor() {
        super();
        this.state = {
            clicked: 'none',
            showUsername: ''
        }
        this.clickLogin = this.clickLogin.bind(this);
    }

    componentWillMount() {
        this.isSignIn();
    }

    //判断是否已登录
    async isSignIn() {
        await axios.get('/api/users/isSignin').then((res) => {
            if (!res.data.ret) {
                this.setState({
                    showUsername:''
                })
                return;
            }
            const username = res.data.data.username;
            this.setState({
                showUsername: username
            })
        })
    }

    clickLogin() {
        const BUTTONS = ['注册账号', '点击登录', '取消'];
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
                }, () => {
                    const { clicked } = this.state;
                    clicked === '注册账号' && this.props.history.push('/registe');
                    clicked === '点击登录' && this.props.history.push('/loginIn');
                    clicked === '取消' && this.props.history.push('/person');
                });
            });
    }

    myOrder() {
        this.props.history.push('/order');
    }

    //取消退出
    cancelSiginOut(){
        console.log('cancel')
    }

    //确认退出
    async sureSiginOut(){
        await axios.get('/api/users/signout').then(res=>{console.log(res)});
        this.isSignIn();
    }

    render() {
        const { showUsername } = this.state;
        return (
            <div>
                <TopHead address='/homePage' headInfo='淘票'></TopHead>
                <div className='clickLogin'>
                    {
                        showUsername !== '' ? 
                        <div 
                        onClick={() =>
                            alert('退出登录', '你确定要退出登录吗?', [
                                { text: '取消', onPress: ()=>{this.cancelSiginOut()} },
                                { text: '确定', onPress: () => {this.sureSiginOut()} },
                            ])
                        }>{showUsername}</div> : <div onClick={this.clickLogin}>登录</div>
                    }
                    <p>找到更适合你的电影哟~</p>
                </div>
                <ul className='personList'>
                    <li onClick={this.myOrder.bind(this)}>
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