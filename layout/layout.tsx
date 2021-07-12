import { LayoutProps } from './layout.props'
import styles from './layout.module.css'
import cn from 'classnames'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'
import Footer from './Footer/Footer'
import { FunctionComponent } from 'react'

const Layout = ({children}:LayoutProps): JSX.Element => {

  return (
    <>
      <Header />
      <div>
        <Sidebar />
        {children}
      </div>
      <Footer />
    </>  
  )
}

export const WithLayout = <T extends Record<string,unknown>>(Component:FunctionComponent<T>) => {
  return function withLayoutComponent(props:T):JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    )
  }
}