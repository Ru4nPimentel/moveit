import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";


interface CountdownContextData{
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isActive: boolean;
  startContdown: () => void;
  resetContdown: () => void;
}

interface CountdownProviderProps{
  children: ReactNode;
}

let countdownTimeout: NodeJS.Timeout; //criar uma tipagem para receber o setTimeout, para limpar ele

export const CountdownContext = createContext({} as CountdownContextData);

export function CountdownProvider({children}: CountdownProviderProps) {

  const {startNewChallenge} = useContext(ChallengesContext)

  const timeInit: number = 0.1 * 60;
  const [time, setTime] = useState(timeInit);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false)

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  function startContdown(){
    setIsActive(true);
  }

  function resetContdown(){
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(timeInit);
    setHasFinished(false)
  }

  useEffect(() => {
    if(isActive && time > 0){
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000)
    } else if(isActive && time === 0){
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();

    }
  }, [isActive, time])

  return(
    <CountdownContext.Provider value={{
      minutes,
      seconds,
      hasFinished,
      isActive,
      startContdown,
      resetContdown
    }}>
      {children}
    </CountdownContext.Provider>
  )
}