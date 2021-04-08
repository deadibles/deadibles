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
            <img
              src={LogoSqColor}
              height={300}
              className='App-logo'
              alt='logo'
            />
            <h2>Butter</h2>
            <p>Details</p>
          </div>

          <div style={s.card}>
            <img
              src={LogoSqColor}
              height={300}
              className='App-logo'
              alt='logo'
            />
            <h2>Vegetable Oil</h2>
            <p>Details</p>
          </div>

          <div style={s.card}>
            <img
              src={LogoSqColor}
              height={300}
              className='App-logo'
              alt='logo'
            />
            <h2>Olive Oil</h2>
            <p>Details</p>
          </div>

          <div style={s.card}>
            <img
              src={LogoSqColor}
              height={300}
              className='App-logo'
              alt='logo'
            />
            <h2>Coconut Oil</h2>
            <p>Details</p>
          </div>
        </div>
        {/* End of Row 1 */}

        <div style={s.row}>
          <div style={s.card}>
            <img
              src={LogoSqColor}
              height={300}
              className='App-logo'
              alt='logo'
            />
            <h2>Grapeseed Oil</h2>
            <p>Details</p>
          </div>

          <div style={s.card}>
            <img
              src={LogoSqColor}
              height={300}
              className='App-logo'
              alt='logo'
            />
            <h2>Canola Oil</h2>
            <p>Details</p>
          </div>

          <div style={s.card}>
            <img
              src={LogoSqColor}
              height={300}
              className='App-logo'
              alt='logo'
            />
            <h2>Capsules</h2>
            <p>Details</p>
          </div>

          <div style={s.card}>
            <img
              src={LogoSqColor}
              height={300}
              className='App-logo'
              alt='logo'
            />
            <h2>Capsules</h2>
            <p>Details</p>
          </div>
        </div>
        {/* End of Row 2 */}

        <div style={s.row}>
          <div style={s.card}>
            <img
              src={LogoSqColor}
              height={300}
              className='App-logo'
              alt='logo'
            />
            <h2>Gummies</h2>
            <p>Details</p>
          </div>

          <div style={s.card}>
            <img
              src={LogoSqColor}
              height={300}
              className='App-logo'
              alt='logo'
            />
            <h2>Canna-Powder</h2>
            <p>Details</p>
          </div>

          <div style={s.card}>
            <img
              src={LogoSqColor}
              height={300}
              className='App-logo'
              alt='logo'
            />
            <h2>Candies</h2>
            <p>Details</p>
          </div>

          <div style={s.card}>
            <img
              src={LogoSqColor}
              height={300}
              className='App-logo'
              alt='logo'
            />
            <h2>Baked Goods</h2>
            <p>Details</p>
          </div>
        </div>
        {/* End of Row 3 */}

        <div style={s.row}>
          <div style={s.card}>
            <img
              src={LogoSqColor}
              height={300}
              className='App-logo'
              alt='logo'
            />
            <h2>Chocolate(s)</h2>
            <p>Details</p>
          </div>
        </div>
        {/* End of Row 3 */}

        {/* <h1>FAQ</h1>
        <ul>
          <li>
            <p>How do I order?</p>
            <ol>
              <li>
                <p>
                  Find the products you want to order, contact your provider
                  with the order details, and they will contact Deadibles
                  directly to place and receive your order. Then it’s just a
                  matter of meeting your provider!
                </p>
              </li>
              <li>
                <p>
                  After finding the products you want, add them to your ‘cart’
                  until satisfied. When done, hit the ‘place order’ button in
                  your view cart screen, and our database will update with the
                  order information. You will be prompted to reach out to your
                  provider with the order # displayed on the order screen, so
                  that Deadibles can provide the correct order to the right
                  provider.
                </p>
              </li>
            </ol>
            <p>
              Deadibles will first reach out to you via your provider to deliver
              the cost breakdown and total. If the customer agrees, Deadibles
              will carry out the order and deliver through the provider, with
              wait time depending on order size/complexity, and quantity of
              orders placed before it.
            </p>
          </li>
          <li>
            <p>
              Where are the prices?: prices are set by your provider. The
              website is intended as a “menu” of options, but you’ll need to ask
              your provider(s) if they have stock or can acquire the goods on
              your behalf. Because of this series of interactions, prices are
              set by the provider, so they can charge the necessary prices to
              turn a worthwhile profit, without gouging you, the customer.
            </p>
          </li>
          <li>
            <p>
              Can I purchase directly from Deadibles?: Unfortunately no, we only
              sell to providers to minimize sale interaction. Deadibles is
              intended as a bulk product service, so unless you are buying
              multiple oz/orders of something, you’ll likely need to interact
              with your primary provider.
            </p>
          </li>
          <li>
            <p>
              Will any information ever tie back to me?: No. The developers
              behind Deadibles are career web developers, data privacy rights
              enthusiasts and most of all, medicated chefs. We want to be able
              to provide people with a service without the fear of
              repercussions. In designing our webpage, we have taken as many
              precautions as we can to avoid collecting your personal data, in
              case the website/database are ever compromised. For starters, user
              accounts are all pre-generated by an admin, to avoid any personal
              details in login information. We also avoid collecting your
              cookies (login/website history), utilize a password-protected
              landing page, and our database will be cached (scrambled, saved,
              and deleted from the actual database) regularly to avoid one big
              long list of orders. Within the database, customers are only
              referred to as an ID code, and providers are listed under
              code-names, so to an outside source it will be practically
              impossible for someone to mine personal information from our data.
            </p>
          </li>
          <li>
            <p>
              Why pre-made passwords? : To avoid using peoples personal
              information for accounts and in the spirit of going undetected as
              a webpage/service, accounts are pre-generated with randomized
              passwords. Because our website is password-protected, not just
              anyone can access our store page. The website will automatically
              log users out after 30 minutes of inactivity, and we intentionally
              do not save cookies (your password), so that if a customer’s
              device were to be confiscated, the hope would be that law
              enforcement wouldn’t know what their random password goes to (let
              alone if it is a password, given the randomness), and that their
              device would be logged out of our store, in case they happened to
              be browsing around any point in time.
            </p>
          </li>
          <li>
            <p>
              Why do I keep getting logged out?
              </p>
            <ol>
              <li>
                <p>
                didn’t move your screen for too long and our ‘inactive-user
                removal system’ forced you out of the page
                </p>
              </li>
              <li>
                <p>
                  you closed the
              browser/tab and came back. Deadibles does NOT save cookies, so
              your login information is NOT saved. This is an intentional
              security design.
                </p>
              </li>
              </ol>
          </li>
        </ul> */}
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