import React from 'react'
import data from '../data.json';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home'>
       {
        data.map((user)=>{
            return(
                <Link to={`/users/${user.id}`} key={user.id} className='user'><h4>{user.firstName   } {user.lastName}</h4></Link>
            )
        })
      }
     
    </div>
  )
}

export default Home
