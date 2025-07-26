import React, { useState } from "react";

const OrderStatus = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);

  };
/*Second-part*/


return (
      <>
     
    
  

     <nav className="middle-section">
 <img src="adidas_logo (1).svg" alt="k" className="header-image"/>
 <a className="align-header">Shoes</a>
<a className="align-header">MEN</a>
<a className="align-header">WOMEN</a>
<a className="align-header">KIDS</a>
<a className="align-header">SPORTS</a>
<a className="align-header">LIFESTYLE</a>
<a className="align-header">NEW</a>
<a className="align-header">OUTLETS</a>
</nav>
<nav className="Right-section">
<>
<input type="text" placeholder="Search" className="search-nput" />

<img src="profile (1).svg" alt="k" className="header-imae"/>
<img src="wishlist-empty (1).svg" alt="k" className="header-imae"/>
<img src="bag_full.svg" alt="k" className="header-imae"/>
</>
</nav>

<div
      onClick={toggleAnswer}
      className="Main-product"
    >
     <div  className="max-w-2xl mx-auto p-4 border-b border-gray-300">
      <h2 className="text-lg font-semibold text-[#030303]">
     <img src="LIFESTYLE/PRODUCT8/A.avif" alt="k" className="image-1" w/>
  
      </h2>
      <h2 className="text-first font-semibold text-[#030303]">
      Samba OG Shoes
      </h2>
      <h2 className="text-secon font-semibold text-[#030303]">
      <img src="SHOES/PRODUCT1/5stars.jpg" alt="k" className="text-second" />
      </h2>
      <h2 className="text-lgg font-semibold text-[#030303]">
     <img src="LIFESTYLE/PRODUCT8/B.avif" alt="k" className="image-2" w/>
   

      </h2>
      <h2 className="text-price font-semibold text-[#030303]">
      R 1,999.00
   
      </h2>
      <h2 className="text-types font-semibold text-[#030303]">
      Cloud White / Core Black / Clear Granite
      </h2>
      <h2 className="text-Bullet font-semibold text-[#030303]">
      <li>
      This product is excluded from all promotional discounts and offers.
      </li>
      </h2>
      <h2 className="text-size font-semibold text-[#030303]">
    Select size(UK)
      </h2>
      export default function ShoeSizeGrid() {
  
    <div className="grid-container">
      {[
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
        { value: '14.5', available: true },
        { value: '15', available: true },
        { value: '16', available: true },
        { value: '17', available: true },
        { value: '18', available: true },
      ].map((size, index) => (
        <button
          key={index}
          disabled={!size.available}
          className={`size-button ${!size.available ? 'disabled' : ''}`}
        >
          {size.value}
        </button>
      ))}
    </div>
  
}



      <h2 className="text-lggg font-semibold text-[#030303]">
     <img src="LIFESTYLE/PRODUCT8/C.avif" alt="k" className="image-3" w/>
  
      </h2>
      <h2 className="text-lggg font-semibold text-[#030303]">
     <img src="LIFESTYLE/PRODUCT8/D.avif" alt="k" className="image-4" w/>
  
      </h2>
  
    </div>

    {isOpen && (
      <div className="mt-2 text-sm text-[#030303]">

    
    </div>
  )}


</div>

<>


  <div class="banner-customer">
    <h2>BECOME A MEMBER & GET 15% OFF</h2>
    <button class="cta-button">
      SIGN UP FOR FREE <span class="arrow">→</span>
    </button>
  </div>

  

</>
  </>
  );
};

export default OrderStatus;