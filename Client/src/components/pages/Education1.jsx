import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import '../pages/Education1.css';

const Education1 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [donate, setDonate] = useState("");
  const [place, setPlace] = useState("");
  const [address, setAddress] = useState("");

  const handleEducation = (event) => {
    event.preventDefault();

    axios.post('http://localhost:3001/Education1', {
      name,
      email,
      phone,
      donate,
      place,
      address
    })
    .then(() => {
      Swal.fire({
        title: "Thank you!",
        text: "Your details have been successfully submitted!",
        icon: "success"
      });
    })
    .catch(err => console.log(err));
  };

  return (
    <main>
      <div className='Eform'>
        <form className='EDform' onSubmit={handleEducation}>
          <p className="Elogo">Child <b>Education</b></p>

          <div className="EDname">
            <label htmlFor="name" style={{ color: 'black' }}>User Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder='User Full Name'
              onChange={e => setName(e.target.value)}
              required
            />
          </div>

          <div className='EDemail'>
            <label htmlFor="email" style={{ color: 'black' }}>Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder='User Email'
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>

          <div className='EDphone'>
            <label htmlFor="phoneno" style={{ color: 'black' }}>Phone No:</label>
            <input
              type="text"
              id="phoneno"
              name="phoneno"
              placeholder='User Phone'
              onChange={e => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="checkbox">
            <label htmlFor="Ecategry" style={{ fontSize: '20px', color: 'black' }}>
              <b>What would you like to donate:<br />1. TextBooks<br />2. Stationery supplies<br />3. Educational Toys and Games<br />4. Library Books</b>
            </label>
            <br />
            <input
              type='text'
              placeholder='Enter the option'
              id='Ecategry'
              onChange={e => setDonate(e.target.value)}
              required
            />
          </div>

          <div className="EDselect">
            <label htmlFor="place">Place</label>
            <input
              type='text'
              id="place"
              placeholder='Enter your place'
              onChange={e => setPlace(e.target.value)}
              required
            />
          </div>

          <div className='EDaddress'>
            <label htmlFor="address" style={{ color: 'black' }}>Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              onChange={e => setAddress(e.target.value)}
              required
            />
          </div>

          <button id='EDsubmit' type='submit'>Submit</button>
        </form>
      </div>
    </main>
  );
};

export default Education1;
