import React,{Component} from 'react'
import TopHead from 'components/head/header'
import { Button, List, InputItem, Toast  } from 'antd-mobile';
import 'css/registe.less'

class registe extends Component{
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
            <div className='registe'>
                <TopHead address='/person'></TopHead>
                <ul>
                    <li>
                        <List>
                            <InputItem
                                // {...getFieldProps('autofocus')}
                                clear
                                placeholder="请输入昵称"
                                ref={el => this.autoFocusInst = el}
                            >昵称</InputItem>
                        </List>
                    </li>
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
                            >设置密码</InputItem>
                        </List>
                    </li>
                    <li>
                        <List>
                            <InputItem
                                type="pwd"
                                placeholder="请再次输入密码"
                                error={this.state.hasError}
                                onErrorClick={this.onErrorClick}
                                onChange={this.onChange}
                                value={this.state.value}
                            >输入密码</InputItem>
                        </List>
                    </li>
                    <li>
                        <Button 
                        type="primary"
                        >注册</Button>
                    </li>
                    <li>
                        <a href='##'>新手指导？</a>
                        <a href='##' onClick={()=>{
                            this.props.history.push('/loginIn')
                        }}>已有账号？</a>
                    </li>
                </ul> 
            </div>
        )
    }
}

export default registe