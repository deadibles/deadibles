import  LogoSqColor  from './Images/LogoSqColor.png';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <img src={LogoSqColor} className="App-logo" alt="logo" />

      </div>
    </Router>
  );
}

export default App;
