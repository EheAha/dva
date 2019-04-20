import React,{Component} from 'react'
import styles from 'css/hotPage.less'
import img1 from 'images/01.jpg'
import img2 from 'images/logo-light.jpg'

class HotPage extends Component{
    render(){
        return(
            <div className={styles.hotList_wrap}>
                <div>
                    <div>
                        hot
                        {/* <img src={img1}/>
                        <img src={img1}/>
                        <img src={img2}/>
                        <img src={img2}/> */}
                    </div>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li> 
                    </ul>
                    <div>
                        <span></span>
                    </div>
                </div>
            </div>
        )
    }
}

export default HotPage
