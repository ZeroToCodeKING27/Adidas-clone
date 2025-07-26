const OrderStatus = () => {
return (

  <>
<div class="container">
  <div class="login">
  
<h2>LOG IN</h2>
    <label for="email">Email *</label>
    <input type="email" id="email" placeholder="Enter your email"/>
    <div class="error">Please enter a valid e-mail address</div>

    <label for="password">Password *</label>
    <input type="password" id="password" placeholder="Enter your password"/>
<>


    <div class="checkbox">
      <input type="checkbox" id="remember"/>
      <label for="remember">Keep me logged in. <a href="#">More info</a></label>
    </div>
</>


    <button class="btn">Log In</button>

    <div class="social-login">
      <button className="Facebook">FACEBOOK</button>
      <button className="GOOGle">GOOGLE</button>
    </div>

    <p class="small-text">
      I have read and accepted <a href="#">adiClub Terms & Conditions</a> and the 
      <a href="#">adidas Privacy Notice</a>
    </p>



 
</div>
  <div class="register">
    <h2>JOIN ADICLUB. GET REWARDED TODAY.</h2>
    <p>As an adiClub member you get rewarded with what you love for doing what you love. Sign up today and receive immediate access to these Level 1 benefits:</p>
    <ul>
      <li>✓ A 15% off voucher for your next purchase</li>
      <li>✓ Access to Members Only products and sales</li>
      <li>✓ Access to adidas Running and Training apps</li>
      <li>✓ Special offers and promotions</li>
    </ul>
    <p>Join now to start earning points, reach new levels and unlock more rewards and benefits from adiClub.</p>
    <button class="btn">Register Now</button>
    <div class="image-section">
    </div>
 </div>

  

  </div>
      <img src="adiclub-join.jpg" alt="Adiclub promo" width="25px" className="JOIN-IMAGE"/>
      
</>

  )
};
export default OrderStatus;