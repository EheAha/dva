import React, { Component } from 'react'
import { Toast } from 'antd-mobile'
import styles from 'css/willPage.less'
import img1 from 'images/02.jpg'
import axios from 'axios'

class WillPage extends Component {
    state = {
        expected: [],
        expectPaging: []
    }

    componentDidMount() {
        this.loadExpected();
        // this.loadOterMovie();
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
                console.log(res.data)
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
    // async loadOterMovie(){
    //     await axios.get('/ajax/comingList').then(res=>{
    //         console.log(res)
    //     })
    // }

    render() {
        const { expected, expectPaging } = this.state;
        const reg = new RegExp(/w.h/g)
        console.log(expected)
        return (
            <div className={styles.willList_wrap}>
                <div className={styles.most_expected}>
                    <div className={styles.title}>近期最受期待</div>
                    <div className={styles.most_expected_list}>
                    {
                        expected.length!==0 &&  expected.map((item,index)=>{
                            return(
                                <div className={styles.expected_item} key={index}>
                                    <div className={styles.poster}>
                                        <img src={item.img.replace(reg,"170.230")} alt='' />
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
                <div className={styles.coming_list}>
                    <div>
                        <p className={styles.group_date}>4月29日 周一</p>
                        <div className={styles.item}>
                            <div className={styles.main_block}>
                                <div className={styles.avatar}>
                                    <div class={styles.default_img_bg}>
                                        <img src={img1} alt='' />
                                    </div>
                                </div>
                                <div className={styles.content_wrapper}>
                                    <div className={styles.content}>
                                        <div className={styles.movie_title}>
                                            <div className={styles.title}>何以为家</div>
                                        </div>
                                        <div className={styles.detail}>
                                            <div className={styles.line_ellipsis}>
                                                <span className={styles.person}>82478</span>
                                                <span className={styles.p_suffix}>人想看</span>
                                            </div>
                                            <div className={styles.actor}>主演: 赞恩·阿尔·拉菲亚,约丹诺斯·希费罗,博鲁瓦蒂夫·特雷杰·班科尔</div>
                                            <div className={styles.actor}>2019-04-29上映</div>
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
                    </div>
                </div>
            </div>
        )
    }
}

export default WillPage
