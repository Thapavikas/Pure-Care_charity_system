import React from 'react';
import '../pages/FoodBank1.css'
import axios, { Axios } from 'axios'
import { useState } from 'react';
import Swal from 'sweetalert2'


const FoodBank1 = () => {
    const [name,setName] = useState("")
    const [email,setemail] = useState("")
    const [phone,setphone] = useState("")
    const [type,settype] = useState("")
    const [quantity,setQuantity] = useState("")
    const [place,setplace] = useState("")
    const [address,setaddress] = useState("")
   

    const handleFoodBank=(event)=>{
        event.preventDefault()
        axios.post('http://localhost:3001/FoodBank1',[name,email,phone,type,quantity,place,address])
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
        <div class='Fform'>
        <form class='FDform' onSubmit={handleFoodBank}>
            <p class="Flogo">Food <b>Donation</b></p>
            <div class="FDname">
            <label for="name" style={{color:'black'}}> User Full Name</label>
            <input type="text" id="name" name="name" placeholder='User Full Name' onChange={e=>{setName(e.target.value)}}/>
            </div>
            <div class='FDemail'>
                <label for="email" style={{color:'black'}}>Email:</label>
                <input type="email" id="email" name="email" placeholder='User Email'onChange={e=>{setemail(e.target.value)}}/>
            </div>
            <div class='FDphone'>
                <label for="phoneno" style={{color:'black'}}>PhoneNo:</label>
                <input type="text" id="phoneno" name="phoneno" placeholder='User Phone' onChange={e=>{setphone(e.target.value)}}/>
            </div>
            <div class="checkbox">
                <label for="Fcategry" style={{fontSize:'20px',color:'black'}}> <b>Meal type:<br/>Veg<br/>Non-Veg</b></label> 
                <br/>
                <input type='text' placeholder='Enter the option' id='Fcategry' onChange={e=>{settype(e.target.value)}}/>
            <div class='Fquantity'>
                <label for='Quantity' style={{fontSize:'20px'}}/> Quantity:(Person)
                <input type='number' min='0' placeholder='Enter the quantity' id='Quantity' onChange={e=>{setQuantity(e.target.value)}}/>
            </div>
            <div class="FDselect">
            <label for="place"> Place</label>
                        <input type='text' id="place" placeholder='Enter your place' onChange={e=>{setplace(e.target.value)}}></input>
            </div>
                <div class='FDaddress'>
                    <label for="address" style={{color:'black'}}>Address:</label>
                    <input type="text" id="address" name="address" onChange={e=>{setaddress(e.target.value)}}/><br/>
                </div>
            </div>
            <button id='FDsubmit' type='submit'onClick={handleCick}>Submit</button>
        </form>
    </div>
    );
};
export default FoodBank1;