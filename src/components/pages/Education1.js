import React from 'react';
import axios, { Axios } from 'axios';
import { useState } from 'react';
import '../pages/Education1.css'


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
                        <label for="Ecategry" style={{fontSize:'20px',color:'black'}}> <b>what would you like to Donate:<br/>TextBooks<br/>Stationery supplies<br/> Eduactional Toys and Games<br/>Library Books<br/></b></label> 
                        <br/>
                        <input type='text' placeholder='Enter the option' id='Ecategry' onChange={e=>{setdonate(e.target.value)}}/>
                    <div class="EDselect">
                        <label for="location"></label>
                        <label for="district" style={{color:'black'}}>Place:</label>
                        <select id="district" name="district" onChange={e=>{setplace(e.target.value)}} >
                            <option value="none">None</option>
                            <option value="MG Road">MG Road</option>
                            <option value="Tin factory">Tin factory</option>
                             <option value="K R puram">K R puram</option>
                        </select> 
                    </div>
                        <div class='EDaddress'>
                            <label for="address" style={{color:'black'}}>Address:</label>
                            <input type="text" id="address" name="address" onChange={e=>{setaddress(e.target.value)}}/><br/>
                        </div>
                    </div>
                    <button id='EDsubmit' type='submit'>Submit</button>
                </form>
            </div>
        </main>
    );
};
export default Education1;