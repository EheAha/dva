import React from 'react';
import { Router, Route } from 'dva/router';
// import Loadable from 'react-loadable'; //用于骨架屏
import dynamic from 'dva/dynamic'; // 异步加载路由

// const AsyncIndex = Loadable({
//   timeout: 3000,
//   loading() {
//     return <div>loading....</div>
//   },
//   loader: () => import('./routes/homePage')
// })

function RouterConfig({ history, app }) {
  const sharedCote = dynamic({
    app,
    component: () => import('routes/sharedCote')
  })
  // 首页
  const homePage = dynamic({
    app,
    component: () => import('routes/homePage')
  })
  // 影院
  const moviePage = dynamic({
    app,
    component: () => import('routes/moviePage')
  })
  // 我的
  const personPage = dynamic({
    app,
    component: () => import('routes/personPage')
  })
  //搜索
  const Search = dynamic({
    app,
    component: () => import('routes/search')
  })
  //登陆
  const loginIn = dynamic({
    app,
    component: () => import('routes/loginIn')
  })
  //注册
  const registe = dynamic({
    app,
    component: () => import('routes/registe')
  })
  //城市选择
  const City = dynamic({
    app,
    component: () => import('routes/city')
  })
  //详情
  const detail = dynamic({
    app,
    component: () => import('routes/details')
  })
  //购票
  const ChooseSeat = dynamic({
    app,
    component: () => import('routes/ChooseSeat')
  })
  //出票
  const Ticketing = dynamic({
    app,
    component: () => import('routes/ticketing')
  })
  //订单
  const order = dynamic({
    app,
    component: () => import('routes/order')
  })

  return (
    <Router history={history}>
      <div>
        <Route component={sharedCote} />
        <Route path="/" exact component={homePage}/>
        <Route path="/homePage" component={homePage}/>
        <Route path="/movie" exact component={moviePage} />
        <Route path="/person" exact component={personPage} />
        <Route path='/search' exact component={Search}/>
        <Route path='/loginIn' exact component={loginIn}/>
        <Route path='/registe' exact component={registe}/>
        <Route path='/selectCity' exact component={City}></Route>
        <Route path='/detail' exact component={detail}/>
        <Route path='/chooseSeat' exact component={ChooseSeat}/>
        <Route path='/ticketing' exact component={Ticketing}/>
        <Route path='/order' exact component={order}/>
      </div>
    </Router>
  );
}

export default RouterConfig;
