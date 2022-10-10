import { IUsersData } from "../types/types";


export const useUsersPagination=(users:IUsersData[], page = 1, userPerPage = 9)=>{
    if(!users)return;
    let totalPages = Math.ceil(users.length / userPerPage);
    const start = (page - 1) * userPerPage;
    const end = page * userPerPage;
    const amtPerPage=users.slice(start,end);
    return {amtPerPage,totalPages}
}