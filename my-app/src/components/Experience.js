import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Experience.css';

export const Experience = () => {
  const [records, setRecords] = useState([])

  useEffect(()=> {
    axios.get('https://jsonplaceholder.typicode.com/albums/1/photos')
     .then(res => {setRecords(res.data)})
     .catch(err => console.log(err))
  },[])

  return (
    <div className='div2'>
      <ul className='ul1'>
        
        {records.map((r,i)=>(
          <li key={i}>
            <td>{r.id}</td>
            <td>.{r.title}</td>
          </li>
        ))}
         
      </ul>
    </div>
  )
}
