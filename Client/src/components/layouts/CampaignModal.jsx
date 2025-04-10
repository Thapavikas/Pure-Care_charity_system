import React from 'react';
import './../layouts/Campaign.css';
import camp1 from '../../img/Navbar/Navbar1.png'
import camp2 from '../../img/Navbar/Navbar3.jpg'
import camp3 from '../../img/Navbar/Navbar4.jpg'

const CampaignModal = () => {
  return (
    <div className='Campaign'>
      <h3 className='Accheading'>Manual Bank Account Details</h3>
      <div className='Accdetails'>
        <p className='Accpara'>
          <b>
            Account Number: 12345678901<br/>
            IFSC Code: SBIN1112341<br/>
            Bank Name: State Bank of India<br/>
            Account Type: Current<br/>
            Branch: AustinTown Branch
          </b>
        </p>
      </div>
      <div className='Acclogo'>
        {/* Placeholder for bank logo */}
        <img src={camp1}/>
      </div>
      <h4 className='QRcod'>QR Code Scanner</h4>
      <div className='QRcode'>
        {/* Placeholder for QR code image */}
        <img src={camp2}/>
      </div>
      <p style={{ textAlign: 'center' }}>
        <b>Account Number: 1234567801, IFSC Code: SBIN1112341</b>
      </p>
      <p style={{ textAlign: 'center', textDecoration: 'underline' }}>
        <b>Scan and Pay Using any UPI supported Apps</b>
      </p>
      <div className='Upisupport'>
        {/* Placeholder for UPI supported apps */}
        <img src={camp3}/>
      </div>
    </div>
  );
};

export default CampaignModal;
