import React from "react";
import { Link } from "react-router-dom";
import { Form } from "./styled/index";
import "../styles/form.css";
const Signin = () => {
  return (
    <Form>
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

        <Link to="/nav/dashboard">
          <button type="submit">Sign in</button>
        </Link>
        <Link to="/signup">
          <p class="have-account">
            Don't have an account? <span>Sign up</span>
          </p>
        </Link>
      </form>
    </Form>
  );
};

export default Signin;
