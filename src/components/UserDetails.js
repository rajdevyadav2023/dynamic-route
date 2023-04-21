import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import data from '../data.json';



const UserDetails = () => {
  const navigate = useNavigate();
  const { userId } = useParams();

let currentUser = {};
data.forEach((user)=>{
  if(user.id == userId){
currentUser = user;
  }
})
  return (
    <div>
      <div className="user-details">
        <h1> {currentUser.firstName} {currentUser.lastName}</h1>
        <h3>Age : {currentUser.age}</h3>
        <h3>DOB : {currentUser.dob}</h3>
        <h3>Phone : {currentUser.contactNumber} </h3>
      </div>
     

      <button onClick={() => navigate(-1)} className='bk-btn'>Go Back</button>
    </div>
  )
}

export default UserDetails
