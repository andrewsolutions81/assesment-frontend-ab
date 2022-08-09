import React, { useEffect, useState }  from "react";

const Timer = ({setIntro}) => {
  const [seconds, setSeconds] = useState(Math.floor(Math.random()*59));
  const [minutes, setMinutes] = useState(Math.floor(Math.random()* 5));

  useEffect( () => {
    const interval = setInterval(() => {
      setSeconds(seconds-1);
      if (seconds === 0){
        setSeconds(59);
        setMinutes(minutes -1)
      }
      if (seconds === 0 && minutes === 0) {
        setSeconds(0);
        setMinutes(0);
        setIntro(false);
      }
    },1000);
    return () => clearInterval (interval);
  },[seconds, minutes])

  const timeLeft = `${minutes}:${seconds}`

  return(
      <div className="timmer">Timmer
        <div className="timmer-numbers">Time left : {timeLeft}</div>
      </div>
  )
}

export default Timer
