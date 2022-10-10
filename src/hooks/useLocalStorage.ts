import { useState, useEffect } from "react";
import { IEachUser } from "../types/types";


  interface ILocalStorage{
      state: IEachUser
      setState:React.Dispatch<React.SetStateAction<IEachUser>>
  }


export const useLocalStorage = ( key:string, initialValue:string='user'): ILocalStorage => {
    const [state, setState] = useState<IEachUser>(() => {
      if (!initialValue) return;
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : initialValue;
     
    });
  
    useEffect(() => {
      if (state) {
        try {
          localStorage.setItem(key, JSON.stringify(state));
        } catch (err) {
          console.log(err);
        }
      }
    }, [state, key]);
  
    return {state,setState};
  };