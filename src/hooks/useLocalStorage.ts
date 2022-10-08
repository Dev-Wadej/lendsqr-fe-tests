import { useState, useEffect } from "react";
interface IUsersData{
        createdAt:string;
        orgName:string
        email:string;
        id:string;
        userName:string;
        phoneNumber:string;
  }
  interface ILocalStorage{
      state: IUsersData[]
      setState:React.Dispatch<React.SetStateAction<IUsersData[]>>
  }


export const useLocalStorage = ( key: string, initialValue:string='user'): ILocalStorage => {
    const [state, setState] = useState<IUsersData[]>(() => {
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