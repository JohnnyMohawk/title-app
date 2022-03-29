import React, { useState } from 'react'
import { Route, Redirect, useHistory } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import Landing from '../Landing/Landing'
import Users from '../Users/Users'
import * as authService from '../../services/authService'
import LogInSignUpPage from '../LogInSignUpPage/LogInSignUpPage'

const App = () => {
	const history = useHistory()
	const [user, setUser] = useState(authService.getUser())

	const handleLogout = () => {
		authService.logout()
		setUser(null)
		history.push('/')
	}

	const handleSignupOrLogin = () => {
		setUser(authService.getUser())
	}

	return (
		<>
			<NavBar user={user} handleLogout={handleLogout} handleSignupOrLogin={handleSignupOrLogin} />
			<Route exact path='/'>
				<Landing user={user} />
			</Route>
			<Route exact path='/login-signup'>
				{user ? 
					<Redirect to='/' /> : 
					<LogInSignUpPage handleSignupOrLogin={handleSignupOrLogin}/>
				}
			</Route>
			<Route exact path='/users'>
				{user ? <Users user={user} /> : <Redirect to='/login-signup' />}
			</Route>
		</>
	)
}

export default App
