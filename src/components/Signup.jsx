import React from "react";
import { Form } from "./styled/index";
const Signup = () => {
  return (
    <Form>
      <p class="logo">Logo</p>
      <h2 class="sign-in-title">Sign up</h2>
      <p class="proceed">Please enter your credentials to proceed</p>
      <form action="" class="forms">
        <label for="email">
          <p class="address mail">EMAIL ADDRESS</p>
          <input type="email" name="email" autocomplete="email" />
        </label>
        <label for="password">
          <div class="password-title">
            <p class="password">PASSWORD</p>
          </div>
          <input type="password" name="password" />
        </label>

        <button type="submit">Sign Up</button>
      </form>
    </Form>
  );
};

export default Signup;
