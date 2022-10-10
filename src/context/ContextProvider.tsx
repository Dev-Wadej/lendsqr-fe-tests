import {useState,useContext,createContext} from 'react';

import { IstateContext2,IstateContext } from '../types/types';

const initialState={
    sidebar: false, //to toggle the sidebar 
    setSidebar: ()=>{},
    screenSize:null , // to know the current size of the user's screen
    setScreenSize: ()=>{},
    pageNo:1,  //current page number on the dashboard
    setPageNo: ()=>{},
}

const StateContext= createContext<IstateContext>(initialState)

export const ContextProvider:React.FC<IstateContext & IstateContext2> = ({children})=>{
    const [sidebar,setSidebar]=useState<boolean>(false)
    const [pageNo,setPageNo]=useState<number>(1)
    const [screenSize,setScreenSize]=useState<number |null>(null)

    const value ={sidebar,setSidebar,screenSize,setScreenSize,pageNo,setPageNo}
return <StateContext.Provider value={value}>{children}</StateContext.Provider>
}


//custom hook for the context provider
export const useSidebar=()=>{
    return useContext(StateContext)
}
