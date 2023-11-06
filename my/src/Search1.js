import React, { useState } from 'react'
import data from './Data';

const Search1 = () => {
    const namesFromDatabase = [
        {id: 1, username: 'Vusal Mammadov'},
        {id: 2, username: 'Tural Isaqov'},
        {id: 3, username: 'Memmed Memmedov'},
        {id: 4, username: 'Melahet Mehdiyev'},
        {id: 5, username: 'Israfil Bendaliyev'},
        {id: 6, username: 'Eldar Abdullayev'},
        {id: 7, username: 'Sahmar Mehdiyev'},
        {id: 8, username: 'Resad Qenberov'},

    ]

    const [names, setNames] = useState(namesFromDatabase);
    const filterNames = e => {
        const search = e.target.value.toLowerCase()
        const filteredNames = namesFromDatabase.filter(names => names.username.toLowerCase().includes(search))
        setNames(filteredNames)
    }


  return (
    <div className='App'>
        <header className='App-header'>
            <h2>Username</h2>
            <input type='text' onChange={(e)=> filterNames(e)}/>
            {names.map(name =>{
             return <ul key={name.id}>{name.username}</ul>
            })

            }
        </header>
    </div>
  )
}
export default Search1
