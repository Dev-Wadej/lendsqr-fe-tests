import {useState,useContext,createContext} from 'react';



interface IstateContext{
    sidebar?:boolean;
    setSidebar?:React.Dispatch<React.SetStateAction<boolean>>;
    screenSize?: number|null;
    setScreenSize?:React.Dispatch<React.SetStateAction<number|null>>;
    pageNo?: number;
    setPageNo?:React.Dispatch<React.SetStateAction<number>>;
}
interface IstateContext2{
    children?: React.ReactNode
}

const initialState={
    sidebar: false,
    setSidebar: ()=>{},
    screenSize:null ,
    setScreenSize: ()=>{},
    pageNo:1,
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


export const useSidebar=()=>{
    return useContext(StateContext)
}
