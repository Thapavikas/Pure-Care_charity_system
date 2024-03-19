import {useState} from 'react'
import axios from 'axios'
import './Register.css'
import {Link,useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2'

export default function Register(){

    const[username,setUsername]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const navigate = useNavigate()

    const handleSubmit = (event) =>{
        event.preventDefault();
        axios.post('http://localhost:3001/register',[username,email,password])
        .then(res=>navigate('/login'))
        .catch(err=>console.log(err))
    }
    const handleCick = () => {
        Swal.fire({
            position: "middle",
            icon: "success",
            title: "Your have Successfully Registered",
            showConfirmButton: false,
            timer: 1500
          });
    }

    return(
        <div className='register'>
                <form className="Rform-box"  onSubmit={handleSubmit}>
                    <p className="Rpage1">Sign up</p>
                    <div className="Rinput-container">
                        <label for='name'>Username </label>
                        <input id='name' type="text" placeholder='Username' name='username'  onChange={e=>setUsername(e.target.value)} required/>
                    </div>
                    <div className="Rinput-container">
                        <label for='email'>User Email ID</label>
                        <input id='email' type="email" placeholder='Email' name='email'  onChange={e=>setEmail(e.target.value)} required/>
                    </div>
                    <div className="Rinput-container">
                        <label for ="password">Password</label>
                    <input id='password' type="password" placeholder='Password' name='password'  onChange={e=>setPassword(e.target.value)} required/>
                    </div>
                    <br />
                    <button type='submit' onClick={handleCick} >Register</button>
                    <br />
                    <p className='Rpage2'> <Link to={'/login'}>Already have an account?</Link> </p>
                    
                </form>
        
        
        </div>
    )
}