import { HeaderProps } from './Header.props'
import styles from './layout.module.css'
import cn from 'classnames'

export default ({...prop}:HeaderProps): JSX.Element => {

  return (
    <>
      <div {...prop}>Sidebar</div>
    </>  
  )
}