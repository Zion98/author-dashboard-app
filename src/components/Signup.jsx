import React from "react";
import { Form } from "./styled/index";
const Signup = () => {
  return (
    <Form>
      <p class="logo">Logo</p>
      <h2 class="sign-in-title">Sign up</h2>
      <p class="proceed">Please enter your credentials to proceed</p>
      <form action="" class="forms">
        <p class="address mail">EMAIL ADDRESS</p>
        <input type="email" name="email" autocomplete="email" />
        <div class="password-title">
          <p class="password">PASSWORD</p>
        </div>
        <input type="password" name="password" />

        <button type="submit">Sign Up</button>
      </form>
    </Form>
  );
};

export default Signup;
