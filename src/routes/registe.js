import React,{Component} from 'react'
import TopHead from 'components/head/header'
import { Button, List, InputItem, Toast  } from 'antd-mobile';
import request from 'utils/request.js'
import { createForm } from 'rc-form'
import 'css/registe.less'

class registe extends Component{
    constructor(){
        super();
        this.state={
            isClickRegist:false
        }
        this.submitRegisteInfo=this.submitRegisteInfo.bind(this);
    }

    //输入框验证
    _verification(val){
        //验证电话号码格式
        if(!(/^1[34578]\d{9}$/.test(val.phone))){
            Toast.info('手机号码格式错误');
            return 
        }
        if(val.password!==val.passwords){
            Toast.info('两次密码输入不一致');
            return
        }
        this.setState({isClickRegist:true})
    }

    submitRegisteInfo(){
        this.props.form.validateFields(async (error, value) => {
            const {isClickRegist} = this.state;
            if(error){
                Toast.info('请将信息填写完整');
                return;
            }
            this._verification(value);

            if(isClickRegist){
                const result = await request('/api/users/register',{ 
                    method: 'POST',
                    headers:{
                        'Content-Type':'application/json'
                     },
                    body: JSON.stringify(value)
                });
                Toast.info(result.data.data.msg);
            }
        });
    }

    render(){
        const { getFieldProps } = this.props.form;
        return(
            <div className='registe'>
                <TopHead address='/person' headInfo='淘票'></TopHead>
                <ul>
                    <li>
                        <List>
                            <InputItem
                                {...getFieldProps('username',{rules:[{
                                    required:true
                                }]})}
                                clear
                                placeholder="请输入用户名"
                                ref={el => this.autoFocusInst = el}
                            >用户名</InputItem>
                        </List>
                    </li>
                    <li>
                        <List>
                            <InputItem
                                placeholder="请输入你的手机号"
                                {...getFieldProps('phone',{rules:[{
                                    required:true
                                }]})}
                            >手机号码</InputItem>
                        </List>
                    </li>
                    <li>
                        <List>
                            <InputItem
                                {...getFieldProps('password',{rules:[{
                                    required:true
                                }]})}
                                placeholder="请输入密码"
                            >设置密码</InputItem>
                        </List>
                    </li>
                    <li>
                        <List>
                            <InputItem
                                {...getFieldProps('passwords',{rules:[{
                                    required:true
                                }]})}
                                placeholder="请再次输入密码"
                            >输入密码</InputItem>
                        </List>
                    </li>
                    <li>
                        <Button 
                        type="primary"
                        onClick={this.submitRegisteInfo}
                        >注册</Button>
                    </li>
                    <li>
                        <a href='##'>新手指导？</a>
                        <a href='##' onClick={()=>{
                            this.props.history.push('/loginIn')
                        }}>去登陆？</a>
                    </li>
                </ul> 
            </div>
        )
    }
}

export default createForm()(registe)