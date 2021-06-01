import React from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import "../styles/authors.css";
import styled from "styled-components";
import { DashboardWrapper, Content } from "./styled/index";
import Select from "react-select";

const options = [
  { value: "date", label: "Date Posted" },
  { value: "views", label: "No. of Views" },
  { value: "shares", label: "No. of Shares" },
];

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    width: state.selectProps.width,
    borderBottom: "1px solid #DDE9FB",
    color: state.selectProps.menuColor,
    paddingTop: 14,
    paddingBottom: 14,
    hover: "#DDE9FB",
  }),

  menuList: (provided, state) => ({
    paddingTop: 0,
    paddingBottom: 0,
    background: "#fff",
    hover: "#DDE9FB",
  }),

  control: (base, state) => ({
    ...base,
    border: state.isFocused ? 0 : 0,
    boxShadow: state.isFocused ? 0 : 0,
    "&:hover": {
      border: state.isFocused ? 0 : 0,
    },
  }),
};

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
          <Select
            options={options}
            styles={customStyles}
            isSearchable={false}
            className="select-field"
            placeholder={<div>Select filter</div>}
          />
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
    display: inline-block;

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
    margin: 5px;
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
  .author-header-input p {
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

  .select-field {
    width: 10rem;
    font-size: 0.8rem;
  }

  .css-1okebmr-indicatorSeparator {
    display: none;
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
