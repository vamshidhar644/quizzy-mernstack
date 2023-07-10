import React, { useState } from 'react'
import '../styles/Signup.css'

const Signup = () => {
  const [login, setLogin] = useState(false)
       
    const handleLogin = () =>{
      setLogin(true)
    }
    const handleSignup = () =>{
     setLogin(false)
    }
        
  return (
    <section class={`wrapper ${login ? 'active': ''}`}>
      <div class="form signup">
        <header onClick={handleSignup}>Signup</header>
        <form action="#">
          <input type="text" placeholder="Full name" required />
          <input type="text" placeholder="Email address" required />
          <input type="password" placeholder="Password" required />
          <div class="checkbox">
           
          </div>
          <input type="submit" value="Signup" />
        </form>
      </div>

      <div class="form login">
        <header onClick={handleLogin}>Login</header>
        <form action="#">
          <input type="text" placeholder="Email address" required />
          <input type="password" placeholder="Password" required />
          <a href="#">Forgot password?</a>
          <input type="submit" value="Login"/>
        </form>
      </div>
    </section>
    
  )
}

export default Signup
