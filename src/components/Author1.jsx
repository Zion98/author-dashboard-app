import React from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import "../styles/authors.css";
import styled from "styled-components";
import { DashboardWrapper, Content } from "./styled/index";


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
          <p>
            <i className="fas fa-search"></i>
          </p>
          <input
            type="search"
            className=""
            name=""
            placeholder="Search for posts"
          />
        </div>
        <div className="projects">
          <button>
            Select Filter{" "}
            <span className="filter">
              <i class="fas fa-chevron-down"></i>
            </span>
          </button>
          <ul>
            <li>
              <a href="/">Date Posted</a>
            </li>
            <li>
              <a href="/">No. of View</a>
            </li>
            <li>
              <a href="/">No. of Shares</a>
            </li>
          </ul>
        </div>
      </div>

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
      <Pagination />
    </SingleAuthor>
  );
};


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

  .content-table th,
  .content-table td {
    padding: 12px 5px;
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
    display: flex;
    align-items: center;
    background-color: #fff;
    color: #a0bce4;
    height: 35px;
    width: 40%;
    border: 1px solid rgba(76, 141, 235, 0.186481);
  }
  .author-header-input span {
    padding: 5px;
  }
  .author-header-input input {
    height: 32px;
    width: 100%;
    border: none;
  }

  input::placeholder {
    color: #a0bce4;
    font-size: 14px;
  }
  .projects {
    position: relative;
  }

  .projects button {
    color: rgba(38, 35, 50, 0.585856);
    background-color: #fff;
    padding: 5px 34px;
    border: none;
  }

  .projects ul {
    margin-top: 0px;
    position: absolute;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background: white;
    left: 0px;
    list-style: none;
    border-radius: 5px;
    opacity: 0;
    pointer-events: none;
    transform: translateY(-10px);
    transition: all 0.4s ease;
  }

  .projects li {
    width: 100%;
    height: 100%;
    border: 1px solid #dde9fb;
    padding: 10px 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    line-height: 22px;
    color: #405169;
  }

  .projects li:hover {
    background-color: rgb(197, 173, 181);
  }

  .projects a {
    color: black;
    text-decoration: none;
  }

  .projects button:focus + ul {
    opacity: 1;
    pointer-events: all;
    transform: translateY(0px);
  }

  .filter {
    padding-left: 12px;
  }

  .single td {
    font-size: 12px;
    padding: 8px 10px;
  }

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    .author-header-input input {
      max-width: 100%;
    }
  }
`;

export default Author1;
