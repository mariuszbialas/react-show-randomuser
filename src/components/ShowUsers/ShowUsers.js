import React, {useEffect, useState} from 'react'
import ShowOneUser from "./ShowOneUser";

import './ShowUsers.css'

const ShowUsers = props => {
    const [users, setUsers] = useState([])
    const [error, setError] = useState(null)

    useEffect( () => {
        const fetchData = async () => {
            try {
                setError(null)
                const response = await fetch('https://randomuser.me/api/?results=100')
                const data = await response.json()
                setUsers(data.results)
            } catch (e) {
                console.error(e)
                setError('Laden Fehler!')
            }
        }
        fetchData()
    },[])

    return(
        <div className="container">
            <h1 className="mt-3">USERS</h1>
            <ul>
                { users.map(user => <ShowOneUser key={user.login.uuid} user={user} />) }
            </ul>
        </div>
    )
}

export default ShowUsers;