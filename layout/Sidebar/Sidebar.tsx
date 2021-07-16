import { LayoutProps } from './Sidebar.props'
import { Menu } from '../Menu/Menu'

export default ({className,...props}:LayoutProps): JSX.Element => {
  return (
    <>
      <Menu />
    </>  
  )
}