import React,{Component} from 'react'
import { Button } from 'antd-mobile'
import TopHead from 'components/head/header'
import img1 from 'images/01.jpg'
import 'css/details.less'

class Detail extends Component{
    constructor(){
        super();
        this.state={

        }
        this.goTicket = this.goTicket.bind(this);
    }

    goTicket(){
        //跳转到购票页
        this.props.history.push('/chooseSeat');
    }

    render(){
        return(
            <div className='detail_wrap'>
                <TopHead address='/homePage'></TopHead>
                <div className='detail'>
                    <div>
                        <img src={img1} alt='' />
                    </div>
                    <ul>
                        <li className='line-ellipsis'>复仇者联盟4：终局之战</li>
                        <li>
                            <span>9.1</span>
                            <span className='line-ellipsis'>(67500人评)</span>
                        </li>
                        <li className='line-ellipsis'>动作,冒险,奇幻</li>
                        <li className='line-ellipsis'>
                            <span>美国</span>
                            <span>/181分钟</span>
                        </li>
                        <li className='line-ellipsis'>
                            <span>2019-04-24大陆上映</span>
                        </li>
                    </ul>
                </div>
                <div className='yanyuan'>
                    <div>主演：</div>
                    <div>小罗伯特·唐尼,克里斯·埃文斯,马克·鲁法洛</div>
                </div>
                <div className='juqing'>
                    <p>剧情介绍</p>
                    <p>改编自漫威漫画，也是漫威电影宇宙第22部影片。复仇者联盟的一众超级英雄，必须抱着牺牲一切的信念，与史上最强大反派灭霸殊死一搏，阻止其摧毁宇宙的邪恶计划。</p>
                </div>
                <Button type='primary' onClick={this.goTicket}>点击购票</Button>
            </div>
        )
    }
}

export default Detail