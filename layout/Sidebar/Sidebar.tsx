import { LayoutProps } from './Sidebar.props'
import styles from './layout.module.css'
import cn from 'classnames'

export default ({...prop}:LayoutProps): JSX.Element => {

  return (
    <>
      <div {...prop}>Sidebar</div>
    </>  
  )
}