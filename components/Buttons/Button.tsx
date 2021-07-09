import { ButtonProps } from './Button.props'
import styles from './Button.module.css'
import cn from 'classnames'

export default ({ aps, children }:ButtonProps): JSX.Element => {

  return (
    <button className={
      cn(styles.button, {
        [styles.primary]: aps == 'primary',
        [styles.ghost]: aps == 'ghost'
      })
    }>
      {children}
    </button>
  )
}