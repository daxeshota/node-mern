import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Users() {
    const [users, setUsers] = useState([])
    const navigate = useNavigate()

    function makeGetRequest(path) {
        axios.get(path).then(
            (response) => {
                var result = response.data;
                setUsers(result);
            },
            (error) => {
                console.log(error);
            }
        );
    }
    useEffect(() => {
        makeGetRequest('http://localhost:5000/api/users');
    }, [])

    const deleteUser = (id) => {
        axios.delete(`http://localhost:5000/api/users/${id}`)
        .then(
            (response) => {
                if(response.status == 200) {
                    makeGetRequest('http://localhost:5000/api/users');
                }
            },
            (error) => {
                console.log(error);
            }
        )

    }

    const editUser = (id) => {
        navigate(`/?id:${id}`)
    }
  return (
    <div>
      <h1>Users</h1>
      {users.map((user) => {
        console.log(user)
        return <>
            <p>{user.email}</p>
            <p>{user.userName}</p>
            <button onClick={() => deleteUser(user._id)}>Delete</button>
            <button onClick={() => editUser(user._id)}>Edit</button>
        </>
      })}
    </div>
  )
}
