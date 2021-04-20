import React, { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

const Profile = () => {

  const { level } = useContext(ChallengesContext)

  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/53341287?v=4" alt="Ruan de souza"/>  
      <div>
        <strong>Ruan de Souza</strong>
        <p>
          <img src="icons/level.svg" alt="level"/>
          Level {level}
          </p>
      </div>
    </div>
  )
}

export default Profile
