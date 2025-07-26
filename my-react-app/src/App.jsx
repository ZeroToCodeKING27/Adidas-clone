import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Abouta from './pages/Abouta';
import Aboutb from './pages/Aboutb';
import Aboutc from './pages/Aboutc';
import Aboutd from './pages/Aboutd';

import Shop from './pages/Shop';
import Customer from './pages/Customer';
import Front from './pages/Front';
 import Shoesgrid from './pages/Shoesgrid';
import New from './pages/New';
import Men from './pages/Men';
import Women from './pages/Women';
import Kids from './pages/Kids';
import Lifestyle from './pages/Lifestyle';
import Sports from './pages/Sports';
import Outlets from './pages/Outlets';
   import Kidsa from './pages/Kidsa';
   import Kidsb from './pages/Kidsb';
      import Kidsc from './pages/Kidsc';
      import Kidsd from './pages/Kidsd';
      import Kidse from './pages/Kidse';
import Kidsf from './pages/Kidsf';
import Kidsg from './pages/Kidsg';
import Kidsh from './pages/Kidsh';
import LIFESTYLEa  from'./pages/LIFESTYLEa';
  import LIFESTYLEb  from'./pages/LIFESTYLEb';
  import LIFESTYLEc  from'./pages/LIFESTYLEc';
  import LIFESTYLEd  from'./pages/LIFESTYLEd';
  import LIFESTYLEe  from'./pages/LIFESTYLEe';
  import LIFESTYLEf  from'./pages/LIFESTYLEf';
  import LIFESTYLEg  from'./pages/LIFESTYLEg';
  import LIFESTYLEh  from'./pages/LIFESTYLEh';
  import Shoesa from './pages/SHOESa';
  import Shoesb from './pages/SHOESb';
  import Shoesc from './pages/SHOESc';
  import Shoesd from './pages/SHOESd';
  import Shoese from './pages/SHOESe';
  import Shoesg from './pages/SHOESg';
  import Shoesf from './pages/SHOESf';
  import Shoesh from './pages/SHOESh';
  import MENa from './pages/MENa';
  import MENb from './pages/MENb';
  import MENc from './pages/MENc';
  import MENd from './pages/MENd';
  import MENe from './pages/MENe';
  import MENf from './pages/MENf';
  import MENg from './pages/MENg';
  import MENh from './pages/MENh';
    import SPORTSa from './pages/SPORTSa';
    import SPORTSb from './pages/SPORTSb';
    import SPORTSc from './pages/SPORTSc';
    import SPORTSd from './pages/SPORTSd';
    import SPORTSe from './pages/SPORTSe';
    import SPORTSf from './pages/SPORTSf';
    import SPORTSg from './pages/SPORTSg';
    import SPORTSh from './pages/SPORTSh';
    import WOMENa from './pages/WOMENa';
    import WOMENb from './pages/WOMENb';
    import WOMENc from './pages/WOMENc';
    import WOMENd from './pages/WOMENd';
    import WOMENe from './pages/WOMENe';
    import WOMENf from './pages/WOMENf';
    import WOMENg from './pages/WOMENg';
    import WOMENh from './pages/WOMENh';
    import NEWa from './pages/NEWa';
        import NEWb from './pages/NEWb';
          import NEWc from './pages/NEWc';
            import NEWd from './pages/NEWd';
              import NEWe from './pages/NEWe';
                import NEWf from './pages/NEWf';
                  import NEWg from './pages/NEWg';
                    import NEWh from './pages/NEWh';

                    import OUTLETa from './pages/OUTLETa';
                    import OUTLETb from './pages/OUTLETb';
                    import OUTLETc from './pages/OUTLETc';
                    import OUTLETd from './pages/OUTLETd';
                    import OUTLETe from './pages/OUTLETe';
                    import OUTLETf from './pages/OUTLETf';
                    import OUTLETg from './pages/OUTLETg';
                    import OUTLETh from './pages/OUTLETh';
                   import LOGIN$SIGNUP from './pages/LOGIN$SIGNUP';
                   import LOGIN$SIGNUPa from './pages/LOGIN$SIGNUPa';
                    import BAG from './pages/BAG';
                      import MENWEBPAGE from './pages/MENWEBPAGE';
                    import Aboutcontenta from './pages/Aboutcontenta';
                    import Aboutcontentb from './pages/Aboutcontentb';
                    import Aboutcontentc from './pages/Aboutcontentc';
                    import Aboutcontentd from './pages/Aboutcontentd';
import './App.css'

  import { useState } from "react";
function App() {

       const [isOpenupdates, setIsOpenupdates] = useState(false);
        const togglePopupupdates = () => {
    setIsOpenupdates(!isOpenupdates);
  };
  return (
    <Router>
      <nav className='Black-Box'>
        <Link to="/front" className='Home'><span className='DELIVERY-DELAYS'>DELIVERY DELAYS </span>  </Link> |{" "}
        
        <Link to="/about" className='About'>JOIN ADICLUB </Link> |{" "}
        <Link to="/shop" className='Shop' onClick={togglePopupupdates}>MANAGE COOKIE PREFERENCES</Link>
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
      </nav>

 <nav className="middle-section">
  <div className='left'>
<Link to="/" className="align-header"><img src="adidas_logo (1).svg" alt="k" className="imaga"/></Link>
  </div>

               
<Link to="/shoesgrid" className="align-header-bold">SHOES</Link>
<Link to="/men" className="align-header-bold">MEN</Link>
<Link to="/women"  className="align-header-bold">WOMEN</Link>
<Link to="/kids"  className="align-header-bold">KIDS</Link>
<Link to="/sports" className="align-header">SPORTS</Link>
<Link to="/lifestyle"  className="align-header">LIFESTYLE</Link>
<Link to="/new"  className="align-header">NEW</Link>
<Link to="/Outlets" className="align-header-red">OUTLETS</Link>
</nav>
<nav className="Right-section">
<>
<input  type="text"  placeholder="Search" className="search-nput"></input>


<Link to="/LOGIN$SIGNUP" ><img src="profile (1).svg" alt="k" className="header-imae"/></Link>
<Link to="/LOGIN$SIGNUPa" ><img src="wishlist-empty (1).svg" alt="k" className="header-imae"/></Link>
<Link to="/BAG"  className="align-header"><img src="bag_full.svg" alt="k" className="header-imae"/></Link>
</>

</nav>
<hr className='nav-hr-line'></hr>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
            <Route path="/abouta" element={<Abouta />} />
                <Route path="/aboutb" element={<Aboutb />} />
                    <Route path="/aboutc" element={<Aboutc />} />   
                     <Route path="/aboutd" element={<Aboutd />} />

        <Route path="/shop" element={<Shop />} />
        <Route path="/customer" element={<Customer />} />
         <Route path="/front" element={<Front />} />
              <Route path="/shoesgrid" element={<Shoesgrid />} />
                 <Route path="/new" element={<New/>} />
                     <Route path="/men" element={<Men />} />
                       <Route path="/women" element={<Women />} />
                                       <Route path="/kids" element={<Kids />} />
                                         <Route path="/lifestyle" element={<Lifestyle />} />
                                           <Route path="/sports" element={<Sports/>} />
                                             <Route path="/outlets" element={<Outlets />} />
                                            <Route path="/Kidsa" element={<Kidsa />} />
                                            <Route path="/kidsb" element={<Kidsb />}/>
                                            <Route path="/kidsc" element={<Kidsc />}/>
                                          <Route path="/kidsd" element={<Kidsd />}/>
                                              <Route path="/kidse" element={<Kidse />}/>
                                                <Route path="/kidsg" element={<Kidsg />}/>
                                                <Route path="/kidsf" element={<Kidsf />}/>
                                                <Route path="/kidsh" element={<Kidsh />}/>
                                                <Route path="/LIFESTYLEa" element={<LIFESTYLEa />}/>
                                                  <Route path="/LIFESTYLEb" element={<LIFESTYLEb />}/>
                                                    <Route path="/LIFESTYLEc" element={<LIFESTYLEc />}/>
                                                      <Route path="/LIFESTYLEd" element={<LIFESTYLEd />}/>
                                                        <Route path="/LIFESTYLEe" element={<LIFESTYLEe />}/>
                                                          <Route path="/LIFESTYLEf" element={<LIFESTYLEf />}/>
                                                            <Route path="/LIFESTYLEg" element={<LIFESTYLEg />}/>
                                                              <Route path="/LIFESTYLEh" element={<LIFESTYLEh />}/>
                                                               <Route path="/shoesa" element={<Shoesa />}/>
                                                               <Route path="/shoesb" element={<Shoesb />}/>
                                                               <Route path="/shoesc" element={<Shoesc />}/>
                                                               <Route path="/shoesd" element={<Shoesd />}/>
                                                               <Route path="/shoese" element={<Shoese />}/>
                                                               <Route path="/shoesf" element={<Shoesf />}/>
                                                               <Route path="/shoesg" element={<Shoesg />}/>
                                                               <Route path="/shoesh" element={<Shoesh />}/>
                                                                <Route path="/mena" element={<MENa />}/>
                                                               <Route path="/menb" element={<MENb />}/>
                                                                <Route path="/menc" element={<MENc />}/>
                                                                 <Route path="/mend" element={<MENd />}/>
                                                                  <Route path="/mene" element={<MENe />}/>
                                                                   <Route path="/menf" element={<MENf />}/>
                                                                    <Route path="/meng" element={<MENg />}/>
                                                                     <Route path="/menh" element={<MENh />}/>
                                                                    <Route path="/sportsa" element={<SPORTSa />}/>
                                                                    <Route path="/sportsb" element={<SPORTSb />}/>
                                                                    <Route path="/sportsc" element={<SPORTSc/>}/>
                                                                    <Route path="/sportsd" element={<SPORTSd />}/>
                                                                    <Route path="/sportse" element={<SPORTSe />}/>
                                                                    <Route path="/sportsf" element={<SPORTSf />}/>
                                                                    <Route path="/sportsg" element={<SPORTSg />}/>
                                                                    <Route path="/sportsh" element={<SPORTSh />}/>
                                                                    <Route path="/womena" element={<WOMENa />}/>
                                                                    <Route path="/womenb" element={<WOMENb />}/>
                                                                    <Route path="/womenc" element={<WOMENc />}/>
                                                                    <Route path="/womend" element={<WOMENd />}/>
                                                                    <Route path="/womene" element={<WOMENe />}/>
                                                                    <Route path="/womenf" element={<WOMENf />}/>
                                                                    <Route path="/womeng" element={<WOMENg />}/>
                                                                    <Route path="/womenh" element={<WOMENh />}/>
                                                                     <Route path="/newa" element={<NEWa />}/>
 <Route path="/newb" element={<NEWb />}/>
   <Route path="/newc" element={<NEWc />}/>
    <Route path="/newd" element={<NEWd />}/>
     <Route path="/newe" element={<NEWe />}/>
      <Route path="/newf" element={<NEWf />}/>
       <Route path="/newg" element={<NEWg />}/>
        <Route path="/newh" element={<NEWh />}/>
                                                                       <Route path="/outleta" element={<OUTLETa />}/>
                                                                        <Route path="/outletb" element={<OUTLETb/>}/>
                                                                         <Route path="/outletc" element={<OUTLETc />}/>
                                                                          <Route path="/outletd" element={<OUTLETd/>}/>
                                                                           <Route path="/outlete" element={<OUTLETe />}/>
                                                                            <Route path="/outletf" element={<OUTLETf />}/>
                                                                             <Route path="/outletg" element={<OUTLETg />}/>
                                                                              <Route path="/outleh" element={<OUTLETh />}/>

                                                                               <Route path="/BAG" element={<BAG />}/>
                                                                                <Route path="/LOGIN$SIGNUP" element={<LOGIN$SIGNUP />}/>
                                                                                 <Route path="/LOGIN$SIGNUPa" element={<LOGIN$SIGNUPa/>}/>
                                                                               <Route path="/MENWEBPAGE" element={<MENWEBPAGE/>}/>
         <Route path="/Aboutcontenta" element={<Aboutcontenta/>}/>
          <Route path="/Aboutcontentb" element={<Aboutcontentb/>}/>
           <Route path="/Aboutcontentc" element={<Aboutcontentc/>}/>
            <Route path="/Aboutcontentd" element={<Aboutcontentd/>}/>
                                                                               
      </Routes>


    </Router>


  );
}

export default App; 