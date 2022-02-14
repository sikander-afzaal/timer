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
    let end = new Date("2/15/2022 3:00 PM");
    interval = setInterval(() => {
      let _second = 1000;
      let _minute = _second * 60;
      let _hour = _minute * 60;
      let _day = _hour * 24;
      let now = new Date();
      let nowUTC = new Date(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        now.getUTCHours(),
        now.getUTCMinutes(),
        now.getUTCSeconds()
      );
      let distance = end - nowUTC;
      var days = Math.floor(distance / _day);
      var hours = Math.floor((distance % _day) / _hour);
      var minutes = Math.floor((distance % _hour) / _minute);
      var seconds = Math.floor((distance % _minute) / _second);
      if (distance < 0) {
        clearInterval(interval.current);
        return;
      } else {
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
