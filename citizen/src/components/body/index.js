import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState,useEffect } from 'react';
import {getCitizenList} from '../../services/service'
import MyCard from '../../components/card'
// Example POST method implementation:

const ContainerBody=()=>{
  const [citizenList, setCitizenList] = useState(); 
  useEffect(() => {
    async function fetchMyAPI() {
      const data = await getCitizenList();
      setCitizenList(data);
    }
    fetchMyAPI()
 
   },[]);

  return (
    <div className='ContainerBody'>
      <h1 class="title">
        <span class="title-word title-word-1">Record: </span>
        <span class="title-word title-word-2">{citizenList ? citizenList.length : '0'}</span>
      </h1>
      {
            citizenList && citizenList.map((item) =>
                <div className='citizenListBody'>
                    <MyCard data={item} />
                </div>
            )
      } 


    </div>
  )
}
export default ContainerBody;
