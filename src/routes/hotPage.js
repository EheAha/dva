import React,{Component} from 'react'
import { withRouter } from 'dva/router'
import styles from 'css/hotPage.less'
import img1 from 'images/01.jpg'
import axios from 'axios'

class HotPage extends Component{
    constructor(){
        super();
        this.state={

        }
        this.hotDetailJump = this.hotDetailJump.bind(this);
    }

    componentDidMount(){
        axios.get('/api/hot').then((res)=>{
            console.log(res)
        })
    }

    hotDetailJump(){
        this.props.history.push('/detail');
    }

    render(){
        return(
            <div className={styles.hotList_wrap}>
                <div className={styles.hotList} onClick={this.hotDetailJump}>
                    <div>
                        <img src={img1} alt=''/>
                    </div>
                    <ul>
                        <li className={styles.ellipsis}>
                            <div className={styles.title}>调音师</div>
                        </li>
                        <li>
                            <span className={styles.guanzhongPing}>观众评</span>
                            <span className={styles.pingfen}>9.1</span>
                        </li>
                        <li className={styles.ellipsis}>
                            <span>主演：</span>
                            <span className={styles.zhuyan}>阿尤斯曼·库拉纳,塔布,拉迪卡·艾普特</span>
                        </li>
                        <li>今天211家影院放映1581场</li> 
                    </ul>
                    <div className={styles.purchase_wrap}>
                        <span className={styles.purchase}>购票</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(HotPage)
