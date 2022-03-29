import React, { useState, useEffect } from 'react';
import * as userService from '../../services/userService'
import styles from './Users.module.css'

const Users = (props) => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    userService.getAllUsers()
    .then(users => setUsers(users))
  }, [])

  return (
    <main className={styles.container}>
      <h1 className={styles.userHeader}>Hey {props.user.name}. Here's a list of all the users.</h1>
      {users.map((user) => (
        <p className={styles.userList} key={user._id}>{user.name}</p>
      ))}
    </main>
  )
}

export default Users