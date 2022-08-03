import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeCurrTab } from '../features/pomodoroSlice';
function TabWrapper() {
  const { color, font, currTab } = useSelector((state) => state.pomodoro);
  const dispatch = useDispatch();

  // change active current tab
  const handleChange = (index) => {
    return currTab !== index && dispatch(changeCurrTab(index));
  };

  // apply classes depending on colour in state
  const changeColor = () => {
    return color === 'var(--bright-red)'
      ? 'red'
      : color === 'var(--bright-blue)'
      ? 'blue'
      : 'purple';
  };

    // apply classes depending on font in state
  const changeFont = () => {
    return font === 'Kumbh Sans, sans-serif'
      ? 'kumbh'
      : font === 'Roboto Slab, sans-serif'
      ? 'roboto'
      : 'space';
  };

  return (
    <div className="tabs">
      <button
        className={
          currTab === 1
            ? `tabs__btn__${changeColor()} tabs__btn__${changeFont()}`
            : `tabs__btn tabs__btn__${changeFont()}`
        }
        onClick={() => handleChange(1)}
      >
        pomdoro
      </button>
      <button
        className={
          currTab === 2
            ? `tabs__btn__${changeColor()} tabs__btn__${changeFont()}`
            : `tabs__btn tabs__btn__${changeFont()}`
        }
        onClick={() => handleChange(2)}
      >
        short break
      </button>
      <button
        className={
          currTab === 3
            ? `tabs__btn__${changeColor()} tabs__btn__${changeFont()}`
            : `tabs__btn tabs__btn__${changeFont()}`
        }
        onClick={() => handleChange(3)}
      >
        long break
      </button>
    </div>
  );
}

export default TabWrapper;
