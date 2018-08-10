import React from 'react'
import { connect } from 'dva'
import { Button, Flex, WingBlank, WhiteSpace } from 'antd-mobile'

import Title from '../components/title'
import Place from '../components/place'
import CalendarSelect from '../components/calendarSelect'
import styles from '../assets/css/home.less'
import logo from '../assets/images/logo-light.jpg'

import { ipInfo } from '../services/service'

class homePage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showCalendar: false,
      showFormSelect: false,
      showToSelect: false
    }
    this.closeModule = this.closeModule.bind(this)
  }
  closeModule ({stateName, status}) {
    this.setState({
      [stateName]: !this.state.showDate
    })
  }
  componentDidMount () {
    ipInfo().then(res => {
      this.props.dispatch({
        type: 'app/updateState',
        payload: {
          ipInfo: res.data
        }
      })
    })
  }
  render () {
    return (
      <div className={styles['animate-route']}>
        {/* navbar */}
        <Title name="Home" onClose={this.closeModule}></Title>
        <WhiteSpace/>
        <WingBlank style={{flex: 1}}>
          {/* menu */}
          <Flex justify="end">
            <span className={`${styles.menu} iconfont icon-outline-menu-px`}></span>
          </Flex>
          <WhiteSpace size="xl"/>
          {/* logo */}
          <Flex justify="center">
            <img src={logo} width={'200px'} alt="logo"/>
          </Flex>
          <WhiteSpace size="xl"/>
          {/* 出发地目的地输入框 */}
          <Place></Place>
          <WhiteSpace size="xl"/>
          {/* 日历选择 */}
          <CalendarSelect></CalendarSelect>
          <WhiteSpace size="xl"/>
          <Button type="primary" className={styles.searchBtn}>Search</Button>
        </WingBlank>
      </div>
    )
  }
}

export default connect()(homePage);
