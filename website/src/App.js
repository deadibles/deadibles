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
      <h1>Products Currently Available</h1>
      <body style={s.shop}>
        <div style={s.row}>
          <div style={s.card}>
            <h2>Butter</h2>
            <p>Details</p>
          </div>

          <div style={s.card}>
            <h2>Vegetable Oil</h2>
            <p>Details</p>
          </div>

          <div style={s.card}>
            <h2>Olive Oil</h2>
            <p>Details</p>
          </div>

          <div style={s.card}>
            <h2>Coconut Oil</h2>
            <p>Details</p>
          </div>
        </div>
        {/* End of Row 1 */}

        <div style={s.row}>
          <div style={s.card}>
            <h2>Grapeseed Oil</h2>
            <p>Details</p>
          </div>

          <div style={s.card}>
            <h2>Canola Oil</h2>
            <p>Details</p>
          </div>

          <div style={s.card}>
            <h2>Capsules</h2>
            <p>Details</p>
          </div>

          <div style={s.card}>
            <h2>Capsules</h2>
            <p>Details</p>
          </div>
        </div>
        {/* End of Row 2 */}

        <div style={s.row}>
          <div style={s.card}>
            <h2>Gummies</h2>
            <p>Details</p>
          </div>

          <div style={s.card}>
            <h2>Canna-Powder</h2>
            <p>Details</p>
          </div>

          <div style={s.card}>
            <h2>Candies</h2>
            <p>Details</p>
          </div>

          <div style={s.card}>
            <h2>Baked Goods</h2>
            <p>Details</p>
          </div>
        </div>
        {/* End of Row 3 */}
      </body>
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
  shop: {
    display: 'flex',
    flexFlow: 'column',
    margin: '5px',
    padding: '5px',
    border: '3px dashed black',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-evenly',
    margin: '10px 0px'
  },
  card: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    width: '500px',
    margin: '0px 20px',
    padding: '3px',
    border: '1px solid black',
  },
};