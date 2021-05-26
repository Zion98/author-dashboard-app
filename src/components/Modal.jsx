import React from "react";
import ReactDom from "react-dom";
import styled from "styled-components";
import author from "../assets/author.svg";
import { CenterPosition } from "./styled/index";

const OVERLAY = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1000;
  backdrop-filter: blur(2px);
`;

const ModalBox = styled.div`
  ${CenterPosition}

  min-width: 42%;
  position: fixed;
  background: #fff;
  z-index: 4000;
  opacity: 1;

  .modal-title {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(76, 141, 235, 0.10077);
    padding: 12px 0;
    padding-bottom: 24px;
  }
  form {
    padding: 12px 5px;
    font-size: 12px;
  }

  .single-author-img {
    margin: 24px 0;
  }

  .address,
  .password {
    font-weight: 500;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 1.125px;
    text-transform: uppercase;
    color: #181426;
    margin: 10px 0;
  }

  input,
  button {
    width: 100%;
    height: 45px;
    outline: none;
    background: rgba(76, 141, 235, 0.10077);
    border: 1px solid rgba(76, 141, 235, 0.10077);
    border-radius: 5px;
    margin-bottom: 30px;
  }

  ::placeholder {
    color: #a0bce4;
    padding-left: 12px;
    font-size: 16px;
    color: #181426;
    mix-blend-mode: normal;
    opacity: 0.5;
  }

  button {
    font-size: 15px;
    color: #fff;
    background: #4c60eb;
  }
`;

const Modal = ({ close }) => {
  return ReactDom.createPortal(
    <>
      <OVERLAY>
        <ModalBox>
          <div class="modal-title">
            <h3>Add Title</h3>
            <p onClick={() => close()}>
              <i class="fas fa-times"></i>
            </p>
          </div>
          <div class="single-author-img">
            <img src={author} alt="author" />
          </div>
          <form action="" class="forms">
            <label for="name">
              <p class="address">Full Name</p>
              <input type="text" name="name" placeholder="Full Name" />
            </label>
            <label for="email">
              <p class="address">EMAIL ADDRESS</p>
              <input
                type="email"
                name="email"
                autocomplete="email"
                placeholder="Email Address"
              />
            </label>
            <label for="number">
              <p class="address">Phone Number</p>
              <input type="number" name="number" placeholder="Phone Number" />
            </label>

            <button type="submit">Add Author</button>
          </form>
        </ModalBox>
      </OVERLAY>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
