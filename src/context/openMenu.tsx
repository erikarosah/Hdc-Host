import { createContext, useState } from 'react';

type MenuContextType = {
    openMenu: boolean,
    setOpenMenu: (newState: boolean) => void
}

type MenuContextProviderType = {
    children: React.ReactNode
}

const initialValue = {
    openMenu: false,
    setOpenMenu: () => {}
}

export const MenuContext = createContext<MenuContextType>(initialValue);

export const MenuContextProvider = ({children}:MenuContextProviderType) => {
   const [openMenu, setOpenMenu] = useState(initialValue.openMenu);
   
   return (
    <MenuContext.Provider value={{openMenu, setOpenMenu}}>
        {children}
    </MenuContext.Provider>
   )
}