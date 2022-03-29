import React from 'react'
import LoginModal from '../../components/LoginModal/LoginModal'
import SignUpModal from '../../components/SignUpModal/SignUpModal'
import styles from './LogInSignUpPage.module.css'

const LogInSignUpPage = (props) => {
    return (
        <main className={styles.container}>
            <div className={styles.signUpLogInWrap}>
                <h1 className={styles.logSignHeader}>Please sign up or log in to continue.</h1>
                <div className={styles.logSignModalWrap}>
                    <LoginModal buttonStyle={'btn--outline'} handleSignupOrLogin={props.handleSignupOrLogin} />
                    <SignUpModal buttonStyle={'btn--outline'} handleSignupOrLogin={props.handleSignupOrLogin} />
                </div>
            </div>
        </main>
    )
}

export default LogInSignUpPage
