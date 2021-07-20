import axios from 'axios'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { MenuItem } from '../@types/menu.i'
import Button from '../components/Buttons/Button'
import Htags from '../components/Htags/Htags'
import Rating from '../components/Rating/Rating'
import { WithLayout } from '../layout/layout'
import Sidebar from '../layout/Sidebar/Sidebar'
import styles from '../styles/Home.module.css'

function Home({ firsCategory, data }: HomeProps): JSX.Element {
  return (
    <>
    <Htags tag="h1">Text
        <Button aps='primary'>butt</Button>
      <Rating rating={2} />
      
      </Htags>
      
    </>  
  )
}
export default WithLayout(Home)

export const getStaticProps:GetStaticProps = async () => {
  const firsCategory = 0
  let data = null
  try {
    const res = await axios.get(process.env.DOMAIN + '/menu')
    
    data = res.data
  } catch (error) {
    new Error()
  }
  return {
    props: {
      firsCategory,
      data
    }
  }
  
}
interface HomeProps extends Record<string, unknown> {
	data: MenuItem[];
	firsCategory: number;
} 