import styles from './Menu.module.css';
import { createContext, ReactNode, useState } from "react";
import { MenuItem } from "../@types/menu.i";
import { TopLevelCategory } from "../@types/page.i";

export interface IAppContext {
  data: MenuItem[];
	firsCategory: TopLevelCategory.Courses;
	setMenu?: (newMenu: MenuItem[]) => void;
}

export const AppContext = createContext<IAppContext>(({ data: [], firsCategory: TopLevelCategory.Courses }))

export const AppContextProvider = ({ data, firsCategory, children }: IAppContext & { children: ReactNode }): JSX.Element => {

  const [menuState, setMenuState] = useState<MenuItem[]>(data);
	const setMenu = (newMenu: MenuItem[]) => {
		setMenuState(newMenu);
	};

	return <AppContext.Provider value={{ data: menuState, firsCategory, setMenu }}>
		{children}
	</AppContext.Provider>;
}