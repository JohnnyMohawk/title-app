import styles from './Landing.module.css'

const Landing = (props) => {
  return (
    <main className={styles.container}>
      <h1>
        Hey{props.user ? " " + props.user.name + "! Let's build an APP!" : ", log in or sign up to test this JWT Auth Template"}
      </h1>
    </main>
  )
}

export default Landing