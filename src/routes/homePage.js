import React,{Component} from "react"
import styles from 'css/home.less'
import { Tabs } from 'antd-mobile';

import hotPage from 'routes/hotPage'
import willPage from 'routes/willPage'
import HotPage from "./hotPage";
import WillPage from "./willPage";
import TabsControl from 'components/tabsControl/tabsControl'

const tabs = [
  { title: "正在热映" },
  { title: "即将上映" }
];

class HomePage extends Component {
  // constructor(props){
  //   super(props);
  //   this.state={

  //   };
  // }
  render(){
    return(
      <div>
        {/* 头部 */}
        <div className={styles.headerHome}>喵喵电影</div>
        {/* navBar */}
        <div className={styles.navBar_wrap}>
          <TabsControl>
            <div name='正在热映'>
                 hot
            </div>
            <div name='即将上映'>
                 willPage
            </div>
          </TabsControl>
        </div>
      </div>
    )
  }
}

export default HomePage

/* import React from 'react'
import { connect } from 'dva'
import { Button, Flex, WingBlank, WhiteSpace } from 'antd-mobile'
import Place from '../components/place'
import CalendarSelect from '../components/calendarSelect'
import styles from '../assets/css/home.less'
import logo from '../assets/images/logo-light.jpg'
import { ipInfo } from '../services/service'
import { routerRedux } from 'dva/router' */

// class homePage extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       showCalendar: false,
//       showFormSelect: false,
//       showToSelect: false
//     }
//     this.closeModule = this.closeModule.bind(this)
//   }
//   closeModule({ stateName, status }) {
//     this.setState({
//       [stateName]: !this.state.showDate
//     })
//   }
//   componentDidMount() {
//     ipInfo().then(res => {
//       this.props.dispatch({
//         type: 'app/updateState',
//         payload: {
//           ipInfo: res.data
//         }
//       })
//     })
//   }
//   render() {
//     return (
//       <div className={styles['animate-route']}>
//         {/* navbar */}
//         <WhiteSpace />
//         <WingBlank style={{ flex: 1 }}>
//           <WhiteSpace size="xl" />
//           {/* logo */}
//           <Flex justify="center">
//             <img src={logo} width={'200px'} alt="logo" />
//           </Flex>
//           <WhiteSpace size="xl" />
//           {/* 出发地目的地输入框 */}
//           <Place></Place>
//           <WhiteSpace size="xl" />
//           {/* 日历选择 */}
//           <CalendarSelect></CalendarSelect>
//           <WhiteSpace size="xl" />
//           <Button
//             onClick={() => {
//               this.props.dispatch(
//                 routerRedux.push({ pathname: 'result' })
//               )
//             }}
//             type="primary"
//             className={styles.searchBtn}
//           >
//             Search
//           </Button>
//         </WingBlank>
//       </div>
//     )
//   }
// }

// export default connect()(homePage);
