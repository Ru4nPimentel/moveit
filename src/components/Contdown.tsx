import React, { useState, useEffect, useContext } from 'react'
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Contdown.module.css'



const Contdown = () => {

  const {
      minutes,
      seconds,
      hasFinished,
      isActive,
      startContdown,
      resetContdown
      } = useContext(CountdownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('');

  return (
    <React.Fragment>
    <div className={styles.contdownContainer}>
      <div>
        <span>{minuteLeft}</span>
        <span>{minuteRight}</span>
      </div>
      <span>:</span>
      <div>
        <span>{secondsLeft}</span>
        <span>{secondsRight}</span>
      </div>
    </div>
    {hasFinished ? (
      <button disabled type="button" className={styles.contdownButton}>
        Ciclo encerrado
      </button>
    ): (
      <React.Fragment>
        { isActive ? (
        <button type="button" className={`${styles.contdownButton} ${styles.contdownButtonActive}`} onClick={resetContdown}>
          Abandonar ciclo
        </button>
        ) : (
        <button type="button" className={styles.contdownButton} onClick={startContdown}>
          Iniciar um ciclo
        </button>
        )}
      </React.Fragment>
    )}

    </React.Fragment>
  )
}

export default Contdown
