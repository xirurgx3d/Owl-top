import { LayoutProps } from './Sidebar.props'
import styles from './layout.module.css'
import cn from 'classnames'

export default ({className,...props}:LayoutProps): JSX.Element => {

  return (
    <>
      <div className={cn(className as string, styles.sidebar)} {...props}>
			
			
		</div>
    </>  
  )
}