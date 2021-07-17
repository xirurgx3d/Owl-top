import { LayoutProps } from './layout.props'
import styles from './layout.module.css'
import cn from 'classnames'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'
import Footer from './Footer/Footer'
import { FunctionComponent, useRef } from 'react'
import { AppContextProvider, IAppContext } from '../context/app.context'

const Layout = ({children}:LayoutProps): JSX.Element => {
  const bodyRef = useRef<HTMLDivElement>(null);
  return (
    <div className={styles.wrapper}>
			
			<Header className={styles.header} />
			<Sidebar className={styles.sidebar} />
			<main className={styles.body} ref={bodyRef} tabIndex={0} role='main'>
				{children}
			</main>
			<Footer className={styles.footer} />
			
		</div> 
  )
}

export const WithLayout = <T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <AppContextProvider data={props.data} firsCategory={props.firsCategory}>
      <Layout>
        <Component {...props} />
      </Layout>
      </AppContextProvider>
    )
  }
}