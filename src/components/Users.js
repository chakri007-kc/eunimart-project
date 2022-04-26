import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Card from './Card';

const Users = () => {
    const [users, setUsers] = useState([]);

    const populateUsers = async () => {
        const res = await axios.get(`https://reqres.in/api/users`);
        setUsers(res.data.data);
    }

    useEffect( () => {
        populateUsers();
    }, [])

    
  return (
    <div className='container'>
        {users.map( (user , index) => (
                    <>
                        <div className='li-container'>
                                <img className='img' src={user.avatar} alt=""></img>
                                <h2>{user.id} .  {user.first_name} {user.last_name}</h2>
                                <h3>{user.email}</h3>
                            <Link className='link-container' onClick={<Card/>} to={`/users/${user.id}`}> click here
                            </Link>
                        </div>
                    </>
        ))}
    </div>

  )
}

export default Users