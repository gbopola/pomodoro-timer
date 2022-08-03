import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { changeAllValues, changeModalView } from '../../features/pomodoroSlice';
import { useDispatch, useSelector } from 'react-redux';
function SettingsModal() {
  const dispatch = useDispatch();
  const { font, pomodoro, shortBreak, longBreak, color } = useSelector(
    (state) => state.pomodoro
  );

  const [time, setTime] = useState({
    pomodoro: pomodoro / 60,
    shortBreak: shortBreak / 60,
    longBreak: longBreak / 60,
    color,
    font,
  });

  const [hover, setHover] = useState(false);

  const settingsStyle = {
    backgroundColor: '#fff',
    padding: '2rem 0 0 0',
    fontFamily: font,
    width: '540px',
    fontWeight: 'bold',
    margin: '0 auto',
    borderRadius: '25px',
    maxWidth: '80%',
  };

  const input = {
    background: '#eff1fa',
    border: 'none',
    height: '48px',
    borderRadius: '10px',
    padding: '0 1rem',
    outline: 'none',
    width: '100%',
    fontFamily: font,
    fontSize: '14px',
    fontWeight: 'bold',
  };

  const btnStyles = {
    height: '53px',
    fontSize: '16px',
    background: hover ? '#f98c8c' : 'var(--bright-red)',
    color: '#fff',
    display: 'block',
    margin: '0 auto',
    padding: '0 3rem',
    position: 'relative',
    fontFamily: font,
    top: '2rem',
  };

  // change font in local state
  const handleClick = (index) => {
    index === 1
      ? setTime({ ...time, font: 'Kumbh Sans, sans-serif' })
      : index === 2
      ? setTime({ ...time, font: 'Roboto Slab, sans-serif' })
      : setTime({ ...time, font: 'Space Mono, sans-serif' });
  };

  // change color in local state
  const handleColor = (index) => {
    index === 1
      ? setTime({ ...time, color: 'var(--bright-red)' })
      : index === 2
      ? setTime({ ...time, color: 'var(--bright-blue)' })
      : setTime({ ...time, color: 'var(--bright-purple)' });
  };

  // change values in global state
  const handleSubmit = () => {
    dispatch(changeAllValues(time));
  };
  return (
    <div style={settingsStyle}>
      <div className="settings__modal__header">
        <div className="settings__modal__container">
          <h1>Settings</h1>
          <svg
            // close modal
            onClick={() => dispatch(changeModalView())}
            className="settings__icon__close"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
          >
            <path
              fill="#1E213F"
              fillRule="evenodd"
              d="M11.95.636l1.414 1.414L8.414 7l4.95 4.95-1.414 1.414L7 8.414l-4.95 4.95L.636 11.95 5.586 7 .636 2.05 2.05.636 7 5.586l4.95-4.95z"
            />
          </svg>
        </div>
      </div>
      <div className="settings__body">
        <div className="settings__time">
          <p className="settings__title">TIME (MINUTES)</p>
          <div className="settings__label__group">
            <div className="input-wrapper">
              <label>Pomdoro</label>
              <input
                style={input}
                type="number"
                name="pomodoro"
                value={time.pomodoro}
              />
              <div className="settings__label__icons">
                <svg
                  onClick={() =>
                    setTime({ ...time, pomodoro: time.pomodoro + 1 })
                  }
                  className="settings__icon__arrow"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="7"
                >
                  <path
                    fill="none"
                    stroke="#1E213F"
                    strokeWidth="2"
                    d="M1 6l6-4 6 4"
                  />
                </svg>
                <svg
                  onClick={() =>
                    setTime({ ...time, pomodoro: time.pomodoro - 1 })
                  }
                  className="settings__icon__arrow"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="7"
                >
                  <path
                    fill="none"
                    stroke="#1E213F"
                    strokeWidth="2"
                    d="M1 1l6 4 6-4"
                  />
                </svg>
              </div>
            </div>
            <div className="input-wrapper">
              <label>short break</label>
              <input
                style={input}
                type="number"
                name="shortBreak"
                value={time.shortBreak}
              />
              <div className="settings__label__icons">
                <svg
                  onClick={() =>
                    setTime({ ...time, shortBreak: time.shortBreak + 1 })
                  }
                  className="settings__icon__arrow"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="7"
                >
                  <path
                    fill="none"
                    stroke="#1E213F"
                    strokeWidth="2"
                    d="M1 6l6-4 6 4"
                  />
                </svg>
                <svg
                  onClick={() =>
                    setTime({ ...time, shortBreak: time.shortBreak - 1 })
                  }
                  className="settings__icon__arrow"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="7"
                >
                  <path
                    fill="none"
                    stroke="#1E213F"
                    strokeWidth="2"
                    d="M1 1l6 4 6-4"
                  />
                </svg>
              </div>
            </div>
            <div className="input-wrapper">
              <label>long break</label>
              <input
                type="number"
                style={input}
                name="longBreak"
                value={time.longBreak}
              />
              <div className="settings__label__icons">
                <svg
                  onClick={() =>
                    setTime({ ...time, longBreak: time.longBreak + 1 })
                  }
                  className="settings__icon__arrow"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="7"
                >
                  <path
                    fill="none"
                    stroke="#1E213F"
                    strokeWidth="2"
                    d="M1 6l6-4 6 4"
                  />
                </svg>
                <svg
                  onClick={() =>
                    setTime({ ...time, longBreak: time.longBreak - 1 })
                  }
                  className="settings__icon__arrow"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="7"
                >
                  <path
                    fill="none"
                    stroke="#1E213F"
                    strokeWidth="2"
                    d="M1 1l6 4 6-4"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="settings__font">
          <p className="settings__title">FONT</p>
          <div className="settings__font__options">
            <div className="settings__font__circle__outer">
              <div
                onClick={() => handleClick(1)}
                className={`settings__font__circle kumbh-sans ${
                  time.font === 'Kumbh Sans, sans-serif' && 'font__active'
                }`}
              >
                <p>Aa</p>
              </div>
            </div>
            <div className="settings__font__circle__outer">
              <div
                onClick={() => handleClick(2)}
                className={`settings__font__circle roboto ${
                  time.font === 'Roboto Slab, sans-serif' && 'font__active'
                }`}
              >
                <p>Aa</p>
              </div>
            </div>
            <div className="settings__font__circle__outer">
              <div
                onClick={() => handleClick(3)}
                className={`settings__font__circle space-mono ${
                  time.font === 'Space Mono, sans-serif' && 'font__active'
                }`}
              >
                <p>Aa</p>
              </div>
            </div>
          </div>
        </div>
        <div className="settings__font no-border">
          <p className="settings__title">COLOR</p>
          <div className="settings__font__options">
            <div className="settings__font__circle__outer">
              <div
                onClick={() => handleColor(1)}
                className="settings__font__circle circle__red"
              >
                {time.color === 'var(--bright-red)' && (
                  <FontAwesomeIcon icon={faCheck} />
                )}
              </div>
            </div>
            <div className="settings__font__circle__outer">
              <div
                onClick={() => handleColor(2)}
                className="settings__font__circle circle__blue"
              >
                {time.color === 'var(--bright-blue)' && (
                  <FontAwesomeIcon icon={faCheck} />
                )}
              </div>
            </div>
            <div className="settings__font__circle__outer">
              <div
                onClick={() => handleColor(3)}
                className="settings__font__circle circle__purple"
              >
                {time.color === 'var(--bright-purple)' && (
                  <FontAwesomeIcon icon={faCheck} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        style={btnStyles}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={handleSubmit}
      >
        Apply
      </button>
    </div>
  );
}

export default SettingsModal;
