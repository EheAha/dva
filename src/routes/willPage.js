import React, { Component } from 'react'
import { Toast } from 'antd-mobile'
import styles from 'css/willPage.less'
import axios from 'axios'
import BScroll from 'better-scroll'

class WillPage extends Component {
    state = {
        expected: [],
        expectPaging: [],
        comingLists: [],
        movieIds: [],
        ci:1,
        limit:5,
        start:0,
        isShowLoading:'block'
    }

    componentDidMount() {
        this.loadExpected();
        this.loadComing();
    }

    //加载受欢迎电影数据
    async loadExpected() {
        const result = await axios.get('/ajax/mostExpected', {
            params: {
                "ci": 1,
                "limit": 10,
                "offset": 0,
                "token": "uuid_n_v=v1; iuuid=85BB33106E5E11E9ACFEE7AC5DD3B70BB95CDD36A5DC404C989BA382807C5A9C; webp=true; _lxsdk_cuid=16a82924aaac8-03d9bd87edc5b6-2d604637-3d10d-16a82924aaa71; __mta=19242631.1556968829404.1556968829404.1556968857102.2; _lxsdk=85BB33106E5E11E9ACFEE7AC5DD3B70BB95CDD36A5DC404C989BA382807C5A9C; ci=1%2C%E5%8C%97%E4%BA%AC; selectci=true; from=canary; __mta=19242631.1556968829404.1556968857102.1556979304331.3; _lxsdk_s=16a8332c48c-c35-e6c-44a%7C%7C4"
            }
        }).then(res => {
            if (res.status === 200) {
                // console.log(res.data)
                return res.data
            } else {
                Toast.info('代理数据发生错误');
            }
        })

        this.setState({
            expected: result.coming,
            expectPaging: result.paging
        })
    }

    //加载其他电影数据
    async loadComing() {
        const result = await axios.get('/mock/comingList').then(res => {
            if (res.status === 200) {
                console.log(res.data)
                return res.data.data
            } else {
                Toast.info('代理数据发生错误');
                return
            }
        })
        this.setState({
            comingLists: result.coming,
            movieIds: result.movieIds
        })
        this.comingList = new BScroll(this.cominglist,{
            click:true,
            probeType:1,
            scrollX:true,
            pullUpLoad:{
                threshold:30
            }
        })
        
        this.comingList.on('pullingUp',async ()=>{

            //请求更多coming数据
            if(this.state.ci<7){
                const loadData = await axios.post('/mock/moreComing',{params:{ start:this.state.start,ci:this.state.ci,limit:this.state.limit}}).then(res=>{
                    if(res.status===200){
                        return res.data.data.coming
                    }
                })
                this.setState(()=>{
                    let obj = [...this.state.comingLists,...loadData]
                    return{
                        comingLists:obj
                    }
                },()=>{
                    this.comingList.refresh();
                    let ci = this.state.ci;
                    let start = this.state.start;
                    let limit = this.state.limit;
                    this.setState(()=>{
                        return{
                            ci:ci+1,
                            start:ci*limit
                        }
                    })
                    //可以进行下一次刷新了
                    this.comingList.finishPullUp();
                })    
            }else{
                this.setState({
                    isShowLoading:'none'
                })
                Toast.info('没有更多数据了');
                this.comingList.finishPullUp();
            }  
        })
    }

    render() {
        const { expected, comingLists,isShowLoading } = this.state;
        const reg = new RegExp(/w.h/g)
        console.log(comingLists)
        return (
            <div className={styles.willList_wrap} ref={el => this.cominglist = el}>
                <div>
                    <div className={styles.most_expected}>
                        <div className={styles.title}>近期最受期待</div>
                        <div className={styles.most_expected_list}>
                            <div className='top_wrap'>
                                {
                                    expected.length !== 0 && expected.map((item, index) => {
                                        return (
                                            <div className={styles.expected_item} key={index}>
                                                <div className={styles.poster}>
                                                    <img src={item.img.replace(reg, "170.230")} alt='' />
                                                    <div className={styles.wish_bg}>
                                                        <span>{item.wish}</span>
                                                        <span>想看</span>
                                                    </div>
                                                </div>
                                                <div className={styles.name}>
                                                    {item.nm}
                                                </div>
                                                <div className={styles.data}>
                                                    {item.comingTitle}
                                                </div>
                                            </div>
                                        )
                                    })

                                }
                            </div>
                        </div>
                    </div>
                    <div className={styles.coming_list}>
                        <div>
                            {
                                comingLists.length !== 0 && comingLists.map((item, index) => {
                                    return (
                                        <div className={styles.item} key={index}>
                                            <div className={styles.main_block}>
                                                <div className={styles.avatar}>
                                                    <div class={styles.default_img_bg}>
                                                        <img src={item.img.replace(reg, "170.230")} alt='' />
                                                    </div>
                                                </div>
                                                <div className={styles.content_wrapper}>
                                                    <div className={styles.content}>
                                                        <div className={styles.movie_title}>
                                                            <div className={styles.title}>{item.nm}</div>
                                                        </div>
                                                        <div className={styles.detail}>
                                                            <div className={styles.line_ellipsis}>
                                                                <span className={styles.person}>{item.wish}</span>
                                                                <span className={styles.p_suffix}>人想看</span>
                                                            </div>
                                                            <div className={styles.actor}>{item.star}</div>
                                                            <div className={styles.actor}>{item.showInfo}</div>
                                                        </div>
                                                    </div>
                                                    <div className={styles.button_block}>
                                                        <div className={styles.btn}>
                                                            <span>预售</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div style={{"textAlign":"center","lineHeight":"26px","background":"#f5f5f5","display":isShowLoading}}>上拉加载更多...</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WillPage
