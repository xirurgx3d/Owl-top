import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/Buttons/Button'
import Htags from '../components/Htags/Htags'
import Rating from '../components/Rating/Rating'
import { WithLayout } from '../layout/layout'
import styles from '../styles/Home.module.css'

function Home():JSX.Element {
  return (
    <Htags tag="h1">Text
        <Button aps='primary'>butt</Button>
        <Rating rating={2} />
      </Htags>
    
  )
}
export default WithLayout(Home)