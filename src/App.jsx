import React, { memo, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import { routes } from './router'

const App = memo(() => {
  return (
    <div>
      <div className="header">header</div>
      {/* router路由使用了懒加载, 需要使用Suspense包裹, 加载过程会显示fallback内容 */}
      <Suspense fallback="loading...">
        {/* 根据传入routes生成路由 */}
        <div className="content">{useRoutes(routes)}</div>
      </Suspense>
      <div className="footer">footer</div>
    </div>
  )
})

export default App
