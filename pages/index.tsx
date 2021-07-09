import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/Buttons/Button'
import Htags from '../components/Htags/Htags'
import styles from '../styles/Home.module.css'

export default function Home():JSX.Element {
  return (
    <Htags tag="h1">Text
      <Button aps='primary'>butt</Button>
    </Htags>
  )
}
