import { FooterProps } from './Footer.props'
import styles from './layout.module.css'
import cn from 'classnames'

export default ({...prop}:FooterProps): JSX.Element => {

  return (
    <>
      <div {...prop}>Footer</div>
    </>  
  )
}