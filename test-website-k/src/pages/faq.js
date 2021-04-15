import { NavLink as Link } from 'react-router-dom';
import { Button } from 'reactstrap';
const Faq = () => {
    return (
<section style={s.faqSect}>        
    <h1 style={s.centerText}>FAQ</h1>
        <ul>
          <li>
            <h2>Will I taste the cannabis?</h2>
            <p>
              Our infusion process utilizes kitchen hardware designed for
              cannabis infusion, and our final product is strained through
              multiple layers of filters, leaving only trace amounts of any
              plant material and minimizing the cannabis taste to the point
              where it's only a hint. With enough flavor/seasoning in your food
              you may not taste the cannabis at all, but it's normal for there
              to be some flowery-flavor to present itself when encorporating
              medicine into your infusions.
            </p>
          </li>
          <li>
            <h2>How do I use cannabutter?</h2>
            <p>
              The same way you use butter in your kitchen traditionally works
              just fine for cannabutter. You can spread it on toast, use it to
              grease your cooking tools, or mix it into your ingredients.
              Cannabutter is a very diverse resource that can provide medication
              through a variety of meals!
            </p>
          </li>
          <li>
            <h2>How do I use the oils?</h2>
            <p>
              The cooking oils work just like your standard cooking oils, and
              may be applied to a pan or incorporated into food that calls for
              oil. Because they are already activated, the oil does not require
              heat to provide it's benefits, and can technically be consumed as
              is, if so desired. However, we recommend cooking with it! Much
              tastier!
            </p>
          </li>
          <li>
            <h2>Cannapowder? What's that?</h2>
            <p>
              By combining the already infused oils listed here with specific
              (commercially available) powder, the oil can be dehydrated,
              allowing it to be applied like a dry spice
              (sugar/salt/pepper/etc).
            </p>
            <p>
              While you can consume this as-is like the oils, the chalky texture
              isn't exactly desirable, so either completely blending the
              material to encorporate into your food, or applying heat to melt
              it will allow it to soak into the food, for tastier consumption.
            </p>
          </li>
        </ul>
        {/*
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
       <Link className='button' to='/products'>
        <Button>Back to Products</Button>
            </Link>{' '}
      </section>

        
    );
};

export default Faq;
const s = {
  t: {
    backgroundColor: '#000',
  },
  faqSect: {
    backgroundColor: '#ECF0F1',
    margin: '2rem',
    padding: '1rem',
  },
  centerText: {
    textAlign: 'center',
  }
};