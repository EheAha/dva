import React, { Component } from 'React'
import { Toast } from 'antd-mobile'
import TopHead from 'components/head/header'
import 'css/ChooseSeat.less'
import axios from 'axios'
class Order extends Component {
    state = {
        ordersInfo: []
    }

    async componentDidMount() {
        await axios.get('/api/users/isSignin').then((res) => {
            console.log(res)
            if (!res.data.ret) {
                Toast.info('请登录后进行查看！');
                this.props.history.push('/loginIn');
                return;
            }
            const username = res.data.data.username;
            this.userOrders(username)
        })
    }

    //请求用户的订单信息
    async userOrders(nm) {
        const result = await axios.post('/api/order/listall', { 'username': nm }).then(res => {
            console.log(res)
            if (res.status === 200) {
                return res.data.data
            }
        })
        this.setState({
            ordersInfo: result.total
        }, () => {
            console.log(this.state.ordersInfo)
        })
    }

    render() {
        const { ordersInfo } = this.state;
        return (
            <div style={{ "position": "relative", "zIndex": '99', "background": "#fff" }}>
                <TopHead address='/homePage' headInfo='我的订单'></TopHead>
                <div className="msg-container" style={{ "height": "6.67rem", "overflow": "scroll", "paddingBottom": ".49rem" }}>
                    <div>
                        {
                            ordersInfo.length !== 0 && ordersInfo.map((item, index) => {
                                // console.log(item.data.seat[0].code)
                                return (
                                    <div style={{ "marginBottom": "10px" }}>
                                        <div className="info-header">
                                            <div className="header-msg">
                                                <h3>{item.data.other.nm}</h3>
                                                <p><span>类型：</span>{item.data.other.type}</p>
                                                <p><span>时长：</span>{item.data.other.duration}</p>
                                            </div>
                                        </div>
                                        <div className="info-main">
                                            <p><span>影院：</span>{item.data.other.cinema}</p>
                                            <p><span>影厅：</span>{item.data.other.filmRoom}</p>
                                            <p><span>版本：</span>{item.data.other.version}</p>
                                            <p><span>场次：</span>{item.data.other.arrange}</p>
                                            <p><span>票价：</span>{"￥" + item.data.other.price + "/张"}</p>
                                            <p><span>座位：</span>{item.data.seat[0].code}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                {
                    ordersInfo.length === 0 && <div style={{ "width": "100%", "textAlign": "center", "lineHeight": '28px' }}>您好，当前没有订单信息哦，请购买后查看！</div>
                }
            </div>
        )
    }
}

export default Order