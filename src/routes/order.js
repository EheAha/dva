import React, { Component } from 'React'
import TopHead from 'components/head/header'
import 'css/ChooseSeat.less'
class Order extends Component {
    render() {
        return (
            <div style={{"position":"relative","zIndex":'99',"background":"#fff"}}>
                <TopHead address='/homePage' headInfo='我的订单'></TopHead>
                <div className="msg-container" style={{ "height": "6.67rem", "overflow": "scroll", "paddingBottom": ".49rem" }}>
                    <div>
                        <div style={{"marginBottom": "10px" }}>
                            <div className="info-header">
                                <div className="header-msg">
                                    <h3>复仇者联盟3：无限战争</h3>
                                    <p><span>类型：</span>动作，冒险，科幻</p>
                                    <p><span>时长：</span>150分钟</p>
                                </div>
                            </div>
                            <div className="info-main">
                                <p><span>影院：</span>万达影院</p>
                                <p><span>影厅：</span>2号影厅</p>
                                <p><span>版本：</span>英语3D</p>
                                <p><span>场次：</span>今天 5月22 20:00</p>
                                <p><span>票价：</span>{"￥" + "32.50" + "/张"}</p>
                                <p><span>座位：</span>1排1座</p>
                            </div>
                        </div>
                        <div style={{"marginBottom": "10px" }}>
                            <div className="info-header">
                                <div className="header-msg">
                                    <h3>复仇者联盟3：无限战争</h3>
                                    <p><span>类型：</span>动作，冒险，科幻</p>
                                    <p><span>时长：</span>150分钟</p>
                                </div>
                            </div>
                            <div className="info-main">
                                <p><span>影院：</span>万达影院</p>
                                <p><span>影厅：</span>2号影厅</p>
                                <p><span>版本：</span>英语3D</p>
                                <p><span>场次：</span>今天 5月22 20:00</p>
                                <p><span>票价：</span>{"￥" + "32.50" + "/张"}</p>
                                <p><span>座位：</span>1排1座</p>
                            </div>
                        </div>
                        <div>
                            <div className="info-header">
                                <div className="header-msg">
                                    <h3>复仇者联盟3：无限战争</h3>
                                    <p><span>类型：</span>动作，冒险，科幻</p>
                                    <p><span>时长：</span>150分钟</p>
                                </div>
                            </div>
                            <div className="info-main">
                                <p><span>影院：</span>万达影院</p>
                                <p><span>影厅：</span>2号影厅</p>
                                <p><span>版本：</span>英语3D</p>
                                <p><span>场次：</span>今天 5月22 20:00</p>
                                <p><span>票价：</span>{"￥" + "32.50" + "/张"}</p>
                                <p><span>座位：</span>1排1座</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Order