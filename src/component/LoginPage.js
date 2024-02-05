import {useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [errorMsg, setErrorMsg] = useState(" ");
  const navigate = useNavigate();

  const onLogin= async( event )=>{
    event.preventDefault();

    const email = event.target.username.value;
    const password = event.target.password.value;
    
   try {
      const response = await fetch('http://localhost:4000/login',{
        method : "POST",
        headers: { "Content-Type": "application/json" },
        body : JSON.stringify({ email, password }),
      })

      if (response.ok) {
        const responseData = await response.json();
        console.log('Response:', responseData);
        navigate('/home');
      } else {
        console.log('Error:', response.statusText);
        const errorData = await response.json();
        setErrorMsg(errorData.message)
      }
   } catch(error){
    console.error('Fetch error:', error);

   }

  }

  
  return (
      <div className="login_form_container">
        <h2>Login</h2>
        <form onSubmit={onLogin}>
          <div className="main_container">
            <label htmlFor="email">Email</label>
            <input type="text" id="username" name="username" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
        {errorMsg && (<div style={{color:'red'}}>{errorMsg}</div>)}
      </div>
   
  );
}
