import { useState } from "react";
const OrderStatus = () => {

 const [open, setOpen] = useState(false);
  const [opensec, setOpesec] = useState(false);
    const [openth, setOpenth] = useState(false);
      const [selectedSize, setSelectedSize] = useState(null);
     const [isOpenupdates, setIsOpenupdates] = useState(false);
      const [isOpensize, setIsOpensize] = useState(false);
  const PopupButtonupdates = () => {

 }
  const columns = [
    { label: "Heel-toe (INCH)", values: ['8.7"', '8.9"', '9.0"', '9.2"'] },
    { label: "UK", values: ["3.5", "4", "4.5", "5"] },
    { label: "EU", values: ["36", "36 2/3", "37 1/3", "38"] },
    { label: "US - Men", values: ["4", "4.5", "5", "5.5"] },
    { label: "US - Women", values: ["5", "5.5", "6", "6.5"] },
    { label: "Heel-toe (cm)", values: ["22.1 cm", "22.5 cm", "22.9 cm", "23.3 cm"] },
  ];


  const sizes = [
    { value: '3', available: false },
    { value: '3.5', available: false },
    { value: '4', available: false },
    { value: '4.5', available: true },
    { value: '5', available: true },
    { value: '5.5', available: false },
    { value: '6', available: true },
    { value: '6.5', available: true },
    { value: '7', available: true },
    { value: '7.5', available: true },
    { value: '8', available: true },
    { value: '8.5', available: true },
    { value: '9', available: true },
    { value: '9.5', available: true },
    { value: '10', available: true },
    { value: '10.5', available: true },
    { value: '11', available: true },
    { value: '11.5', available: true },
    { value: '12', available: true },   
    { value: '12.5', available: true },
    { value: '13', available: true },
    { value: '13.5', available: false },
    { value: '14', available: true },
  ];

 const togglePopupupdates = () => {
    setIsOpenupdates(!isOpenupdates);
  };
   const togglePopupsize = () => {
    setIsOpensize(!isOpensize);
  };
  const handleClick = (size) => {
    if (size.available) {
      setSelectedSize(size.value);
    }}

      const [backgroundPosition, setBackgroundPosition] = useState('center');
   
      const handleMouseMove = (e) => {
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = ((e.pageX - left) / width) * 100;
        const y = ((e.pageY - top) / height) * 100;
        setBackgroundPosition(`${x}% ${y}%`);
      };
         const handleMouseMovea = (e) => {
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = ((e.pageX - left) / width) * 100;
        const y = ((e.pageY - top) / height) * 100;
        setBackgroundPosition(`${x}% ${y}%`);
      };
          const handleMouseMoveb = (e) => {
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = ((e.pageX - left) / width) * 100;
        const y = ((e.pageY - top) / height) * 100;
        setBackgroundPosition(`${x}% ${y}%`);
      }; 
          const handleMouseMovec = (e) => {
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = ((e.pageX - left) / width) * 100;
        const y = ((e.pageY - top) / height) * 100;
        setBackgroundPosition(`${x}% ${y}%`);
      };
return (
 
      <>
    
      
   
     <div className="image-div">

<div className="Grid-div-coulours">
<div className="blue">
<div className="Red"> 
          <div className="image-div-1"
   onMouseMove={handleMouseMove}
      style={{
        backgroundImage: `url(${"KIDS/PRODUCT4/A.avif"})`,
        backgroundPosition: backgroundPosition,
        backgroundSize: '200%', // zoom level
        backgroundRepeat: 'no-repeat',
        border: '1px solid #ccc',
      }}
/>
</div>
<div className="nav-content-header">
<a className="Content-header-Lifestyle" href="LIFESTYLE"><u>LIFESTYLE</u><b>/</b></a>
<a className="Content-header" href="men"><u>MEN</u><b>/</b></a>
<a className="Content-header-originals" href="MENWEBPAGE"><u>Originals</u><b>/</b></a>
<a className="Content-header-Shoes">Shoes<b></b></a>
</div>
</div>
<div className="Red"> 
          <div className="image-div-2"
   onMouseMove={handleMouseMovea}
      style={{
        backgroundImage: `url(${"KIDS/PRODUCT4/B.avif"})`,
        backgroundPosition: backgroundPosition,
        backgroundSize: '200%', // zoom level
        backgroundRepeat: 'no-repeat',
        border: '1px solid #ccc',
      }}
/>
</div>
</div>
<div className="Grid-div-coulours">
<div className="blue">
            <div className="image-div-3"
   onMouseMove={handleMouseMoveb}
      style={{
        backgroundImage: `url(${"KIDS/PRODUCT4/C.avif"})`,
        backgroundPosition: backgroundPosition,
        backgroundSize: '200%', // zoom level
        backgroundRepeat: 'no-repeat',
        border: '1px solid #ccc',
      }}
/>
</div>
<div className="Red"> 
            <div className="image-div-4"
   onMouseMove={handleMouseMovec}
      style={{
        backgroundImage: `url(${"KIDS/PRODUCT4/D.avif"})`,
        backgroundPosition: backgroundPosition,
        backgroundSize: '200%', // zoom level
        backgroundRepeat: 'no-repeat',
        border: '1px solid #ccc',
      }}
/>
</div>
</div>
     </div>
 
    <div className="Product-Details-div">
      <p className="First-content-header">SAMBA OG SHOES</p>
    <p><img src="SHOES/PRODUCT1/5stars.jpg" alt="k" className="content-rating-stars" /><p className="rating-numbers">4.8[21037]</p></p>
    <p className="Product-Price">R 1,999.00</p>
    <p className="colours-available">8 colours available</p>
                    <div className="grids-shoes">
<img src="SHOES/PRODUCT1/A.avif" alt="k" className="types-of-shoes" w/>
<img src="SHOES/PRODUCT2/D.avif" alt="k" className="types-of-shoes" w/>
<img src="SHOES/PRODUCT3/A.avif" alt="k" className="types-of-shoes" w/>
<img src="SHOES/PRODUCT4/A.avif" alt="k" className="types-of-shoes" w/>
<img src="SHOES/PRODUCT5/A.avif" alt="k" className="types-of-shoes" w/>
<img src="SHOES/PRODUCT6/A.avif" alt="k" className="types-of-shoes" w/>
<img src="SHOES/PRODUCT7/A.avif" alt="k" className="types-of-shoes" w/>
<img src="SHOES/PRODUCT8/A.avif" alt="k" className="types-of-shoes" w/>
      </div>
    <p className="Types-products">Cloud White / Core Black / Clear Granite</p>
    <p>
      <li>
      This product is excluded from all promotional 
      <p className="li-second">discounts and offers.</p>
      </li></p>
      <p className="Size">Select Size (UK) <u><span className="Size-Chart" onClick={togglePopupsize}>Size Chart</span></u></p>
 {isOpensize && (
        <div className="Popup-size-chart">
 
 <a href="/Shoesa" className="Cancel-size-chart" data-discover="true"><svg aria-hidden="true" aria-label="" class="Cancel-button" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="m12 13.41 8.3 8.3 1.4-1.42L13.42 12l8.3-8.3-1.42-1.4-8.3 8.28-8.3-8.3L2.3 3.7l8.28 8.3-8.3 8.3 1.42 1.4z"></path></svg></a>  <span className='Message'></span>
<p className="Size-chart-p-1"><b>MEN'S AND WOMEN'S ADIDAS </b></p>
<p className="Size-chart-p-2"><b>FOOTWEAR SIZING</b></p>
<p className="HOW-TO-MEASURE"><u>HOW TO MEASURE</u></p>
<p>
  <button className="Size-chart-inches">Inches</button>
</p>
 <div className="shoe-size-container">
      <table className="shoe-size-table">
        <thead>
          <tr>
            <th>Heel-toe (INCH)</th>
            {columns[0].values.map((val, i) => (
              <th key={i}>{val}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {columns.slice(1).map((row, i) => (
            <tr key={i}>
              <td className="row-label">{row.label}</td>
              {row.values.map((val, j) => (
                <td key={j}>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
        
      </table>
    
    </div>
    
        </div>
      )}
  <div className="size-content">
      <div className="size-grid">
        {sizes.map((size, index) => (
          <button
            key={index}
            className={`size-button ${!size.available ? 'disabled' : ''}`}
            onClick={() => handleClick(size)}
            disabled={!size.available}
          >
            {size.value}
          </button>
        ))}
      </div>
      {selectedSize && (
        <p className="selected-size">You selected size: {selectedSize}</p>
      )}

        
      
    </div>
    <div className="Size-Advice">
<p className="P-Size-Advice"><span className="First-Bold-Size" >Size Advice.</span> Order your usual size.</p>
    </div>
    <div className="Div-Button">
  <button className="Add-to-Button"   onClick={togglePopupupdates}><span className="Add-to-bag">ADD TO BAG</span></button>
   {isOpenupdates && (
        <div className="Popup-updates">
    <div className="Add-button-div-1">
<span><b>PRODUCT ADDED TO BAG</b></span><span>(3 ITEMS)</span> <a href="/Shoesa" data-discover="true"><svg aria-hidden="true" aria-label="" class="Cancel-button" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="m12 13.41 8.3 8.3 1.4-1.42L13.42 12l8.3-8.3-1.42-1.4-8.3 8.28-8.3-8.3L2.3 3.7l8.28 8.3-8.3 8.3 1.42 1.4z"></path></svg></a>  <span className='Message'></span>
    </div>
<div className="Product-Price-div">
<img src="SHOES/PRODUCT1/A.avif" className="ADDTOBAG-IMG"></img>
<div className="div-Price-and-details">
<p className="Product-name-add-bag">SAMBA OG SHOES</p>
<p className="Product-price">R5, 997.00</p>
<p className="Size-type-button">Size: 11</p>
</div>

  </div>
  <hr className="hr-content-add-bag"></hr>
  <div className="Subtotal-div">
<span className="Span-Subtotal">Subtotal</span><span className="Price-span">R 5,997.00</span>
    </div>
      <div className="Delivery-div">
<span className="Delivery-span">Delivery</span><span className="Free-span">Free</span>
    </div>
          <div className="You-unlocked-Free-Shipping-div">
<b className="b-Free-Shipping">You unlocked Free Shipping!</b>
    </div>
              <div className="Total-div">
<span className="TOTAL-span">TOTAL</span><span className="span-price">R5.997.00</span>
    </div>
              <div className="View-bag">
<button className="button-view-bag">View Bag</button>
    </div>
                <div className="Checkout-div">
<button className="button-checkout">CHECKOUT</button>
    </div>
        </div>
      )}
</div>

<div className="wishlist-div">
  <img src="wishlist.svg" className="wishlist"/>
</div>
  </div>
<nav className="transport">
  <a>
<img src="Delivery-images/delivery.svg" className="transport-devlivery"/><span className="transport-li">Free Delivery over R600</span>
  </a>
  <a>
<img src="Delivery-images/delivery-same-day.svg" className="transport-devlivery"/><span className="transport-li">Delivery within 3 - 5 Business Days</span>
  </a>
  <a>
 <img src="Delivery-images/LOCK.webp" className="transport-devlivery"/><span className="transport-li"> Secure transactions</span>
  </a>
  <a>
<img src="Delivery-images/FR.webp" className="transport-devlivery"/><span className="transport-li">Hassle free 30 days returns.</span>
  </a>
</nav>

     <div className="product-container">
      
      <div className="header" onClick={() => setOpen(!open)}>
        <strong>Product Description</strong>
        <span className={`arrow ${open ? "up" : "down"}`}>▲</span>
      </div>

      {open && (
        <div className="description-content">
          <div className="text">
            <h2>Summary of Reviews</h2>
            <p>
              Born on the pitch, the Samba is a timeless icon of street style.
              This silhouette stays true to its legacy with a tasteful,
              low-profile, soft leather upper, suede overlays and gum sole,
              making it a staple in everyone's closet – on and off the pitch.
            </p>
          </div>
          <div className="image">
            <img src="SHOES/PRODUCT1/D.avif" className="Product-image" alt="Samba OG Shoe Sole" />
          </div>
        </div>
      )}
    </div>
      <div className="product-container-sec">
      
      <div className="header" onClick={() =>  setOpesec(!opensec)}>
        <strong>Product Details</strong>
        <span className={`arrow ${opensec ? "up" : "down"}`}>▲</span>
      </div>

      {opensec && (
        <div className="description-content-sec">
          <div className="text">
          <ul>
            <li>Regular fit</li>
            <li>Lace closure</li>
          </ul>
            <ul className="Second-buttonlist">
            <li>
             <p> Full grain leather upper with
             gritty suede and gold foil details</p>
              </li>
            <li>
             <p> Synthetic leather lining; Gum 
            rubber cupsole</p>
              </li> 
          </ul>
            <ul>
            <li>Gum rubber midsole</li>
            <li>Product Code:B75806</li>
          </ul>
          </div>
        
        </div>
      )}
    </div>
         <div className="product-container-sec">
      
      <div className="header" onClick={() =>  setOpenth(!openth)}>
        <strong>Reviews</strong>
        <span className={`arrow ${openth ? "up" : "down"}`}>▲</span>
      </div>

      {openth && (
        <div className="description-content-th">
          <div className="text">
            <h2>Summary of Reviews</h2>
            <p>
        <ul>
          <li>AI-generated using English reviews only</li>
          <i>The slides are generally well-received as comfortable and suitable for everyday wear.</i>
          <i>Customers note they tend to run slightly large, but provide good arch support and are</i>
          <i>easy to slip on and off. Man...</i>
        </ul>
            </p>
                <hr></hr>
          </div>
    
             <div className="text">
            <h2>4 out of 5 stars.Good slides, but only for high instep</h2>
            <b>chester-max</b>
            <p>
        <ul>
          <li>Good slides, but not better than Lumia as presented in many reviews. The size in</li>
          <i>length is perfect, I wear US9 sneakers, but according to the size chart these slides</i>
          <i>should also be 9, so I did (again, not listening to reviewers who say one size smaller),</i>
          <i>with these slides it is dangerous to take smaller, because they have small sides,</i>
          <i>which the big toe and heel can rest against. You should definitely not take them if you</i>
          <i>have a low instep like in my case (there is just a hole there), for a low instep the ideal</i>
          <i>option would be Lumia.</i>
        </ul>
            </p>
                    <hr></hr>
                    
          </div>
  
               <div className="text">
            <b>Filter Reviews</b>
            <p>
        <ul>
          <li><input placeholder="Search topics and reviews" className="first-input"/></li>
          <i><input placeholder="Rating" className="second-input"/><input placeholder="Local" className="third-input"/></i>
          <p>
          <i>Customers note they tend to run slightly large, but provide good arch support and are</i>
                <i>easy to slip on and off. Man...</i>
          </p>
        </ul>
            </p>
            <hr></hr>
          </div>
           <div className="text">
            <b>You don’t slides out of these comfortable slide.</b>
            <p>
            <b>WoofFur</b>
            </p>
            <p>
           <ul>
          <li>Finally a super comfy pair of slides that you don’t (slide) step out of when walking up</li>
          <i>stairs. The band across the rod of your foot hugs and holds them in place. The arch</i>
          <i>provides a firmness for great support however it is rather high and can be</i>
          <i>uncomfortable if you don’t have a low or no arch. They aren’t for everyone but they</i>
          <i>sure are the best for me. I would definitely recommend getting them or at the very</i>
          <i>least, trying them out.</i>
          <li><button className="Originally-posted"><span className="">Originally posted on adidas.com</span></button></li>
        </ul>
            </p>
            <hr></hr>
          </div>
        </div>
      )}
    </div>
<div className="div-4-grid">
<p className="Header-for-grids">YOU MIGHT ALSO LIKE</p>
<div className="column">
  <div className="Fox"> 
    <img src="SHOES/PRODUCT1/A.avif" alt="k" className="image-grids"/>
    <p className="Shoes-name">SAMBA OG SHOES</p>
     <p className="Shoes-Price">R1,999.00</p>
      <p className="Shoes-Type">Originals</p>
       <p className="Year-Sneaker">Sneaker Of The Year</p>
    </div>
  <div className="Fox">
     <img src="SHOES/PRODUCT3/A.avif" alt="k" className="image-grids"/>
         <p className="Shoes-name">SAMBA OG SHOES</p>
     <p className="Shoes-Price">R1,999.00</p>
      <p className="Shoes-Type">Originals</p>
     </div>
  <div className="Fox">
     <img src="SHOES/PRODUCT4/A.avif" alt="k" className="image-grids"/>
         <p className="Shoes-name">SAMBA OG SHOES</p>
     <p className="Shoes-Price">R1,999.00</p>
      <p className="Shoes-Type">Originals</p>
             <p className="Year-Sneaker">Sneaker Of The Year</p>
     </div>
  <div className="Fox"> 
    <img src="SHOES/PRODUCT5/A.avif" alt="k" className="image-grids"/>
        <p className="Shoes-name">SAMBA OG SHOES</p>
     <p className="Shoes-Price">R1,999.00</p>
      <p className="Shoes-Type">Originals</p>
    </div>
  </div>
</div>
<hr className="hr-grids-content"></hr>
<div className="div-5-grid">
  <p className="Header-for-grids">OTHERS ALSO BOUGHT</p>
  <div className="column">
<div className="Fox"> 
  <img src="SHOES/PRODUCT6/A.avif" alt="k" className="image-grids"/>
      <p className="Shoes-name">Samba XLG Shoes</p>
     <p className="Shoes-Price">R 2,499.00</p>
      <p className="Shoes-Type">Originals</p>
       <p className="Year-Sneaker">Sneaker Of The Year</p>
  </div>
<div className="Fox">
   <img src="SHOES/PRODUCT7/A.avif" alt="k" className="image-grids"/>
       <p className="Shoes-name">SAMBA OG SHOES</p>
     <p className="Shoes-Price">R1,999.00</p>
      <p className="Shoes-Type">Originals</p>
   </div>
<div className="Fox"> 
  <img src="SHOES/PRODUCT8/A.avif" alt="k" className="image-grids"/>
    <p className="Shoes-name">SAMBA OG SHOES</p>
     <p className="Shoes-Price">R1,999.00</p>
      <p className="Shoes-Type">Originals</p>
</div>
<div className="Fox"> 
  <img src="OUTLETS/PRODUCT1/A.avif" alt="k" className="image-grids"/>
       <p className="Shoes-name">Samba Shoes</p>
     <p className="Shoes-Price">R 1,399.00</p>
      <p className="Shoes-Type">Originals</p>
</div>
</div>
</div>
<hr className="hr-grids-content"></hr>
<div className="div-6-grid">
<p className="Header-for-grids">Recently Viewed</p>
<div className="column">
<div className="Fox">
  <img src="SPORTS/PRODUCT8/A.avif" alt="k" className="image-grids"/>
     <p className="Shoes-name">SAMBA OG SHOES</p>
     <p className="Shoes-Price">R1,999.00</p>
      <p className="Shoes-Type">Originals</p>
       <p className="Year-Sneaker">Sneaker Of The Year</p> 
  </div>

</div>
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





