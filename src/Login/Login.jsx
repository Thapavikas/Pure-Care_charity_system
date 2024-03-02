import {useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom';
import './Login.css'
import Swal from 'sweetalert2';


export default function Login(){

    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')

    const handleSubmit = (event) =>{
        event.preventDefault();
        axios.post('http://localhost:3001/login',[email,password])
        .then(res=>console.log('Sucessfull'))
        .catch(err=>console.log(err))
    }

    const handleCick = () => {
        Swal.fire({
            position: "middle",
            icon: "success",
            title: "Your have Succesfully Loged in ",
            showConfirmButton: false,
            timer: 1500
          });
    }

    return(
        <div className='Login_page'>
                <form className="login-box"  onSubmit={handleSubmit}>
                    <p className="page1">Sign in</p>
                    <div className="login-container">
                        <label for='email'>User Email ID</label>
                        <input id='email' type="email" placeholder='Email' name='email' onChange={e=>setEmail(e.target.value)}/>
                    </div>
                    <div className="login-container">
                        <label for="password">Password</label>
                        <input id='password' type="password" placeholder='Password' name='password' onChange={e=>setPassword(e.target.value)}/>
                    </div>
                    <br />
                    <button type='submit' onClick={handleCick}>Login</button>
                    <br />
                    <p className='page3'>Don't have an account? <Link to={'/register'}>Sign up</Link> </p>
                    
                </form>
        
        </div>
    )
}