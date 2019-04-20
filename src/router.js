import React from 'react';
import { Router, Route } from 'dva/router';
import Loadable from 'react-loadable'; //用于骨架屏
import dynamic from 'dva/dynamic'; // 异步加载路由

const AsyncIndex = Loadable({
  timeout: 3000,
  loading() {
    return <div>loading....</div>
  },
  loader: () => import('./routes/homePage')
})

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

  return (
    <Router history={history}>
      <div>
        <Route component={sharedCote} />
        <Route path="/" exact component={homePage}/>
        <Route path="/homePage" component={homePage}/>
        <Route path="/movie" exact component={moviePage} />
        <Route path="/person" exact component={personPage} />
      </div>
    </Router>
  );
}

export default RouterConfig;
