// File: AdidasCheckout.jsx
import React from 'react';
const AdidasCheckout = () => {
  return (
    <div className="checkout-container">
      <div className="product-section">
      <img src="SHOES/PRODUCT1/A.avif" alt="k" className="image-grids"/>
        <div className="product-details">
          <h3>Samba OG Shoes</h3>
          <p>Cloud White / Core Black / Clear Granite</p>
          <p>Size: 4</p>
          <a href="#">EDIT</a>
          <div className="quantity-box">
            <select>
              <option>1</option>
              {/* add more if needed */}
            </select>
          </div>
        </div>
        <div className="price">R 1,999.00</div>
      </div>

      <div className="order-summary">
        <h3>ORDER SUMMARY <span>(1 ITEM)</span></h3>
        <div className="summary-line">
          <span>SUBTOTAL</span>
          <span>R 1,999.00</span>
        </div>
        <div className="summary-line">
          <span>DELIVERY</span>
          <span className="free">FREE</span>
        </div>
        <p className="note">You unlocked Free Shipping!</p>
        <div className="summary-line total">
          <strong>TOTAL</strong>
          <strong>R 1,999.00</strong>
        </div>

        <button className="checkout-btn">
          <span role="img" aria-label="lock">🔒</span> CHECKOUT
        </button>

        <div className="promo-section">
          <label>ENTER PROMO CODE</label>
          <input type="text" placeholder="Enter your code" />
        </div>

        <div className="payment-methods">
          <p>ACCEPTED PAYMENT METHODS</p>
          <div className="icons">
            <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" />
            <img src="https://img.icons8.com/color/48/mastercard.png" alt="MasterCard" />
            <img src="https://img.icons8.com/ios-filled/50/paypal.png" alt="PayPal" />
            <img src="https://img.icons8.com/ios-filled/50/bank.png" alt="Bank" />
            <img src="https://img.icons8.com/color/48/amex.png" alt="Amex" />
          </div>
        </div>
      </div>
        <div class="banner">
    <h2>BECOME A MEMBER & GET 15% OFF</h2>
   <a href="LOGIN$SIGNUP"><button class="cta-button">
SIGN UP FOR FREE<span class="arrow">→</span>
    </button></a>
  </div>
        <footer class="footer-BAG">
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
      
  );
};

export default AdidasCheckout;