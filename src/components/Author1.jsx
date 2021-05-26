import React from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import "../styles/authors.css";
import styled from "styled-components";
import { DashboardWrapper, Content } from "./styled/index";

const SingleAuthor = styled(DashboardWrapper)`
  ${Content}
  a {
    text-decoration: none;
  }
  .back {
    font-weight: 500;
    font-size: 16px;
    color: #4c60eb;

    span {
      margin-right: 5px;
    }
  }

  .name-author,
  .name-posts {
    font-weight: bold;
    font-size: 22px;
    color: #405169;
  }

  .name-posts {
    font-weight: 500;
    font-size: 20px;
  }

  .back,
  .name-author,
  .name-posts {
    margin: 10px;
  }

  .author-header {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
  }

  .author-header-input {
    background-color: #fff;
    color: #a0bce4;
    height: 35px;
    width: 50%;
    border: 1px solid rgba(76, 141, 235, 0.186481);
  }
  .author-header-input span {
    padding: 5px;
  }
  .author-header-input input {
    height: 32px;
    width: 96%;
    border: none;
  }

  ::placeholder {
    color: #a0bce4;
    font-size: 14px;
  }

  .single td {
    padding: 8px 10px;
  }
`;

const Author1 = () => {
  return (
    <SingleAuthor>
      <Link to="/nav/dashboard">
        <p className="back">
          <span>
            <i class="fas fa-arrow-left"></i>
          </span>
          Go back
        </p>
      </Link>
      <h2 className="name-author">Jenny Wilson</h2>
      <p className="name-posts">Jenny Wilson's Post</p>
      <div className="author-header">
        <div className="author-header-input">
          <span>
            <i className="fas fa-search"></i>
          </span>
          <input
            type="search"
            className=""
            name=""
            placeholder="Search for posts"
          />
        </div>
        <div>
          <span>Filter By:</span>
          <select className="select">
            <option value="0">Select Filter</option>
            <option value="1">Date Posted</option>
            <option value="2">No. of View</option>
            <option value="3">No. of Shares</option>
          </select>
        </div>
      </div>
      {/* <div class="title-author">
        <p>Author</p>
        <p>
          <button class="add-author">Add Author</button>
        </p>
      </div> */}
      <table class="content-table single">
        <thead>
          <tr>
            <th></th>
            <th>Post Title</th>
            <th>Date Posted</th>
            <th>No. of View</th>
            <th>No. of Shares</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td class="author-name">
              <p class="author-img">{/* <img src={picture} alt="" /> */}</p>
              <p>
                I LEND MY VOICE: #EndSARS, #EndPoliceIntimidation
                <br />
                #EndPoliceBrutality
              </p>
            </td>
            <td>October 17,2020</td>
            <td>120 Views</td>
            <td>20 Shares</td>
          </tr>
          <tr>
            <td>2</td>
            <td class="author-name">
              <p class="author-img">{/* <img src={picture} alt="" /> */}</p>
              <p>
                I LEND MY VOICE: #EndSARS, #EndPoliceIntimidation
                <br />
                #EndPoliceBrutality
              </p>
            </td>
            <td>October 17,2020</td>
            <td>120 Views</td>
            <td>20 Shares</td>
          </tr>
          <tr>
            <td>3</td>
            <td class="author-name">
              <p class="author-img">{/* <img src={picture1} alt="" /> */}</p>
              <p>
                I LEND MY VOICE: #EndSARS, #EndPoliceIntimidation
                <br />
                #EndPoliceBrutality
              </p>
            </td>
            <td>October 17,2020</td>
            <td>120 Views</td>
            <td>20 Shares</td>
          </tr>
          <tr>
            <td>4</td>
            <td class="author-name">
              <p class="author-img">{/* <img src={picture2} alt="" /> */}</p>
              <p>
                I LEND MY VOICE: #EndSARS, #EndPoliceIntimidation
                <br />
                #EndPoliceBrutality
              </p>
            </td>
            <td>October 17,2020</td>
            <td>120 Views</td>
            <td>20 Shares</td>
          </tr>
          <tr>
            <td>5</td>
            <td class="author-name">
              <p class="author-img">{/* <img src={picture3} alt="" /> */}</p>
              <p>
                I LEND MY VOICE: #EndSARS, #EndPoliceIntimidation
                <br />
                #EndPoliceBrutality
              </p>
            </td>
            <td>October 17,2020</td>
            <td>120 Views</td>
            <td>20 Shares</td>
          </tr>
          <tr>
            <td>6</td>
            <td class="author-name">
              <p class="author-img">{/* <img src={picture3} alt="" /> */}</p>
              <p>
                I LEND MY VOICE: #EndSARS, #EndPoliceIntimidation
                <br />
                #EndPoliceBrutality
              </p>
            </td>
            <td>October 17,2020</td>
            <td>120 Views</td>
            <td>20 Shares</td>
          </tr>
          <tr>
            <td>7</td>
            <td class="author-name">
              <p class="author-img">{/* <img src={picture3} alt="" /> */}</p>
              <p>
                I LEND MY VOICE: #EndSARS, #EndPoliceIntimidation
                <br />
                #EndPoliceBrutality
              </p>
            </td>
            <td>October 17,2020</td>
            <td>120 Views</td>
            <td>20 Shares</td>
          </tr>
          <tr>
            <td>8</td>
            <td class="author-name">
              <p class="author-img">{/* <img src={picture3} alt="" /> */}</p>
              <p>
                I LEND MY VOICE: #EndSARS, #EndPoliceIntimidation
                <br />
                #EndPoliceBrutality
              </p>
            </td>
            <td>October 17,2020</td>
            <td>120 Views</td>
            <td>20 Shares</td>
          </tr>
        </tbody>
      </table>
      <Pagination/>
    </SingleAuthor>
  );
};

export default Author1;
