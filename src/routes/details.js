import React, { Component } from 'react'
import { Button, Toast } from 'antd-mobile'
import TopHead from 'components/head/header'
import { withRouter } from 'dva/router'
import axios from 'axios'
import 'css/details.less'

class Detail extends Component {
    constructor() {
        super();
        this.state = {
            hotMovieDetails: {}
        }
        this.goTicket = this.goTicket.bind(this);
    }

    componentDidMount() {
        this.matchDetail()
    }

    //与详情信息匹配
    async matchDetail() {
        //处理id
        const id = this.props.location.search.split("=")[1];
        const result = await axios.get('/mock/hotDetails').then((res) => {
            if (res.status === 200) {
                return res.data.data.hot
            } else {
                Toast.info('mock数据出现错误，请联系管理员');
            }
        })

        result.map((item) => {
            if (item.id === id) {
                this.setState({
                    hotMovieDetails: item
                })
            }
        })
    }

    goTicket() {
        //跳转到购票页
        this.props.history.push('/chooseSeat');
    }

    render() {
        const { hotMovieDetails } = this.state;
        return (
            <div className='detail_wrap'>
                <TopHead address='/homePage' headInfo='详情页'></TopHead>
                {
                    Object.getOwnPropertyNames(hotMovieDetails).length !== 0 &&
                    <div className='detail'>
                        <div>
                            <img src={hotMovieDetails.img} alt='' />
                        </div>
                        <ul>
                            <li className='line-ellipsis'>{hotMovieDetails.nm}</li>
                            <li>
                                <span>9.1</span>
                                <span className='line-ellipsis'>{hotMovieDetails.peopleEvaluate}</span>
                            </li>
                            <li className='line-ellipsis'>{hotMovieDetails.type}</li>
                            <li className='line-ellipsis'>
                                <span>{hotMovieDetails.src}</span>
                                {/* <span>/181分钟</span> */}
                            </li>
                            <li className='line-ellipsis'>
                                <span>{hotMovieDetails.pubDesc}</span>
                            </li>
                        </ul>
                    </div>
                }
                {
                    Object.getOwnPropertyNames(hotMovieDetails).length !== 0 && <div>
                        <div className='yanyuan'>
                            <div>主演：</div>
                            <div>{hotMovieDetails.star}</div>
                        </div>
                        <div className='juqing'>
                            <p>剧情介绍</p>
                            <p>{hotMovieDetails.details}</p>
                        </div>
                    </div>
                }
                <Button type='primary' onClick={this.goTicket}>点击购票</Button>
            </div>
        )
    }
}

export default withRouter(Detail)