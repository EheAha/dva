import React, { Component } from 'react'
import styles from 'css/willPage.less'
import img1 from 'images/02.jpg'

class WillPage extends Component {
    render() {
        return (
            <div className={styles.willList_wrap}>
                <div className={styles.most_expected}>
                    <div className={styles.title}>近期最受期待</div>
                    <div className={styles.most_expected_list}>
                        <div className={styles.expected_item}>
                            <div className={styles.poster}>
                                <img src={img1} alt=''/>
                                <div className={styles.wish_bg}>
                                    <span>11111</span>
                                    <span>想看</span>
                                </div>
                            </div>
                            <div className={styles.name}>
                                下一任：前任
                            </div>
                            <div className={styles.data}>
                                5月1日
                            </div>
                        </div>
                        <div className={styles.expected_item}>
                            <div className={styles.poster}>
                                <img src={img1} alt=''/>
                                <div className={styles.wish_bg}>
                                    <span>11111</span>
                                    <span>想看</span>
                                </div>
                            </div>
                            <div className={styles.name}>
                                下一任：前任
                            </div>
                            <div className={styles.data}>
                                5月1日
                            </div>
                        </div>
                        <div className={styles.expected_item}>
                            <div className={styles.poster}>
                                <img src={img1} alt=''/>    
                                <div className={styles.wish_bg}>
                                    <span>11111</span>
                                    <span>想看</span>
                                </div>
                            </div>
                            <div className={styles.name}>
                                下一任：前任
                            </div>
                            <div className={styles.data}>
                                5月1日
                            </div>
                        </div>
                        <div className={styles.expected_item}>
                            <div className={styles.poster}>
                                <img src={img1} alt=''/>
                                <div className={styles.wish_bg}>
                                    <span>11111</span>
                                    <span>想看</span>
                                </div>
                            </div>
                            <div className={styles.name}>
                                下一任：前任
                            </div>
                            <div className={styles.data}>
                                5月1日
                            </div>
                        </div>
                        <div className={styles.expected_item}>
                            <div className={styles.poster}>
                                <img src={img1} alt=''/>
                                <div className={styles.wish_bg}>
                                    <span>11111</span>
                                    <span>想看</span>
                                </div>
                            </div>
                            <div className={styles.name}>
                                下一任：前任
                            </div>
                            <div className={styles.data}>
                                5月1日
                            </div>
                        </div>
                        <div className={styles.expected_item}>
                            <div className={styles.poster}>
                                <img src={img1} alt=''/>
                                <div className={styles.wish_bg}>
                                    <span>11111</span>
                                    <span>想看</span>
                                </div>
                            </div>
                            <div className={styles.name}>
                                下一任：前任
                            </div>
                            <div className={styles.data}>
                                5月1日
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.coming_list}>
                    <div>
                        <p className={styles.group_date}>4月29日 周一</p>
                        <div className={styles.item}>
                            <div className={styles.main_block}>
                                <div className={styles.avatar}>
                                    <div class={styles.default_img_bg}>
                                        <img src={img1} alt=''/>
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
