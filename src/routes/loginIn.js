import React,{Component} from 'react'
import TopHead from 'components/head/header'
import { Button, List, InputItem, Toast  } from 'antd-mobile';
import 'css/loginIn.less'

class loginIn extends Component{
    constructor(){
        super();
        this.state={
            hasError: false,
            value: '',  
        }
    }

    onErrorClick = () => {
        if (this.state.hasError) {
          Toast.info('Please enter 11 digits');
        }
    }

    onChange = (value) => {
        if (value.replace(/\s/g, '').length < 11) {
            this.setState({
            hasError: true,
            });
        } else {
            this.setState({
            hasError: false,
            });
        }
        this.setState({
            value,
        });
    }

    render(){
        return(
            <div className='loginIn'>
                <TopHead address='/person'></TopHead>
                <ul>
                    <li>
                        <List>
                            <InputItem
                                type="phone"
                                placeholder="请输入你的手机号"
                                error={this.state.hasError}
                                onErrorClick={this.onErrorClick}
                                onChange={this.onChange}
                                value={this.state.value}
                            >手机号码</InputItem>
                        </List>
                    </li>
                    <li>
                        <List>
                            <InputItem
                                type="pwd"
                                placeholder="请输入密码"
                                error={this.state.hasError}
                                onErrorClick={this.onErrorClick}
                                onChange={this.onChange}
                                value={this.state.value}
                            >密码</InputItem>
                        </List>
                    </li>
                    <li>
                        <Button 
                        type="primary"
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

export default loginIn