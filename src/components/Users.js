import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Card from './Card';

const Users = () => {
    const [users, setUsers] = useState([]);
    // const [loading, setLoading] = useState(true);

    const populateUsers = async () => {
        const res = await axios.get(`https://reqres.in/api/users`);
        setUsers(res.data.data);
        // setLoading(true)
    }

    useEffect( () => {
        populateUsers();
    }, [])

    
  return (
    <div className='container'>
        {users.map( (user , index) => (
                    <>
                        {/* <Card key={index} user={user}/> */}
                        <li><Link className='link-container' onClick={<Card/>} to={`/users/${user.id}`}>{user.id} .  {user.first_name} {user.last_name}</Link></li>
                        <hr />
                    </>
        ))}
    </div>

  )
}

export default Users