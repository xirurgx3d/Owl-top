import { createContext, ReactNode, useState } from "react";
import { MenuItem } from "../@types/menu.i";
import { TopLevelCategory } from "../@types/page.i";

export interface IAppContext {
  menu: MenuItem[];
	firstCategory: TopLevelCategory.Courses;
	setMenu?: (newMenu: MenuItem[]) => void;
}

export const AppContext = createContext<IAppContext>(({ menu: [], firstCategory: TopLevelCategory.Courses }))

export const AppContextProvider = ({ menu, firstCategory, children }: IAppContext & { children: ReactNode }): JSX.Element => {
  console.log(menu);
  const [menuState, setMenuState] = useState<MenuItem[]>(menu);
	const setMenu = (newMenu: MenuItem[]) => {
		setMenuState(newMenu);
	};

	return <AppContext.Provider value={{ menu: menuState, firstCategory, setMenu }}>
		{children}
	</AppContext.Provider>;
}