import React from "react";
let timeLeft = '00:00:xx'
// Set the date we're counting down to
const countDownStart = new Date("Jan 5, 2024 15:37:25").getTime();

const x = setInterval(function() {

let timeLeft = (`${hours}:${minutes}:${seconds}`)

  const min = 1;
  const max = 5;
  const intNumber = Math.floor(Math.random() * (max - min)) + min;

  // Get today's date and time
  const now = () => { minutes = intNumber} //new Date().getTime();

  // Find the distance between now and the count down date
  const distance = countDownStart - now;

  // Time calculations for days, hours, minutes and seconds
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
   timeLeft = hours + ":" + minutes + ":" + seconds;

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    timeLeft = "Not abailable";
  }
}, 1000);

const Timer = () => {
  return(
      <div className="timmer">Timmer
        <div className="timmer-numbers">{timeLeft}</div>
      </div>
  )
}

export default Timer
