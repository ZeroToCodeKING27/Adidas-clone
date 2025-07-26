import { useState } from "react";
const OrderStatus = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    "Sort By", "Sale", "Discount Percentage", "Size", "Product Category",
    "Gender", "Kids", "Age", "Product Type", "Price", "Colours", "Sport"
  ];

  const toggleSection = (title) => {
    setActiveSection(prev => (prev === title ? null : title));
  };
 
  
 
/*Second-part*/


return (
      <>
<>
<div className="Header-section">
<div className="first-header-section">
  <p> <u>LIFESTYLE</u> / Samba</p>
</div>

  <div className="filter-wrapper">
      <button className="open-button" onClick={() => setIsOpen(true)}>Open Filter</button>

      <div className={`filter-popup ${isOpen ? 'show' : ''}`}>
        <button className="close-button" onClick={() => setIsOpen(false)}>✕</button>
        <h2 className="filter-title">Filter & Sort</h2>

        <div className="filter-sections">
          {sections.map((section) => (
            <div className="filter-section" key={section}>
              <div className="filter-header" onClick={() => toggleSection(section)}>
                <span>{section.toUpperCase()}</span>
                <span>{activeSection === section ? '▲' : '▼'}</span>
              </div>
              {activeSection === section && (
                <div className="filter-content">
                  <p>[ Filter Options Go Here ]</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <button className="apply-button">APPLY (89) →</button>
      </div>
    </div>

<div className="xs">
  <ul>
  <ol className="li-header-section">Samba shoes are an adidas success story that has travelled the world, from indoor football tournaments to the streets. Dance your</ol>
  <ol className="li-header-section"> way into a Samba pair in your size and pick from a range of colours and styles.<u className="Show-more">Show more</u></ol>
  </ul>
      <div>
        <a href="" className=""><img src="public/Product-grid-images-men/jacks.jpg" className="Grid-Product-images"/></a>
    <a href="" className=""><img src="public/Product-grid-images-men/H$S.jpg" className="Grid-Product-images"/></a>
     <a href="" className=""><img src="public/Product-grid-images-men/P$T.jpg" className="Grid-Product-images"/></a>
     <a href="" className=""><img src="public/Product-grid-images-men/T$P.jpg" className="Grid-Product-images"/></a>
  </div>
</div>
</div>
</>
<>
 
<div className="NEW-ARRIVAL-GAP-GRIDS">
   <a href="Shoesa" target="_self"  className="Grids-for-products"> 
     <img src="SHOES/PRODUCT1/A.avif" alt="k" width="1000px" className="NEW-ARRIVAL"/>
  <div className="div-heartsvg">
<img src="public/svg/love-heart-valentine-romance-wedding-romantic-like-2-svgrepo-com (1).svg" alt="k" width="1000px" className="Heart-svg"/>
  </div>

  <div className="padlock-div">
<img src="public/svg/padlock-lock-svgrepo-com.svg" alt="k" width="1000px" className="padlock-svg"/>
  </div>

 <p className="First-p">Xperior Shorts</p>
 <p className="Sec-p">R 1,199.00</p>
 <p className="Third-p">Women TERREX</p>
  <p className="Fourth-p">2 colours</p>
  </a>
    <a href="Shoesb" target="_self" className="Grids-for-products">   <img src="SPORTS/PRODUCT5/A.avif" alt="k" width="1000px" className="NEW-ARRIVAL"/>
 <p className="First-p">Xperior Shorts</p>
 <p className="Sec-p">R 1,199.00</p>
 <p className="Third-p">Women TERREX</p>
  <p className="Fourth-p">2 colours</p>
    </a>
     <a href="Shoesc" target="_self" className="Grids-for-products">   <img src="SHOES/PRODUCT3/A.avif" alt="k" width="1000px" className="NEW-ARRIVAL"/>
  <p className="First-p">Xperior Shorts</p>
 <p className="Sec-p">R 1,199.00</p>
 <p className="Third-p">Women TERREX</p>
  <p className="Fourth-p">2 colours</p>
     </a>
          <a href="Shoesd" target="_self" className="Grids-for-products">   <img src="SHOES/PRODUCT4/A.avif" alt="k" width="1000px" className="NEW-ARRIVAL"/>
 <p className="First-p">Xperior Shorts</p>
 <p className="Sec-p">R 1,199.00</p>
 <p className="Third-p">Women TERREX</p>
  <p className="Fourth-p">2 colours</p>
          </a>
</div>
</>
<>
  

 <div className="body-1">
  <div class="banner">
    <h2>BECOME A MEMBER & GET 15% OFF</h2>
   <a href="LOGIN$SIGNUP"><button class="cta-button">
SIGN UP FOR FREE<span class="arrow">→</span>
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
</>

    


  );
};

export default OrderStatus;