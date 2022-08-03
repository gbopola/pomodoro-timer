import React, { useEffect, useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { useSelector, useDispatch } from 'react-redux';
import { changePlay, reset } from '../features/pomodoroSlice';
function TimerWrapper() {
  const {
    color,
    font,
    currTab,
    pomodoro,
    shortBreak,
    longBreak,
    key,
    isPlaying,
  } = useSelector((state) => state.pomodoro);
  const dispatch = useDispatch();

  const styles = {
    color: '#D7E0FF',
    fontWeight: 'bold',
    fontFamily: font,
  };

  const fontStyles = {
    letterSpacing:
      font === 'Kumbh Sans, sans-serif'
        ? '-5px'
        : font === 'Space Mono, sans-serif'
        ? '-10px'
        : '',
    fontWeight: font === 'Space Mono, sans-serif' ? 400 : '',
    fontSize: '100px',
  };

  // get hours, minutes and seconds
  const children = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    return (
      <div style={styles}>
        <h1 style={fontStyles}>
          {minutes < 10 ? '0' + minutes : minutes}:
          {seconds < 10 ? '0' + seconds : seconds}
        </h1>
        <p
          // change text depending on state
          onClick={(e) => dispatch(changePlay(e.target.innerText))}
          onMouseLeave={(e) =>
            (e.target.style.color = '#D7E0FF')(
              (e.target.style.transition = '.2s ease-in-out')
            )
          }
          onMouseOver={(e) => (e.target.style.color = color)}
        >
          {/* render text depending on whether time is playing */}
          {isPlaying === true
            ? 'PAUSE'
            : isPlaying === false
            ? 'START'
            : 'RESTART'}
        </p>
      </div>
    );
  };
  return (
    <div className="time__wrapper">
      <div className="time__container">
        <CountdownCircleTimer
          isPlaying={isPlaying}
          key={key}
          // change time depending on current tab
          duration={
            currTab === 1 ? pomodoro : currTab === 2 ? shortBreak : longBreak
          }
          size={339}
          colors={color}
          trailColor="#161932"
          onComplete={() => dispatch(reset())}
        >
          {children}
        </CountdownCircleTimer>
      </div>
    </div>
  );
}

export default TimerWrapper;
