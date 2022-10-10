//--------------------Data received from api call--------------------------------//

export interface IUsersData{
    createdAt:string;
    orgName:string
   email:string;
   id:string;
   userName:string;
   phoneNumber:string;
  }

  export interface IEachUser{
    accountNumber: string;
    email:string;
    profile: {
        firstName: string;
        lastName: string;
        phoneNumber: string;
        avatar:string;
    gender: string;
    bvn: string;
    }
    guarantor: {
        firstName: string,
        lastName: string,
        phoneNumber: string;
        
      },
      education: {
        level: string;
        employmentStatus: string;
        sector: string;
        duration: string;
        officeEmail: string;
        monthlyIncome: string[];
        loanRepayment: string;

      },
      socials: {
        facebook: string;
        instagram: string;
        twitter: string;
      },

}

export interface IstateContext{
    sidebar?:boolean;
    setSidebar?:React.Dispatch<React.SetStateAction<boolean>>;
    screenSize?: number|null;
    setScreenSize?:React.Dispatch<React.SetStateAction<number|null>>;
    pageNo?: number;
    setPageNo?:React.Dispatch<React.SetStateAction<number>>;
}
export interface IstateContext2{
    children?: React.ReactNode
}

