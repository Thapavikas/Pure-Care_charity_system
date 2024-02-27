import React from 'react';
import './../layouts/Campaign.css'



const CampaignModal = () => {
  return (
    <div class='Campaign'>
      <h3 class='Accheading'>Manual Bank Account Details </h3>
      <div class='Accdetails'>
        <p class='Accpara'>
          <b>
          Account Number : 12345678901<br/>
          IFSC Code: SBIN1112341<br/>
          Bank Name: State Bank of india<br/> 
          Account type: Current<br/>
          Branch:AustinTown Branch
          </b>
        </p>
      </div>
      <div class='Acclogo'>
      </div>
      <h4 class='QRcod'>QR Code Scanner</h4>
      <div class='QRcode'>
      </div>
      <p style={{textAlign:'center'}}> <b>Account Number:1234567801,IFSC Code: SBIN1112341 </b></p>
      <p style={{textAlign:'center',textDecoration:'underline'}}> <b>Scan and Pay Using any UPI supported Apps</b></p>
      <div class='Upisupport'></div>
    </div>
  );
};

export default CampaignModal;
