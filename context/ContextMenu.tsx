import { createContext, ReactNode, useState } from "react";
import styles from '../styles/MenuLateral.module.css'

type ContextProps = {
    children: ReactNode
}

type ContextType = {
    menu: any
    ShowMenu: () => void
}

const initialValue = {
    menu: styles.menuHide,
    setMenu: () => { },
    ShowMenu: () => { }
}




export const Context = createContext<ContextType>(initialValue)

export const ContextProvider = ({ children }: ContextProps) => {

    const [menu, setMenu] = useState(initialValue.menu)

    function ShowMenu() {
        if (menu === styles.menuHide) {
            setMenu(styles.menuShow)
        } else {
            setMenu(styles.menuHide)
        }
    }

    return (
        <Context.Provider value={
            {ShowMenu, menu}
        }>
            {children}
        </Context.Provider>
    )

}