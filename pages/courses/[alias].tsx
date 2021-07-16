import axios from 'axios'
import { GetStaticPaths, GetStaticPathsContext, GetStaticProps, GetStaticPropsContext } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { MenuItem } from '../../@types/menu.i'
import { WithLayout } from '../../layout/layout'

import styles from '../styles/Home.module.css'

function Courses({ firsCategory, data }: CoursesProps): JSX.Element {
  return (
    <>
      <h1>hello</h1>
    </>  
  )
}
export default WithLayout(Courses)

export const getStaticPaths: GetStaticPaths = async () => {
  let path:string[] = []
  try {
    const { data } = await axios.get(process.env.DOMAIN + '/menu')
    path = data.flatMap((v: MenuItem) => v.pages.map(r => '/courses/' + r.alias))
  } catch (error) {
    new Error()
  }

  
  return {
    paths: path,
    fallback: true,
  }
}

export const getStaticProps:GetStaticProps = async ({params}:GetStaticPropsContext) => {
  const firsCategory = 0
  let data = null
  console.log(params);
  try {
    const res = await axios.get<MenuItem>(process.env.DOMAIN + '/alias')
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
interface CoursesProps extends Record<string, unknown> {
	data: MenuItem[];
	firstCategory: number;
} 