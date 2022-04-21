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
        // setLoading(true)
    }

    useEffect( () => {
        populateUsers();
    }, [])

  return (
    <div className='card'>
        <h2>{user.email}</h2>
        <h2>{user.first_name}</h2> 
        <h2>{user.last_name}</h2>
        <img src={user.avatar} alt=""></img>
    </div>
  )
}

export default Card