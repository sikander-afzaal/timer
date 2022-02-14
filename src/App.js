import "./App.css";
import React, { useRef, useState, useEffect } from "react";
import girl from "./Assets/girl.png";
function App() {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");
  let interval = useRef();
  const startTimer = () => {
    const countdownDate = new Date("Feb 15, 2022 20:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        // stop our timer
        clearInterval(interval.current);
      } else {
        // update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });
  return (
    <div className="App">
      <div className="top-app">
        <h2>ARCANE TOKEN</h2>
        <h1>WEBSITE LAUNCH</h1>
      </div>

      <div className="white-box">
        <img src={girl} alt="" />
        <h1>15 FEBURARY</h1>
        <h1>15 UTC</h1>
        <div className="timer-div">
          <div className="time-box">
            <h2>{timerHours}</h2>
          </div>
          <p>:</p>
          <div className="time-box">
            <h2>{timerMinutes}</h2>
          </div>
          <p>:</p>
          <div className="time-box">
            <h2>{timerSeconds}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
