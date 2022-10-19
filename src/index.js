// 第三方导入
import React from 'react'
import ReactDOM from 'react-dom/client'
import 'normalize.css'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

// 自己东西导入
import App from '@/App'
import '@/assets/css/index.less'
import { store } from './store'
import theme from './assets/theme'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <HashRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </HashRouter>
  </Provider>
  // </React.StrictMode>
)
