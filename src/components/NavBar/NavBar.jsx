import React, { useState, useEffect } from 'react';
import { MyButton } from '../MyButton/MyButton.jsx'
import { Link } from 'react-router-dom';
import './NavBar.css';
import LoginModal from '../LoginModal/LoginModal.jsx';
import SignUpModal from '../SignUpModal/SignUpModal.jsx';

function Navbar({ user, handleLogout, handleSignupOrLogin }) {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
        setButton(false);
        } else {
        setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
        <nav className='navbar'>
            <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                <i class="fas fa-code"></i>
                TITLE
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            {user ? (
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-user'>Welcome, {user.name}</li>
                <li className='nav-item'>
                    <Link to='/users' className='nav-links' onClick={closeMobileMenu}>
                        Users
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link
                        to='/'
                        className='nav-links'
                        onClick={closeMobileMenu}
                    >
                        Link
                    </Link>
                </li>

                <li>
					<div className='nav-links-mobile'>
						<MyButton buttonStyle='btn--outline' onClick={() => { handleLogout(); closeMobileMenu();}} to="/">LOG OUT</MyButton>
					</div>
                </li>
            </ul>
            ):(
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
				<li className='nav-item'>
						<LoginModal handleSignupOrLogin={handleSignupOrLogin} closeMobileMenu={closeMobileMenu} />
				</li>
                <li className='nav-item'>
                    <Link
                        to='/users'
                        className='nav-links'
                        onClick={closeMobileMenu}
                    >
                        Users
                    </Link>
                </li>
                <li>
					<div className='nav-links-mobile'>
					<SignUpModal buttonStyle='btn--outline' handleSignupOrLogin={handleSignupOrLogin} closeMobileMenu={closeMobileMenu} />
					</div>
                </li>
            </ul>
            )}
            {button && 
                <div className='logSignButton'>
                    {user ? <MyButton buttonStyle='btn--outline' onClick={handleLogout} to="/">LOG OUT</MyButton> : <SignUpModal buttonStyle='btn--outline' handleSignupOrLogin={handleSignupOrLogin} closeMobileMenu={closeMobileMenu} />}
                </div>
            }
            </div>
        </nav>
        </>
    );
}

export default Navbar;