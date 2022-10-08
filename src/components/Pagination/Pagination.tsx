import {Pagination,Stack} from '@mui/material';
import './pagination.scss'
import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react';
import { useSidebar } from '../../context/ContextProvider';




export default function PaginationRounded({totalPage}:{totalPage:number|undefined}) {

  const {setPageNo,pageNo} = useSidebar()


    const matches = useMediaQuery('(max-width:500px)');
    const handlPaginationChange=(event:React.ChangeEvent<unknown | HTMLElement>)=>{
     const e = (event.target) as HTMLButtonElement
     setPageNo?.(parseFloat(e.textContent!))
    }


  return (
    <Stack spacing={2} sx={{paddingTop:'2rem',justifyContent:'space-between',flexDirection: matches ? 'column' : 'row' ,alignItems: 'end'}}>
        <div className='pagination'>
            <span>Showing</span>
            <span><select name="Show More" id="pagination">
                <option value="100">100</option>
                <option value="90">90</option>
                </select></span>
            <span>out of 100</span>
        </div>
      <Pagination onChange={handlPaginationChange} page={pageNo} size='small' count={totalPage} shape="rounded" sx={{position:'relative',marginLeft:'0vw',color:' #545F7D',background:'transparent',boxShadow:'none',fontSize:'.5rem'}} />
    </Stack>
  );
}
