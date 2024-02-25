import React from 'react';
import '../pages/Contactus.css'
import '../../img/Contact/Contact.jpg'

const Contactus= () => {
  return (
    <div>
        <div class='cover'>
          </div>
          <h1 class="heading">Contact Us</h1>
            <div class="contact-form"> 
              <form class='fill'/> 
                <label for="name">Name:</label> 
                <input type="text" id="name" name="name"/>
                <br/> <label for="email">Email:</label> 
                <input type="email" id="email" name="email"/>
                <br/> <label for="message">Message:</label> <textarea id="message" name="message"></textarea>
                <br/> 
                <input type="submit" value="Send"/>  
            <div class="contact-info" style={{padding:'10px'}}> 
              <p>Email: ContactTeam@gmail.com</p> 
              <p>Phone: +91 1234567890</p> 
              <p>Address: 123 Main St, Anytown</p> 
            </div> 
          </div>
            <div class="help">
              <p style={{fontsize: '23px', textalign:'center', padding:'10px'}}>Help & FAQs?</p>
              <button class="accordion">How will my donation be used?</button>
              <div class="panel">
              <p style={{padding:'10px'}}> Your donation will be used to support our mission and the various programs and initiatives that we have in place. Your donation will help us to continue providing assistance and support to those in need. You can find more information about our programs and initiatives on our website. If you have any specific questions or concerns, please feel free to contact us</p>
            </div>
          </div>
      </div>
  );
};

export default Contactus ;