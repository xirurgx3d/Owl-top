import axios from 'axios'
import { GetStaticPaths, GetStaticPathsContext, GetStaticProps, GetStaticPropsContext } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { MenuItem } from '../../@types/menu.i'
import { WithLayout } from '../../layout/layout'
import { TopPageComponent } from '../../page-components/TopPageComponent/TopPageComponent'

import styles from '../styles/Home.module.css'

function Courses({page, params }: CoursesProps): JSX.Element {
  
  return (
    <TopPageComponent page={page} params={params} />
  )
}
export default WithLayout(Courses)

export const getStaticPaths: GetStaticPaths = async () => {
  let path:string[] = []
  try {
    const { data } = await axios.get(process.env.DOMAIN + '/menu')
    path = data.flatMap((v: MenuItem) => v.pages.map(r => '/courses/' + r.alias))
    return {
      paths: path,
      fallback: true,
    }
  } catch (error) {
    new Error()
  }

  
  return {
    paths: path,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext) => {
  const firsCategory = 0
  try {
    const { data } = await axios.get(process.env.DOMAIN + '/menu')
    const {data:page} = await axios.get<MenuItem>(process.env.DOMAIN + '/alias')

    return {
      props: {
        firsCategory,
        data,
        params,
        page
      }
    }
  } catch (error) {
    return {
			notFound: true
		};
  }
  
}
interface CoursesProps extends Record<string, unknown> {
	data: MenuItem[];
  firsCategory: number
  params:any
} 