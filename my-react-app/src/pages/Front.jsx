import React, { useState } from 'react';

const OrderStatus = () => {
        const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => setIsOpen(!isOpen);
  return (

    <>


 <div className='div-faq'>

            <div onClick={toggleAnswer} style={{ cursor: 'pointer', fontWeight: 'bold' }}>
  <p className='Faq-Question'>What should I do if I received the wrong product? </p>
      </div>

      {isOpen && (
      <div style={{ marginTop: '8px' }}>
 <p className='Faq-answers-1'>If you placed your order from our online shop and received the wrong product, please contact us and we'll</p>
 <p className='Faq-answers-1'>help you with the return and refund process. If you received a product that's the wrong size, you can return </p>
 <p className='Faq-answers-1'> the product to us and re-order at our helpdesk contact us.</p>


        </div>
      )}
            <div onClick={toggleAnswer} style={{ cursor: 'pointer', fontWeight: 'bold' }}>
 <p className='Faq-Question'>What should I do if I haven't received my package?</p>
      </div>

      {isOpen && (
        <div style={{ marginTop: '8px' }}>
         
<p className='Faq-answers-1'> First, make sure you check the delivery times for the product type of your orders and then check the status </p>
<p className='Faq-answers-1'> of your order with the order tracker. Alternatively, please contact our helpdesk.</p>
        </div>
      )}
            <div onClick={toggleAnswer} style={{ cursor: 'pointer', fontWeight: 'bold' }}>
      <p className='Faq-Question'> How long does delivery take?</p>
      </div>

      {isOpen && (
        <div style={{ marginTop: '8px' }}>
  <p className='Faq-answers-1'> The delivery time depends on your delivery address and when you place your order.</p>
    <p className='Faq-answers-1'> There are a few reasons that can keep us from being able to ship your order. Here are a few possible causes: </p>
 <p className='Faq-answers-1'> The product(s) you ordered are out of stock.</p>
        </div>
      )}
            <div onClick={toggleAnswer} style={{ cursor: 'pointer', fontWeight: 'bold' }}>
        <p className='Faq-Question'>Why can't you ship my order?</p>
      </div>

      {isOpen && (
        <div style={{ marginTop: '8px' }}>
 <p className='Faq-answers-1'>  Please select and accept your tracking preferences:</p>
        </div>
      )}
                  <div onClick={toggleAnswer} style={{ cursor: 'pointer', fontWeight: 'bold' }}>
      <p className='Faq-Question'> Standard Delivery (3-5 business days)</p>
      </div>

      {isOpen && (
        <div style={{ marginTop: '8px' }}>
  <p className='Faq-answers-1'> All orders over R600* qualify for free delivery, please see the delivery fee calculated at checkout if your order</p>
    <p className='Faq-answers-1'>is below R600. Applicable to all areas within South Africa. Please note that some bulky items may only be </p>
 <p className='Faq-answers-1'> available on Standard Delivery.</p>
        </div>
      )}
                  <div onClick={toggleAnswer} style={{ cursor: 'pointer', fontWeight: 'bold' }}>
      <p className='Faq-Question'> Express Delivery (2-3 business days)</p>
      </div>

      {isOpen && (
        <div style={{ marginTop: '8px' }}>
  <p className='Faq-answers-1'> Only certain main centre areas qualify, and orders must be placed before 14:00 on a working week day.</p>
  
        </div>
      )}
                  <div onClick={toggleAnswer} style={{ cursor: 'pointer', fontWeight: 'bold' }}>
      <p className='Faq-Question'>Why can't you ship my order?</p>
      </div>

      {isOpen && (
        <div style={{ marginTop: '8px' }}>
  <p className='Faq-answers-1'> There are a few reasons that can keep us from being able to ship your order. Here are a few possible causes:</p>
    <p className='Faq-answers-1'>The product(s) you ordered are out of stock. </p>
 <p className='Faq-answers-1'> You live in a remote area, and we cannot deliver there.</p>
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