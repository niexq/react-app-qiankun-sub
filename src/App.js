import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import { Divider, Button, Space, Modal } from 'antd';

import 'antd/dist/antd.min.css';
import './App.css';

import LibVersion from './components/LibVersion';
import HelloModal from './components/HelloModal';

import Home from './pages/Home';
// import About from './pages/About';
const About = lazy(() => import('./pages/About'));

const RouteExample = () => {
  return (
    <Router basename={window.__POWERED_BY_QIANKUN__ ? '/react' : '/'}>
      <nav>
        <NavLink exact to="/" className='app-mian-link' activeClassName='app-mian-link-active'>Home</NavLink>
        <Divider type="vertical" />
        <NavLink exact to="/about" className='app-mian-link' activeClassName='app-mian-link-active'>About</NavLink>
      </nav>
      <Suspense fallback={null}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default function App(props) {
  const storeState = props?.store?.getGlobalState?.();
  useEffect(() => {
    // 注册一个观察者函数
    props?.store?.onGlobalStateChange?.((state, prevState) => {
      // state: 变更后的状态; prevState: 变更前的状态
      Modal.confirm({
        title: '主应用数据变化了',
        content: `主应用改变后的数据为：${JSON.stringify(state)}`,
      })
    });
  }, [props?.store])
  const onAppendClick = () => {
    props?.store?.setGlobalState({
      user: {
        name: 'button click'
      }
    });
  }
  return (
    <div className="app-main">
      <span>{`子应用react中显示-主应用的数据：${JSON.stringify(storeState)}`}</span>
      <Button type='primary' onClick={onAppendClick}>更改主应用数据</Button>
      <LibVersion />
      <HelloModal />
      <Divider />
      <RouteExample />
    </div>
  );
}
