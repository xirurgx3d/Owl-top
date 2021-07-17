import React, { useContext } from "react";
import { AppContext } from "../../context/app.context";
import styles from './Menu.module.css';
import cn from 'classnames';
import { PageItem } from "../../@types/menu.i";
import Link from 'next/link';

export const Menu = (): JSX.Element => {
  const {data,firsCategory,setMenu} = useContext(AppContext)
  console.log(data);

  const buildFirstLevel = () => {
		return (
			<ul className={styles.firstLevelList}>
				{data.map(m => (
					<li key={m._id.secondCategory}>
						
							<a>
								<div className={cn(styles.firstLevel)}>
									
									<span>{m._id.secondCategory}</span>
								</div>
							</a>
            {buildSecondLevel(m.pages)}
					</li>
				))}
			</ul>
		);
  }
  const buildSecondLevel = (menuItem: PageItem[]) => {
		return (
			<ul className={styles.secondBlock}>
				{menuItem.map(m => {
					
					return (
						<li key={m._id}>
							<Link href={`/${m.alias}`}>{m.title}</Link>
						</li>
					);
				})}
			</ul>
		);
	};

  return (
    <nav className={styles.menu} role='navigation'>
		
			{buildFirstLevel()}
		</nav> 
  )
}