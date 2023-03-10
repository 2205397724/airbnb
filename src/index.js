import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components';

import App from './App';
// 样式重置
import 'normalize.css'
import "./assets/css/index.less"
import store from './store';
import theme from './assets/theme';


// @ => src:webpack
// 问题：react脚手架隐藏webpack
// 解决：1.npm run eject
// 2.craco => create-react-app config
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    {/* <Suspense fallback="loading"> */}
    <ThemeProvider theme={theme}>
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
    {/* </Suspense> */}
  </Provider>
  // </React.StrictMode>
);