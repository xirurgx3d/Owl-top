import { FooterProps } from './Footer.props'
import styles from './Footer.module.css'
import cn from 'classnames'

export default ({className,...props}:FooterProps): JSX.Element => {
  return (
    <>
      <footer className={cn(className as string, styles.footer)}  {...props}>
        <div>
          OwlTop © 2020 -  Все права защищены
        </div>
        <a href="#" target="_blank">Пользовательское соглашение</a>
        <a href="#" target="_blank">Политика конфиденциальности</a>
      </footer>
    </>  
  )
}