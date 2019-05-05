import React, { Component } from 'react';
import classnames from 'classnames';
import {Toast} from 'antd-mobile';
import axios from 'axios';
import uuid from 'node-uuid';
import _ from 'lodash';
import 'css/ChooseSeat.less';

import empty from 'images/empty.png';
import occupy from 'images/occupy.png';
import select from 'images/select.png';
import screen from 'images/screen.png';

class ChooseSeat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            row: 10,
            column: 10,
            roomInfo: [],
            filmInfo: [],
            seatCode: [],
            selectSeat: [],
            id: '',
            ticketInfo:{}
        };
        this.sureChooseSeat = this.sureChooseSeat.bind(this);
    };

    componentWillMount() {
        const id = this.props.location.search.split("=")[1];
        this.setState({
            id
        })
        axios.all([this.getRoomInfo(), this.getMovieDetail()])
            .then(axios.spread((roomInfo, filmInfo) => {
                this.setState({
                    roomInfo: roomInfo.data.data.data,
                    filmInfo: filmInfo.data.data.hot
                }, () => {
                    this.code();
                    this.state.filmInfo.map((item)=>{
                        if(item.id===id){
                            console.log(item);
                            this.setState({
                                ticketInfo:item
                            })
                        }
                    })
                });
            }));
    };

    getRoomInfo() {
        return axios.get('/mock/roomInfo');
    };
    
    getMovieDetail() {
        return axios.get('/mock/hotDetails');
    }

    renderSeat() {
        let { roomInfo } = this.state;
        if (roomInfo.length <= 0) {
            return;
        }
        let columns = [];
        for (let i = 0, len = roomInfo.length; i < len; i++) {
            columns.push(<div key={uuid.v4()} className="row">
                {roomInfo[i].map((val, index) => {
                    return <span
                        key={uuid.v4()}
                        onClick={e => this.click(i, index)}
                        className={classnames('seat', { 'empty': val === 0, 'occupy': val === 1, 'select': val === 2 })}
                    ></span>
                })}
            </div>);
        }
        return columns;
    };

    renderNumber() {
        let { roomInfo } = this.state;
        if (roomInfo.length <= 0) {
            return;
        }
        let spans = [];
        let row = 0;
        //检验roomInfo下每个数组的合并值
        for (let i = 0, len = roomInfo.length; i < len; i++) {
            if (this.getSum(roomInfo[i]) > 0) {
                spans.push(<span key={uuid.v4()}>{++row}</span>);
            } else {
                spans.push(<span key={uuid.v4()}></span>);
            }
        }
        return spans;
    }

    //给座位编码 排行与列
    code() {
        let { roomInfo } = this.state;
        let seatRow = 0;
        let seatColumn = 0;
        let rowData = [];
        for (let i = 0, len = roomInfo.length; i < len; i++) {
            let columnData = [];
            seatColumn = 0;
            if (this.getSum(roomInfo[i]) > 0) {
                seatRow += 1;
            }
            for (let j = 0, cLen = roomInfo[i].length; j < cLen; j++) {
                //当座位号不为0时，添加属性code:几排几座；等于0时，只有属性row和col
                columnData.push(roomInfo[i][j] > 0 ? {
                    row: i,
                    column: j,
                    // code: seatRow + "排" + (++seatColumn) + "座"
                } : {
                        row: i,
                        column: j,
                        code: seatRow + "排" + (j + 1) + "座"
                    });
            }
            rowData.push(columnData);
        }
        this.setState({
            seatCode: rowData
        });
    };

    getSum(arr) {
        return arr.reduce(function (prev, curr, index, arr) {
            return prev + curr;
        });
    }

    click(row, column) {
        let { roomInfo, seatCode, selectSeat } = this.state;
        if (roomInfo[row][column] === 1) {
            return;
        }
        let tmpRoom = _.cloneDeep(roomInfo);
        let tmpSeat = _.cloneDeep(selectSeat);
        if (tmpRoom[row][column] === 0 && tmpSeat.length < 5) {
            tmpRoom[row][column] = 2;
            let code = _.cloneDeep(seatCode[row][column]);
            tmpSeat.push(code);
        } else if (tmpRoom[row][column] === 2) {
            tmpRoom[row][column] = 0;
            //找到取消的作为坐标，截取掉
            let index = _.findIndex(selectSeat, { row, column });
            tmpSeat.splice(index, 1);
        }

        this.setState({
            roomInfo: tmpRoom,
            selectSeat: tmpSeat
        });
    }

    //点击确认选座时要判断是否已经登陆
    async sureChooseSeat() {
        if(this.state.selectSeat.length!==0){
            await axios.get('/api/users/isSignin').then((res)=>{
                console.log(res)
                if(!res.data.ret){
                    Toast.info('请登录后进行购票！');
                    this.props.history.push('/loginIn');
                    return;
                }
                const username = res.data.data.username;
                //将座位以及存储进数据库
                this.saveDatabase(username);
                //电影票购买完毕，到订单中查看
                this.props.history.push('/ticketing?id='+this.state.id);
            })
        }else{
            Toast.info('您当前没有选择座位，请选择。');
        }
    }

    //将座位以及存储进数据库
    async saveDatabase(username){
        await axios.post('/api/order/save',{
            'username':username,
            'data':{
                'seat':this.state.selectSeat,
                'other':this.state.ticketInfo
            }
        }).then((res)=>{
            console.log(res.data)
        })
    }

    render() {
        let { filmInfo, selectSeat, id } = this.state;
        console.log(selectSeat)
        return (
            <div className="container_wrap">
                <div className="container">
                    <div className="seat-container">
                        <div className="seat-header">
                            <ul>
                                <li>
                                    <img src={empty} alt="可选座位" /><span>可选座位</span>
                                </li>
                                <li>
                                    <img src={occupy} alt="已售座位" /><span>已售座位</span>
                                </li>
                                <li>
                                    <img src={select} alt="已选座位" /><span>已选座位</span>
                                </li>
                            </ul>
                        </div>
                        <div className="seat-main">
                            <div className="screen">
                                <img src={screen} alt="屏幕" />
                                <h4>屏幕中央</h4>
                            </div>
                            <div className="seats">
                                <span className="line"></span>
                                {this.renderSeat()}
                                <div className="seat-number">
                                    {this.renderNumber()}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="msg-container">
                        <div>
                            {
                                filmInfo.length !== 0 && filmInfo.map((item, index) => {
                                    if (item.id === id) {
                                        return (
                                            <div key={index}>
                                                <div className="info-header">
                                                    <div className="header-msg">
                                                        <h3>{item.nm}</h3>
                                                        <p><span>类型：</span>{item.type}</p>
                                                        <p><span>时长：</span>{item.duration}</p>
                                                    </div>
                                                </div>
                                                <div className="info-main">
                                                    <p><span>影院：</span>{item.cinema}</p>
                                                    <p><span>影厅：</span>{item.filmRoom}</p>
                                                    <p><span>版本：</span>{item.version}</p>
                                                    <p><span>场次：</span>{item.arrange}</p>
                                                    <p><span>类型：</span>{item.type}</p>
                                                    <p><span>票价：</span>{"￥" + Number(item.price).toFixed(2) + "/张"}</p>
                                                </div>
                                                <div className="select-item">
                                                    <span className="select-label">座位：</span>
                                                    <div className="select-seat">
                                                        {
                                                            selectSeat.length > 0 ? (selectSeat.map(val => {
                                                                return <span key={uuid.v4()} className="ticket">{val.code}</span>
                                                            })) : <span>一次最多选择五张电影票</span>
                                                        }
                                                    </div>
                                                </div>
                                                <div className="select-item">
                                                    <span className="select-label">总价：</span>
                                                    <span>{(selectSeat.length * item.price).toFixed(2)}元</span>
                                                </div>
                                                <button className="btn" onClick={this.sureChooseSeat}>确认选座</button>
                                            </div>
                                        )
                                    }
                                })
                            }
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };


}

export default ChooseSeat;
