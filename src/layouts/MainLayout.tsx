import { Outlet } from 'react-router-dom'
import Header from './Header.tsx'
import { Fragment } from 'react'
import GlobalErrorBoundary from './ErrorBoundary.tsx'


const MainLayout = () => {

  return (
    <Fragment>
      <Header/>
      <main>
        <GlobalErrorBoundary>
          <Outlet/>
        </GlobalErrorBoundary>
      </main>
    </Fragment>
  )
}

export default MainLayout