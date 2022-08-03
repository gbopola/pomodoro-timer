import React from 'react';
import { useDispatch } from 'react-redux';
import { changeModalView } from '../../features/pomodoroSlice';
import settings from '../assets/icon-settings.svg';
function SettingsIcon() {
  const dispatch = useDispatch();
  return (
    <img
      className="settings"
      src={settings}
      alt="Settings icon"
      // open modal
      onClick={() => dispatch(changeModalView())}
    />
  );
}

export default SettingsIcon;
