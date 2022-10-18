// 第三方导入
import React from 'react'
import ReactDOM from 'react-dom/client'
import 'normalize.css'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

// 自己东西导入
import App from '@/App'
import '@/assets/css/index.less'
import { store } from './store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
  // </React.StrictMode>
)
