import React,{Component} from 'react';
import { Button } from 'antd-mobile';

class MoviePage extends Component{
  render(){
    return(
      <div style={{marginTop:'200px'}}>
        <Button>Click me!</Button>
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