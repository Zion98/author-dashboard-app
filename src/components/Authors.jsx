import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Modal from "./Modal";
import Pagination from "./Pagination";
import "../styles/authors.css";
import styled from "styled-components";
import { DashboardWrapper, Content } from "./styled/index";
import picture from "../assets/Rectangle 11.svg";
import picture1 from "../assets/Rectangle 12.svg";
import picture2 from "../assets/Rectangle 13.svg";
import picture3 from "../assets/Rectangle 14.svg";

// const Content
const AuthorWrapper = styled(DashboardWrapper)`
  ${Content}

  .title-author {
    display: flex;
    justify-content: space-between;
    margin: 15px 0;
  }

  .title-author p:first-child {
    font-size: 28px;
    font-weight: bold;
    color: #405169;
  }

  .add-author {
    background: #4c60eb;
    color: #ffffff;
    border-radius: 4px;
    padding: 12px 36px;
    border: none;
  }

  .author-name {
    display: flex;
    align-items: center;
  }

  .author-img {
    padding-right: 12px;
  }
`;

const Authors = () => {
  //Modal Toggle
  const [modalInOpen, setModalIsOpen] = useState(false);
  const modalToggle = () => {
    setModalIsOpen(true);
  };

  const close = () => {
    setModalIsOpen(false);
  };

  //Clickable rows
  const history = useHistory();
  const handleRowClick = (row) => {
    history.push(`/nav/author1/${row}`);
  };

  return (
    <>
      <AuthorWrapper>
        <div class="title-author">
          <p>Author</p>
          <p>
            <button class="add-author" onClick={() => modalToggle()}>
              Add Author
            </button>
          </p>
        </div>
        <table class="content-table">
          <thead>
            <tr>
              <th></th>
              <th>Author's Details</th>
              <th>Email Address</th>
              <th>Phone Number</th>
              <th>No. of Posts</th>
              <th>Total Reach</th>
            </tr>
          </thead>
          <tbody>
            <tr onClick={() => handleRowClick("jenny")}>
              <td>1</td>
              <td class="author-name">
                <p class="author-img">
                  <img src={picture} alt="" />
                </p>
                <p>Jenny Wilson</p>
              </td>
              <td>debra.holt@gmail.com</td>
              <td>070893935083</td>
              <td>120 Posts</td>
              <td>3.4k Reach</td>
            </tr>

            <tr onClick={() => handleRowClick("jenny")}>
              <td>2</td>
              <td class="author-name">
                <p class="author-img">
                  <img src={picture} alt="" />
                </p>
                <p>Jenny Wilson</p>
              </td>
              <td>debra.holt@gmail.com</td>
              <td>070893935083</td>
              <td>120 Posts</td>
              <td>3.4k Reach</td>
            </tr>
            <tr onClick={() => handleRowClick("jenny")}>
              <td>3</td>
              <td class="author-name">
                <p class="author-img">
                  <img src={picture1} alt="" />
                </p>
                <p>Jenny Wilson</p>
              </td>

              <td>debra.holt@gmail.com</td>
              <td>070893935083</td>
              <td>120 Posts</td>
              <td>3.4k Reach</td>
            </tr>
            <tr>
              <td>4</td>
              <td class="author-name">
                <p class="author-img">
                  <img src={picture2} alt="" />
                </p>
                <p>Jenny Wilson</p>
              </td>

              <td>debra.holt@gmail.com</td>
              <td>070893935083</td>
              <td>120 Posts</td>
              <td>3.4k Reach</td>
            </tr>
            <tr>
              <td>5</td>
              <td class="author-name">
                <p class="author-img">
                  <img src={picture3} alt="" />
                </p>
                <p>Jenny Wilson</p>
              </td>

              <td>debra.holt@gmail.com</td>
              <td>070893935083</td>
              <td>120 Posts</td>
              <td>3.4k Reach</td>
            </tr>
            <tr>
              <td>6</td>
              <td class="author-name">
                <p class="author-img">
                  <img src={picture3} alt="" />
                </p>
                <p>Jenny Wilson</p>
              </td>

              <td>debra.holt@gmail.com</td>
              <td>070893935083</td>
              <td>120 Posts</td>
              <td>3.4k Reach</td>
            </tr>
            <tr>
              <td>7</td>
              <td class="author-name">
                <p class="author-img">
                  <img src={picture3} alt="" />
                </p>
                <p>Jenny Wilson</p>
              </td>

              <td>debra.holt@gmail.com</td>
              <td>070893935083</td>
              <td>120 Posts</td>
              <td>3.4k Reach</td>
            </tr>
            <tr>
              <td>8</td>
              <td class="author-name">
                <p class="author-img">
                  <img src={picture3} alt="" />
                </p>
                <p>Jenny Wilson</p>
              </td>
              <td>debra.holt@gmail.com</td>
              <td>070893935083</td>
              <td>120 Posts</td>
              <td>3.4k Reach</td>
            </tr>
          </tbody>
        </table>
        <Pagination />
      </AuthorWrapper>

      {modalInOpen && <Modal close={close} />}
    </>
  );
};

export default Authors;
