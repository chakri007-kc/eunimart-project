import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

let id=window.location.pathname.split('/')[2];
const Card = () => {
    const [user, setUser] = useState([]);
    const populateUsers = async () => {
        const res = await axios.get(`https://reqres.in/api/users/${id}`);
        setUser(res.data.data);
    }

    useEffect( () => {
        populateUsers();
    }, [])

  return (
    <div className='all-cards'>
      <div className='card'>
          <img className='img' src={user.avatar} alt=""></img>
          <h2 className='email'>Email : {user.email}</h2>
          <h2 className='fn'>First name : {user.first_name}</h2> 
          <h2 className='ln'>Last Name : {user.last_name}</h2>
          {/* <h2 className='ln'>img link : {user.avatar}</h2> */}
      </div>
    </div>
  )
}

export default Card