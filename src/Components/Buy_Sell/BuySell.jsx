import React from "react";
import "./buysell.css";

export const BuySell = () => {
  return (
    <div className="BuySell-main">
      {/* first component */}
      <div className="BuySell-btn">
        <button className="Buy_btn">Buy</button>
        <button className="Sell_btn">Sell</button>
        <button className="Exchange_btn">Exchange</button>
      </div>

      {/* second component */}
      <div className="BuySell-main-1">
        <p style={{fontSize:'20px' ,fontWeight:'bold',marginLeft:'10px'}}>Coin</p>
        <div className="inrx">
          <img  className='inrx_img' src='../../../public/white@72x 1.png'/>
          <p>INRx</p>
          <img className='arrow'src='../../../public/Arrow - Down 2.png'/>

          </div>
          <p style={{ fontSize: '18px', fontWeight: 'bold',marginLeft:'20px',marginBottom:'10px'}}>Amount</p>


        <div className="amount">
          <p>1324.00</p>
          <p>RS</p>
        </div>
      
      </div>

      {/* Third Component */}
      <div className="BuySell-main-2">
        <div className='BuySell-main-2-1'>
        <p>Total:</p>
        <h3>1,324.00</h3>
        </div>
       
      </div>
     
      <button className='buy-inrx'>Buy INRx</button>
   
     
    </div>
  );
};
