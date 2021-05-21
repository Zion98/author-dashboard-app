import React from 'react'
import '../styles/form.css';
const Signin = () => {
    return (
        <div class="signin-form">
        <p class="logo">Logo</p>
        <h2 class="sign-in-title">Sign in</h2>
        <p class="proceed">Please enter your credentials to proceed</p>
        <form action="" class="forms">
          <label for="email">
            <p class="address">EMAIL ADDRESS</p>
            <input type="email" name="email" autocomplete="email" />
          </label>
          <label for="password">
            <div class="password-title">
              <p class="password">PASSWORD</p>
              <p class="forgot">Forgot password?</p>
            </div>
            <input type="password" name="password" />
          </label>
  
          <button type="submit">Sign in</button>
          <p class="have-account">Don't have an account? <span>Sign up</span></p>
        </form>
      </div>
    )
}

export default Signin
