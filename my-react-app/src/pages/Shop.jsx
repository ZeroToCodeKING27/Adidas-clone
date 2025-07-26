import React, { useState } from 'react';

const OrderStatus = () => {
        const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => setIsOpen(!isOpen);
  return (

    <>


 <div className='div-faq'>
      <div onClick={toggleAnswer} style={{ cursor: 'pointer', fontWeight: 'bold' }}>
<p className='Header-cookie'>COOKIE TRACKING FOR THE BEST ADIDAS EXPERIENCE</p>
      </div>

      {isOpen && (
        <div style={{ marginTop: '8px' }}> 
   <p className='Faq-answers-1'>   By selecting 'Yes', you allow adidas to use cookies, pixels, tags and similar technologies. We use these technologies to collect your device and</p>
 <p className='Faq-answers-1'> browser information in order to track your activity   for marketing and functional purposes, like featuring personalized ads and improving the</p>
  <p className='Faq-answers-1'>       website. adidas may share this data with third-parties - including social media advertising partners like Google, Facebook, and Instagram -</p>
    <p className='Faq-answers-1'>      for marketing purposes. Please visit our privacy notice (see Cookies Notice section) for more information and to understand how we use your data</p>
     <p className='Faq-answers-1'>  for Required purposes (eg security, shopping cart features and logging in).</p>

        </div>
      )}
            <div onClick={toggleAnswer} style={{ cursor: 'pointer', fontWeight: 'bold' }}>
  <p className='Faq-Question'>Required (Give Website Access) </p>
      </div>

      {isOpen && (
      <div style={{ marginTop: '8px' }}>
 <p className='Faq-answers-1'> We use cookies to enable essential website operations and to ensure certain features work properly,like the option to</p>
 <p className='Faq-answers-1'>   log in or add a product to your shopping cart. This tracking is always enabled, otherwise, you can't view the website or</p>
 <p className='Faq-answers-1'>   shop online.Want to learn more about how adidas tracks you? Check out our privacy notice.</p>


        </div>
      )}
            <div onClick={toggleAnswer} style={{ cursor: 'pointer', fontWeight: 'bold' }}>
 <p className='Faq-Question'>Functional (Improve The Website)</p>
      </div>

      {isOpen && (
        <div style={{ marginTop: '8px' }}>
         
<p className='Faq-answers-1'> We use functional tracking to analyze how our website is being used. This data helps us to discover </p>
<p className='Faq-answers-1'> errors and develop new designs. It also allows us to test the effectiveness of our website.</p>
 <p className='Faq-answers-1'> Furthermore, these cookies provide insights for advertising analysis and affiliate marketing.</p>
        </div>
      )}
            <div onClick={toggleAnswer} style={{ cursor: 'pointer', fontWeight: 'bold' }}>
      <p className='Faq-Question'> Marketing (Feature Personalized Ads)</p>
      </div>

      {isOpen && (
        <div style={{ marginTop: '8px' }}>
  <p className='Faq-answers-1'> adidas and our advertising partners (including social media platforms like Google, Facebook, and Instagram)</p>
    <p className='Faq-answers-1'> use tracking to provide personalized offers to give you the full adidas experience. This includes sending you “Targeted Messages on 3rd Party Advertising Platforms” as described in the Privacy Notice. </p>
 <p className='Faq-answers-1'>  If you don't accept this tracking, you will still see adidas advertisements on other platforms at random.</p>
        </div>
      )}
            <div onClick={toggleAnswer} style={{ cursor: 'pointer', fontWeight: 'bold' }}>
        <p className='Faq-Question'> MANAGE TRACKING</p>
      </div>

      {isOpen && (
        <div style={{ marginTop: '8px' }}>
 <p className='Faq-answers-1'>  Please select and accept your tracking preferences:</p>
        </div>
      )}
    </div>
  <div className="body-1">
  <div class="banner">
    <h2>BECOME A MEMBER & GET 15% OFF</h2>
  <a href="LOGIN$SIGNUP"> <button class="cta-button">
      SIGN UP FOR FREE <span class="arrow">→</span>
    </button></a>
  </div>

  <footer class="footer">
       <hr className="black-hr-horizontal"></hr>
  <div class="footer-container">
    <div class="footer-column">
      <h4>Products</h4>
      <ul>
        <li>Shoes</li>
        <li>Clothing</li>
        <li>Accessories</li>
        <li>Outlet</li>
      </ul>
    </div>
    <div class="footer-column">
      <h4>Sports</h4>
      <ul>
        <li>Soccer</li>
        <li>Motorsport</li>
        <li>Running</li>
        <li>Training</li>
        <li>Outdoor</li>
        <li>Golf</li>
        <li>Rugby</li>
        <li>Swimming</li>
        <li>Tennis</li>
        <li>Basketball</li>
        <li>Hockey</li>
      </ul>
    </div>
    <div class="footer-column">
      <h4>Collections</h4>
      <ul>
        <li>Originals</li>
        <li>Stella McCartney</li>
        <li>Stan Smith</li>
        <li>Disney</li>
        <li>Ultraboost</li>
      </ul>
    </div>
    <div class="footer-column">
      <h4>Company Info</h4>
      <ul>
        <li>About Us</li>
        <li>Careers</li>
        <li>Impact</li>
        <li>People</li>
        <li>Planet</li>
        <li>Press</li>
        <li>Carbon Footprint</li>
        <li>PAIA-policy</li>
        <li>adiClub</li>
        <li>adidas Runners</li>
      </ul>
    </div>
    <div class="footer-column">
      <h4>Support</h4>
      <ul>
        <li>Contact Us</li>
        <li>FAQ</li>
        <li>Shipping</li>
        <li>Returns</li>
        <li>adiClub & Newsletter</li>
        <li>Size Charts</li>
        <li>Vouchers</li>
        <li>Storefinder</li>
      </ul>
    </div>
    <div class="footer-column">
    
      <div class="social-icons">
        <span className="bottom-black">Data Settings | Cookie Settings | Privacy Policy | Terms And Conditions | Imprint</span>
      </div>
    </div>
  </div>
</footer>
</div>
    </>
  );
};

export default OrderStatus;