import { TopPageComponentProps } from "./TopPageComponent.props"
import styles from './TopPageComponent.module.css';
import React from "react";
import Htags from '../../components/Htags/Htags'

export const TopPageComponent = ({ params, page }: TopPageComponentProps): JSX.Element => {
  return(
    <>
      <div className={styles.wrapper}>
			<div className={styles.title}>
        <Htags tag="h1">{page.title}</Htags>
			</div>
			<div role='list'>
				
			</div>
			<div className={styles.hhTitle}>
				
			</div>
			
			
			
		</div>
    </>
  )
}