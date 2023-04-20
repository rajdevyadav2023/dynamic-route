import React from 'react'
import data from '../data.json'
import { Link, Outlet } from 'react-router-dom'
const Users = () => {
    
  return (
    <div>
      {
        data.map((user)=>{
            return(
                <Link to={`/users/${user.id}`} key={user.id}><h4>{user.firstName + user.lastName }</h4></Link>
            )
        })
      }

      <Outlet/>
    </div>
  )
}

export default Users
