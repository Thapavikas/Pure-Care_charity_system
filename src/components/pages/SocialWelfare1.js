import React from 'react';
import axios, { Axios } from 'axios'
import { useState } from 'react';
import '../pages/SocialWelfare1.css'

const SocialWelfare1=()=> {

    const [name,setName] = useState("")
    const [email,setemail] = useState("")
    const [phone,setphone] = useState("")
    const [donate,setdonate] = useState("")
    const [place,setplace] = useState("")
    const [address,setaddress] = useState("")

    const handleSelfWelfare=(event)=>{
        event.preventDefault()
        axios.post('http://localhost:3001/volunteer1',[name,email,phone,donate,place,address])
        .catch(err=>console.log(err))
    }
    return(
        <main>
            <div class='Vform'>
                <form class='VDform' onSubmit={handleSelfWelfare}>
                    <p class="Vlogo"><b>SocialWelfare</b></p>
                    <div class="EDname">
                    <label for="name" style={{color:'black'}}> User Full Name</label>
                    <input type="text" id="name" name="name" placeholder='User Full Name' onChange={e=>{setName(e.target.value)}}/>
                    </div>
                    <div class='VDemail'>
                        <label for="email" style={{color:'black'}}>Email:</label>
                        <input type="email" id="email" name="email" placeholder='User Email'onChange={e=>{setemail(e.target.value)}}/>
                    </div>
                    <div class='VDphone'>
                        <label for="phoneno" style={{color:'black'}}>PhoneNo:</label>
                        <input type="text" id="phoneno" name="phoneno" placeholder='User Phone' onChange={e=>{setphone(e.target.value)}}/>
                    </div>
                    <div class="checkbox">
                        <label for="Vcategry" style={{fontSize:'20px',color:'black'}}> <b>What would you like to donate</b></label> 
                        <br/>
                        <input type='text' placeholder='Enter your skill' id='Vcategry' onChange={e=>{setdonate(e.target.value)}}/>
                    <div class="VDselect">
                        <label for="location"></label>
                        <label for="district" style={{color:'black'}}>Place:</label>
                        <select id="district" name="district" onChange={e=>{setplace(e.target.value)}} >
                            <option value="none">None</option>
                            <option value="MG Road">MG Road</option>
                            <option value="Tin factory">Tin factory</option>
                            <option value="K R puram">K R puram</option>
                        </select> 
                    </div>
                        <div class='VDaddress'>
                            <label for="address" style={{color:'black'}}>Address:</label>
                            <input type="text" id="address" name="address" onChange={e=>{setaddress(e.target.value)}}/><br/>
                        </div>
                    </div>
                    <button id='VDsubmit' type='submit'>Submit</button>
                </form>
            </div>
        </main>
    );
};
export default SocialWelfare1 ;