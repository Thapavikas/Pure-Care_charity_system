import React from 'react';
import axios, { Axios } from 'axios';
import { useState } from 'react';
import '../pages/Education1.css'
import Swal from 'sweetalert2'


const Education1 = () => {

    const [name,setName] = useState("")
    const [email,setemail] = useState("")
    const [phone,setphone] = useState("")
    const [donate,setdonate] = useState("")
    const [place,setplace] = useState("")
    const [address,setaddress] = useState("")

    const handleEducation=(event)=>{
        event.preventDefault()
        axios.post('http://localhost:3001/Education1',[name,email,phone,donate,place,address])
        .catch(err=>console.log(err))
    }
    const handleCick = () =>{
        Swal.fire({
            title: "Thank you!",
            text: "Your Details has been Successfully Submited Thank you  !",
            icon: "success"
          });
    }
    return (
        <main>
            <div class='Eform'>
                <form class='EDform' onSubmit={handleEducation}>
                    <p class="Elogo">Child <b>Education</b></p>
                    <div class="EDname">
                    <label for="name" style={{color:'black'}}> User Full Name</label>
                    <input type="text" id="name" name="name" placeholder='User Full Name' onChange={e=>{setName(e.target.value)}}/>
                    </div>
                    <div class='EDemail'>
                        <label for="email" style={{color:'black'}}>Email:</label>
                        <input type="email" id="email" name="email" placeholder='User Email'onChange={e=>{setemail(e.target.value)}}/>
                    </div>
                    <div class='EDphone'>
                        <label for="phoneno" style={{color:'black'}}>PhoneNo:</label>
                        <input type="text" id="phoneno" name="phoneno" placeholder='User Phone' onChange={e=>{setphone(e.target.value)}}/>
                    </div>
                    <div class="checkbox">
                        <label for="Ecategry" style={{fontSize:'20px',color:'black'}}> <b>what would you like to Donate:<br/>1.TextBooks<br/>2.Stationery supplies<br/>3. Eduactional Toys and Games<br/>4.Library Books<br/></b></label> 
                        <br/>
                        <input type='text' placeholder='Enter the option' id='Ecategry' onChange={e=>{setdonate(e.target.value)}}/>
                    <div class="EDselect">
                    <label for="place"> Place</label>
                        <input type='text' id="place" placeholder='Enter your place' onChange={e=>{setplace(e.target.value)}}></input>
                    </div>
                        <div class='EDaddress'>
                            <label for="address" style={{color:'black'}}>Address:</label>
                            <input type="text" id="address" name="address" onChange={e=>{setaddress(e.target.value)}}/><br/>
                        </div>
                    </div>
                    <button id='EDsubmit' type='submit'onClick={handleCick}>Submit</button>
                </form>
            </div>
        </main>
    );
};
export default Education1;