import  LogoSqColor  from './Images/LogoSqColor.png';
import { BrowserRouter as Router } from 'react-router-dom';
import ThisMain from './components/main';

function App() {
  return (
    <Router style={s.bg}>
      <div style={s.head}>
        <img src={LogoSqColor} height={300} className='App-logo' alt='logo' />
      </div>
      <ThisMain />
    </Router>
  );
}

export default App;
const s = {
  head: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#375a2a',
  },
  bg: {
    backgroundColor: '#375a2a',
  },
};