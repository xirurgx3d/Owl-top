import React, { useContext } from "react";
import { AppContext } from "../../context/app.context";
import styles from './Menu.module.css';
import cn from 'classnames';
import { PageItem } from "../../@types/menu.i";
import Link from 'next/link';
import { useRouter } from "next/dist/client/router";
import { route } from "next/dist/next-server/server/router";

export const Menu = (): JSX.Element => {
  const { data, firsCategory, setMenu } = useContext(AppContext)
	const router = useRouter()
	

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
				{menuItem && menuItem.map(m => {
					
					return (
						<li className={cn(styles.firstLevel, {
              [styles.firstLevelActive]: m.alias == router.asPath.split('/')[2]
            })} key={m._id}>
              <Link href={`/courses/${m.alias}`}>{m.title}</Link>
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