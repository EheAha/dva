import React, { Component } from 'react';
import ShareHead from 'components/shareHead/shareHead'
import 'css/moviePage.less'

class MoviePage extends Component {
  constructor(){
    super();
    this.state={
      selectText:''
    }
    this.select = this.select.bind(this);
  }

  select(){
    // this.setState({
    //   selectText:
    // })
    console.log(this.selectItem)
  }

  render() {
    return (
      <div>
        <ShareHead></ShareHead>
        <div className="nav-wrap filter-nav-wrap">
          <div className="tab mb-line-b">
            <div className="item" data-tab=".region" onClick={this.select} ref={ref=>this.selectItem=ref}>
              全城
              <span className="drop"></span>
            </div>
            <div className="item" data-tab=".brand" onClick={this.select}>
              品牌
              <span className="drop"></span>
            </div>
            <div className="item" data-tab=".special" onClick={this.select}>
              特色
              <span className="drop"></span>
            </div>
          </div>
          {/* <div className="close-tab">
            <div class="tab-content">
              <div class="page special">
                <div id="special-content" style="height: 345px;">
                  <div class="item-title">特色功能</div>
                  <div class="item-list">
                    <div class="item chosen" data-id="-1" data-type="service">全部</div>

                    <div class="item" data-id="4" data-type="service">会员卡</div>

                    <div class="item" data-id="3" data-type="service">可改签</div>

                    <div class="item" data-id="2" data-type="service">可退票</div>

                  </div>

                  <div class="item-title">特殊厅</div>
                  <div class="item-list">

                    <div class="item chosen" data-id="-1" data-type="hallType">全部</div>

                    <div class="item" data-id="10" data-type="hallType">RealD厅</div>


                  </div>


                </div>
                <div id="special-btn">
                  <span class="btn" id="cancel-btn">重置</span>
                  <span class="btn" id="confirm-btn">确定</span>
                </div>
              </div>
              <div class="page brand">
                <div id="brand-content" style="height: 345px;">

                  <div class="item brand-list chosen" data-id="-1" data-type="brand">
                    <span class="brand-name">全部</span>
                    <span class="brand-count">362</span>
                  </div>

                  <div class="item brand-list" data-id="2880988" data-type="brand">
                    <span class="brand-name">SFC上影影城</span>
                    <span class="brand-count">26</span>
                  </div>
              
                  <div class="item brand-list" data-id="0" data-type="brand">
                    <span class="brand-name">其他</span>
                    <span class="brand-count">225</span>
                  </div>


                </div>
              </div>
              <div class="page region">

                <div id="region-tab">
                  <ul class="tab">
                    <li class="item chosen" data-type="region" data-subnav="#district">商区</li>
                    <li class="item" data-type="region" data-subnav="#subway">地铁站</li>
                  </ul>
                </div>
                <div id="region-list" style="height: 402.5px;">
                  <div id="region-sidenav">
                    <div id="district">

                      <div class="district-li item chosen" data-type="district" data-id="-1">全部(362)</div>

                      <div class="district-li item" data-type="district" data-id="5">浦东新区(73)</div>

                      <div class="district-li item" data-type="district" data-id="666">崇明区(3)</div>

                    </div>
                    <div id="subway" style="display: none;">

                      <div class="district-li item" data-type="line" data-id="-1">全部(362)</div>
                      <div class="district-li item" data-type="line" data-id="21">1号线(57)</div>
                      <div class="district-li item" data-type="line" data-id="31">磁悬浮线(2)</div>

                    </div>
                  </div> */}
                  {/* <div id="region-list-item"></div>
                  <div class="clearfix"></div>
                </div>

              </div>
            </div>
          </div> */}
        </div>
      </div>
    )
  }
}

export default MoviePage

// import React from 'react'
// import { connect } from 'dva'
// import { Button } from 'antd-mobile'
// import styles from '../assets/css/IndexPage.less'
// import HeaderCom from '../components/common/headerCom'
// import { routerRedux } from 'dva/router'

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