import React, { memo, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import AppFooter from './components/app-footer'
import AppHeader from './components/app-header'
import useScrollTop from './hooks/useScrollTop'
import routes from './router'

export default memo(() => {
  // const location = useLocation()
  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [location.pathname])
  useScrollTop()
  return (
    <div className='app'>
      <AppHeader />
      <Suspense fallback="loading">
        <div className="page">
          {useRoutes(routes)}
        </div>
      </Suspense>
      <AppFooter />
    </div>
  )
})
