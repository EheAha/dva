import React, { Component } from 'react';
import ShareHead from 'components/shareHead/shareHead'
import 'css/moviePage.less'

class MoviePage extends Component {
  constructor() {
    super();
    this.state = {
      selectText: ''
    }
    this.select = this.select.bind(this);
  }

  select(e) {
    this.setState({
      selectText: e.target.getAttribute("data-tab")
    })
    console.log(e.target.getAttribute("data-tab"))
  }

  render() {
    const { selectText } = this.state;
    return (
      <div>
        <ShareHead></ShareHead>
        <div className="nav-wrap filter-nav-wrap">
          <div className="tab mb-line-b">
            <div className={selectText === '.region' ? 'item chosenTitle' : 'item'} data-tab=".region" onClick={this.select}>
              全城
              <span className="drop"></span>
            </div>
            <div className={selectText === '.brand' ? 'item chosenTitle' : 'item'} data-tab=".brand" onClick={this.select}>
              品牌
              <span className="drop"></span>
            </div>
            <div className={selectText === '.special' ? 'item chosenTitle' : 'item'} data-tab=".special" onClick={this.select}>
              特色
              <span className="drop"></span>
            </div>
          </div>
          <div className="close-tab" style={{ 'display': selectText !== '' ? 'block' : 'none' }}>
            <div className="tab-content">
              <div className="page special" style={{ "display": selectText === '.special' ? 'block' : 'none' }}>
                <div id="special-content" style={{ "height": "345px" }}>
                  <div className="item-title">特色功能</div>
                  <div className="item-list">
                    <div className="item chosen" data-id="-1" data-type="service">全部</div>
                    <div className="item" data-id="4" data-type="service">会员卡</div>
                    <div className="item" data-id="3" data-type="service">可改签</div>
                    <div className="item" data-id="2" data-type="service">可退票</div>
                  </div>
                  <div className="item-title">特殊厅</div>
                  <div className="item-list">
                    <div className="item chosen" data-id="-1" data-type="hallType">全部</div>
                    <div className="item" data-id="10" data-type="hallType">RealD厅</div>
                  </div>
                </div>
                <div id="special-btn">
                  <span className="btn" id="cancel-btn">重置</span>
                  <span className="btn" id="confirm-btn">确定</span>
                </div>
              </div>
              <div className="page brand" style={{ "display": selectText === '.brand' ? 'block' : 'none' }}>
                <div id="brand-content" style={{ 'height': '345px' }}>
                  <div className="item brand-list chosen" data-id="-1" data-type="brand">
                    <span className="brand-name">全部</span>
                    <span className="brand-count">362</span>
                  </div>
                  <div className="item brand-list" data-id="2880988" data-type="brand">
                    <span className="brand-name">SFC上影影城</span>
                    <span className="brand-count">26</span>
                  </div>
                  <div className="item brand-list" data-id="0" data-type="brand">
                    <span className="brand-name">其他</span>
                    <span className="brand-count">225</span>
                  </div>
                </div>
              </div>
              <div className="page region" style={{ "display": selectText === '.region' ? 'block' : 'none' }}>
                <div id="region-tab">
                  <ul className="tab">
                    <li className="item chosen" data-type="region" data-subnav="#district">商区</li>
                    <li className="item" data-type="region" data-subnav="#subway">地铁站</li>
                  </ul>
                </div>
                <div id="region-list" style={{ 'height': ' 402.5px' }}>
                  <div id="region-sidenav">
                    <div id="district">
                      <div className="district-li item chosen" data-type="district" data-id="-1">全部(362)</div>
                      <div className="district-li item" data-type="district" data-id="5">浦东新区(73)</div>
                      <div className="district-li item" data-type="district" data-id="666">崇明区(3)</div>
                    </div>
                    <div id="subway" style={{ 'display': 'none' }}>
                      <div className="district-li item" data-type="line" data-id="-1">全部(362)</div>
                      <div className="district-li item" data-type="line" data-id="21">1号线(57)</div>
                      <div className="district-li item" data-type="line" data-id="31">磁悬浮线(2)</div>
                    </div>
                  </div>
                  <div id="region-list-item"></div>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cinema-list" data-cid="c_5ovvtlp2" style={{'marginBottom': '55px'}}>
          <div className="list-wrap" style={{'marginTop': 0, 'minHeight': '627px'}}>
            <div className="item mb-line-b" data-id="17158" data-bid="dp_wx_home_cinema_list">
              <div className="title-block box-flex middle">
                <div className="title line-ellipsis">
                  <span>JIA(嘉莱影城九亭店)</span>
                  <span className="price-block">
                    <span className="price">18</span><span class="q">元起</span>
                  </span>
                </div>
                <div className="location-block box-flex">
                  <div className="flex line-ellipsis">松江区地铁九号线九亭站地铁二号口内（地下一层）</div>
                  <div className="distance">846.5km</div>
                </div>
                <div className="flex"></div>
                <div className="label-block">
                  <div className="allowRefund">退</div>
                  <div className="endorse">改签</div>
                  <div className="snack">小吃</div>
                  <div className="vipTag">折扣卡</div>
                </div>
                <div className="discount-block">
                  <div>
                    <div className="discount-label normal card">
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAgFJREFUSA3Nlz1LA0EQhmf3kouFEQwi+FEYQ+xEsImFoCDoL/CLaKd/QbC0sbCzFVuxsRS1jEVAsUqrIILRQAhaBGKMuawzwpGAm83mNhddCHfZnd3n3Z2ZuxsG2JI3YtQpVw6AiTkhYJj6/GqMwSsIdm312DsnMyzLCF79rGRAiIhfUOm6jL0FQvZU4Gfn0GU4KcINE5vjsc9LFXajE9kcfT7UDZaMQWwuG9Dpi/YyiIWZjqnSxrOAtWgANsYDysV1Bj0L0Flcx8ZoC1F0wf50UMo5fqjCY1FIxxo7jQSUHWgK+ag2YprfGwnIlQTQTk3a/46B2UEOIUu+v0gIIMgZLLTIZHJTOl+TL4K9ShckMc36Q+pc356QB6FLLJQFCqi4f39d2WoKLTy03ckg2OjAvcyXh9n1KX8eA0YC4n0MtuLoJru+o3bvjAS8o2vpfXCYsGEzZkFYHQ5SbcoglM5o6KQAoxhIDHBYiVqYERZcZB04f3aghNGv04wEuIDbQg3u8Lc4YsHymAVLeD17cuDypbWKjgggIZTpVwhM5x1YxzdlpaaXXB0T4J5GEbPy6F7/8WwUhC7U5OpZgIPfU5qnrNTn+UmoXLWNQc8n0AZDacqxUskpLXwcJDbHMinlI0O9NLI51WiAZZLa0odRZBKbU4FINRoDdtoNdxCDWMQk9jePWpE8hVOLbwAAAABJRU5ErkJggg==" alt="" />
                    </div>
                    <div className="discount-label-text">开卡特惠，首单2张立减10元</div>
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

export default MoviePage

// import React from 'react'
// import {connect} from 'dva'
// import {Button} from 'antd-mobile'
                // import styles from '../assets/css/IndexPage.less'
                // import HeaderCom from '../components/common/headerCom'
// import {routerRedux} from 'dva/router'

// class resultPage extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       currency: props.currency,
//       locale: props.locale
//     }
//     this._goHome = this._goHome.bind(this);
//   }
//   onChange = (props) => {
//     props.dispatch({
//       type: 'app/updateState',
//       payload: {
//         locale: props.locale === 'en' ? 'fr' : 'en'
//       }
//     })
//   }
//   _goHome() {
//     this.props.dispatch(
//       routerRedux.push('/')
//     )
//   }
//   render() {
//     return (
//       <div>
//         <HeaderCom iconLeft="icon-leftarrow" callbackLeft={this._goHome} titleText={'Result page'}></HeaderCom>
//         <h1 className={styles.title}>this is result page</h1>
//         <h3>当前currencu: {this.props.currency}</h3>
//         <h3>当前locale: {this.props.locale}</h3>
//         <Button onClick={() => { this.onChange(this.props) }}>en/fr 切换</Button>
//       </div>
//     )
//   }
// }

// function mapStateToProps({ app }) {
//   return {
//     currency: app.currency,
//     locale: app.locale
//   }
// }


// export default connect(mapStateToProps)(resultPage);