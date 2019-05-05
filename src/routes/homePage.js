import React,{Component} from "react"
import { withRouter } from 'dva/router'
import ShareHead from 'components/shareHead/shareHead'
import styles from 'css/home.less'

import HotPage from 'routes/hotPage'
import WillPage from 'routes/willPage'
import TabsControl from 'components/tabsControl/tabsControl'

class HomePage extends Component {
  render(){
    return(
      <div>
        {/* 头部 */}
        <ShareHead></ShareHead>
        {/* navBar */}
        <div className={styles.navBar_wrap}>
          <TabsControl>
            <div name='正在热映'>
                 <HotPage></HotPage>
            </div>
            <div name='即将上映'>
                 <WillPage styles={{"height":"100%"}}></WillPage>
            </div>
          </TabsControl>
        </div>
      </div>
    )
  }
}

export default withRouter(HomePage)