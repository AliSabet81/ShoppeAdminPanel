
import { Dispatch, ReactElement, SetStateAction, createContext, useState } from "react";

export const store = createContext({
    sideBarOpen:false,
    setSideBarOpen:()=>{}
} as {
    sideBarOpen:boolean,
    setSideBarOpen:Dispatch<SetStateAction<boolean>>
})

export const StoreProvider = ({children}:{children:ReactElement}) =>{
    const [sideBarOpen,setSideBarOpen] = useState(false)
    const storeValues = {
        sideBarOpen : sideBarOpen ,
        setSideBarOpen : setSideBarOpen
    }
    
    return <store.Provider value={storeValues}>{children}</store.Provider>
}