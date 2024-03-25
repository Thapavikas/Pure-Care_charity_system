import React from 'react';
import axios, { Axios } from 'axios'
import { useState } from 'react';
import '../pages/volunteer1.css'
import Swal from 'sweetalert2'

const Volunteer1= () => {

    const [name,setName] = useState("")
    const [email,setemail] = useState("")
    const [phone,setphone] = useState("")
    const [skill,setskills] = useState("")
    const [place,setplace] = useState("")
    const [address,setaddress] = useState("")

    const handleVolunteer=(event)=>{
        event.preventDefault()
        axios.post('http://localhost:3001/volunteer1',[name,email,phone,skill,place,address])
        .catch(err=>console.log(err))
    }
    const handleCick = () =>{
        Swal.fire({
            title: "Thank you for joining ",
            text: "Join us in creating a ripple of change as a volunteer, where every act of kindness contributes to a wave of positive transformation in our community.",
            imageUrl: "https://unsplash.it/400/200",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image"
          });
    }
    return(
        <main>
            <div class='Vform1'>
                <form class='VDform1' onSubmit={handleVolunteer}>
                    <p class="Vlogo1"><b>Volunteer</b></p>
                    <div class="EDname">
                    <label for="name"style={{color:'black'}}> User Full Name</label>
                    <input type="text" id="name" name="name" placeholder='User Full Name' onChange={e=>{setName(e.target.value)}}/>
                    </div>
                    <div class='VDemail1'>
                        <label for="email"style={{color:'black'}}>Email:</label>
                        <input type="email" id="email" name="email" placeholder='User Email'onChange={e=>{setemail(e.target.value)}}/>
                    </div>
                    <div class='VDphone1'>
                        <label for="phoneno"style={{color:'black'}}>PhoneNo:</label>
                        <input type="text" id="phoneno" name="phoneno" placeholder='User Phone' onChange={e=>{setphone(e.target.value)}}/>
                    </div>
                    <div class="checkbox">
                        <label for="Vcategry1" style={{fontSize:'20px',color:'black'}}> <b>Please enter your skills eg:teaching</b></label> 
                        <br/>
                        <input type='text' placeholder='Enter your skill' id='Vcategry1' onChange={e=>{setskills(e.target.value)}}/>
                    <div class='Vtime'>
                    {/* <label class='Vparty' for="party">Enter a date and time for you Volunteering</label>
                        <input
                        id="party"
                        type="datetime-local"
                        name="partydate"
                        value="2017-06-01T08:30 " /> */}
                    </div>
                    <div class="VDselect1">
                        <label for="place"> Place</label>
                        <input type='text' id="place" placeholder='Enter your place' onChange={e=>{setplace(e.target.value)}}></input>
                    </div>
                        <div class='VDaddress1'>
                            <label for="address" style={{color:'black'}}>Address:</label>
                            <input type="text" id="address" name="address" onChange={e=>{setaddress(e.target.value)}}/><br/>
                        </div>
                    </div>
                    <button id='VDsubmit1' type='submit'onClick={handleCick}>Submit</button>
                </form>
            </div>
        </main>
    );
};
export default Volunteer1 ;