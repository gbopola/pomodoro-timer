import './App.css';
import logo from './components/assets/logo.svg';
import SettingsIcon from './components/Settings/SettingsIcon';
import TabWrapper from './components/TabWrapper';
import TimerWrapper from './components/TimerWrapper';
import SettingsModal from './components/Settings/SettingsModal';
import { useSelector } from 'react-redux';
function App() {
  const { modal } = useSelector((state) => state.pomodoro);
  return (
    <div className="App">
      <img alt="pomdoro-logo" src={logo} className="logo" />
      <TabWrapper />
      <div className="outer__wrapper">
        <TimerWrapper />
      </div>
      <SettingsIcon />
      {modal && <div className="overlay"></div>}
      <div className="modal__wrapper">{modal && <SettingsModal />}</div>
    </div>
  );
}

export default App;
