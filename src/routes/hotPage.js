import React, { Component } from 'react'
import { withRouter } from 'dva/router'
import styles from 'css/hotPage.less'
import img1 from 'images/01.jpg'
import axios from 'axios'

class HotPage extends Component {
    constructor() {
        super();
        this.state = {
            hotList: []
        }
    }

    componentDidMount() {
        this.hotMovieRequest();
    }

    //对热映电影的数据请求
    async hotMovieRequest() {
        const result = await axios.get('/api/position/fe/list', {
            params: {
                pageNo: 1,
                pageSize: 7
            }
        }).then((res) => {
            if (res.status === 200) {
                return res.data.data
            }
        })
        this.setState({
            hotList: result.list
        });
    }

    hotDetailJump(id) {
        this.props.history.push("/detail?id="+id);
    }

    render() {
        const { hotList } = this.state
        console.log(this.state.hotList)
        return (
            <div className={styles.hotList_wrap}>
                <div>
                    {
                        hotList.length !== 0 && hotList.map((item, index) => {
                            return (
                                <div className={styles.hotList} onClick={this.hotDetailJump.bind(this,item.movieId)} key={index}>
                                    <div>
                                        <img src={'http://localhost:3000/uploads/' + item.movieLogo} alt='' />
                                    </div>
                                    <ul>
                                        <li className={styles.ellipsis}>
                                            <div className={styles.title}>{item.movieName}</div>
                                        </li>
                                        <li>
                                            <span className={styles.guanzhongPing}>观众评</span>
                                            <span className={styles.pingfen}>{item.movieScore}</span>
                                        </li>
                                        <li className={styles.ellipsis}>
                                            <span>主演：</span>
                                            <span className={styles.zhuyan}>{item.starring}</span>
                                        </li>
                                        <li>{item.releasedInfo}</li>
                                    </ul>
                                    <div className={styles.purchase_wrap}>
                                        <span className={styles.purchase}>购票</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default withRouter(HotPage)
