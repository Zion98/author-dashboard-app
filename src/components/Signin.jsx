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
        <p class="address mail">EMAIL ADDRESS</p>
        <input type="email" name="email" autocomplete="email" />

        <div class="password-title">
          <p class="password">PASSWORD</p>
          <p class="forgot">Forgot password?</p>
        </div>
        <input type="password" name="password" />

        <Link to="/nav/dashboard">
          <button type="submit">Sign in</button>
        </Link>

        <p class="have-account">
          Don't have an account?{" "}
          <Link to="/signup">
            <span>Sign up</span>
          </Link>
        </p>
      </form>
    </Form>
  );
};

export default Signin;
