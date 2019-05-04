import React,{Component} from 'react'
import TopHead from 'components/head/header'
import { Button, List, InputItem, Toast  } from 'antd-mobile'
import request from 'utils/request.js'
import { createForm } from 'rc-form'
import 'css/loginIn.less'

class loginIn extends Component{
    constructor(){
        super();
        this.state={

        }
        this.submitSignInInfo = this.submitSignInInfo.bind(this);
    }

    submitSignInInfo(){
        this.props.form.validateFields(async (error, value) => {
            if(error){
                Toast.info('请将信息填写完整');
                return;
            }
            const result = await request('/api/users/signin',{ 
                method: 'POST',
                headers:{
                   'Content-Type':'application/json'
                },
                body: JSON.stringify(value)
            });
            if(!result.data.ret){
                Toast.info(result.data.data.msg);
            }else{
                this.props.history.push('/homePage');
            }
        });
    }
   

    render(){
        const { getFieldProps } = this.props.form;
        return(
            <div className='loginIn'>
                <TopHead address='/person' headInfo='淘票'></TopHead>
                <ul>
                    <li>
                        <List>
                            <InputItem
                                placeholder="请输入用户名"
                                {...getFieldProps('username',{rules:[{
                                    required:true
                                }]})}
                            >用户名</InputItem>
                        </List>
                    </li>
                    <li>
                        <List>
                            <InputItem
                                placeholder="请输入密码"
                                {...getFieldProps('password',{rules:[{
                                    required:true
                                }]})}
                            >密码</InputItem>
                        </List>
                    </li>
                    <li>
                        <Button 
                        type="primary"
                        onClick={this.submitSignInInfo}
                        >登陆</Button>
                    </li>
                    <li>
                        <a href='##'>遇到问题？</a>
                        <a href='##'>忘记密码？ </a>
                    </li>
                </ul> 
            </div>
        )
    }
}

export default createForm()(loginIn)