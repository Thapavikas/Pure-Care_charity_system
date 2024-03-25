import React from 'react';
import axios, { Axios } from 'axios'
import { useState } from 'react';
import '../pages/SocialWelfare1.css'
import Swal from 'sweetalert2'

const SocialWelfare1= () => {

    const [name,setName] = useState("")
    const [email,setemail] = useState("")
    const [phone,setphone] = useState("")
    const [donate,setdonate] = useState("")
    const [place,setplace] = useState("")
    const [address,setaddress] = useState("")

    const handleSelfWelfare=(event)=>{
        event.preventDefault()
        axios.post('http://localhost:3001/SocialWelfare1',[name,email,phone,donate,place,address])
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }

    const handleCick = () =>{
        Swal.fire({
            title: "Thank you!",
            text: "Your Details has been Successfully Submited Thank you  !",
            icon: "success"
          });
    }
    return(
        <main>
            <div class='SWform'>
                <form class='Sform' onSubmit={handleSelfWelfare}>
                    <p class="Slogo"><b>SocialWelfare</b></p>
                    <div class="SWname">
                        <label for="name" style={{color:'black'}}> User Full Name</label>
                        <input type="text" id="name" name="name" placeholder='User Full Name' onChange={e=>{setName(e.target.value)}}/>
                    </div>
                    <div class='SWemail'>
                        <label for="email" style={{color:'black'}}>Email:</label>
                        <input type="email" id="email" name="email" placeholder='User Email'onChange={e=>{setemail(e.target.value)}}/>
                    </div>
                    <div class='SWphone'>
                        <label for="phoneno" style={{color:'black'}}>PhoneNo:</label>
                        <input type="text" id="phoneno" name="phoneno" placeholder='User Phone' onChange={e=>{setphone(e.target.value)}}/>
                    </div>
                    <div class="checkbox1">
                        <label for="Scategry" style={{fontSize:'20px',color:'black'}}> <b>What would you like to donate</b></label> 
                        <br/>
                        <input type='text' placeholder='Enter your skill' id='Scategry' onChange={e=>{setdonate(e.target.value)}}/>
                    <div class="VDselect">
                    <label for="place"> Place</label>
                        <input type='text' id="place" placeholder='Enter your place' onChange={e=>{setplace(e.target.value)}}></input>
                    </div>
                        <div class='SWaddress'>
                            <label for="address" style={{color:'black'}}>Address:</label>
                            <input type="text" id="address" name="address" onChange={e=>{setaddress(e.target.value)}}/><br/>
                        </div>
                    </div>
                    <button id='SWsubmit' type='submit'onClick={handleCick}>Submit</button>
                </form>
            </div>
        </main>
    );
};
export default SocialWelfare1 ;