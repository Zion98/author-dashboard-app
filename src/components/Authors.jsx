import React from "react";
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

  /* .content-table {
    border-collapse: collapse;
    font-size: 16px;
    border-radius: 5px 5px 0 0;
    overflow: hidden;
    width: 100%;
    color: #405169;
    background-color: #fff;
  }

  .content-table thead tr {
    background-color: #dde9fb;
    color: #ffffff;
    text-align: left;
    font-weight: 500;
    color: var(--dark);
  }

  .content-table th,
  .content-table td {
    padding: 12px 15px;
  } */

  /* .content-table td:not(:first-child){
    padding: 5px;
    text-align: left;
    border-bottom: 1px solid #dde9fb;
  } */

  /* .content-table td {
    padding: 10px 10px;
  }

  .content-table tbody tr {
    border: 1px solid #dde9fb;
    border-left: none;
    border-bottom: none;
  }

  .content-table tr:hover {
    background-color: #f5f5f5;
    cursor: pointer;
  } */

  .author-name {
    display: flex;
    align-items: center;
  }

  .author-img {
    padding-right: 12px;
  }
`;

const Authors = () => {
  return (
    <AuthorWrapper>
      <div class="title-author">
        <p>Author</p>
        <p>
          <button class="add-author">Add Author</button>
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
          <tr>
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
            <td>3.k Reach</td>
          </tr>
          <tr>
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
            <td>3.k Reach</td>
          </tr>
          <tr>
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
            <td>3.k Reach</td>
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
            <td>3.k Reach</td>
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
            <td>3.k Reach</td>
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
            <td>3.k Reach</td>
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
            <td>3.k Reach</td>
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
            <td>3.k Reach</td>
          </tr>
        </tbody>
      </table>
      {/* </div> */}
    </AuthorWrapper>
  );
};

export default Authors;
