import React from "react";
import "../styles/authors.css";
const Author1 = () => {
  return (
    <div className="author-content">
      <p className="back">
        <span><i class="fas fa-arrow-left"></i></span>Go back
      </p>
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
            placeholder="Search for Author"
          />
        </div>
        <div>
        <span>Filter By:</span>
        <select>
          <option value="0">Select Filter:</option>
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
              <p>I LEND MY VOICE: #EndSARS, #EndPoliceIntimidation<br/>#EndPoliceBrutality</p>
            </td>
            <td>October 17,2020</td>
            <td>120 Views</td>
            <td>20 Shares</td>
          </tr>
          <tr>
            <td>2</td>
            <td class="author-name">
              <p class="author-img">{/* <img src={picture} alt="" /> */}</p>
              <p>I LEND MY VOICE: #EndSARS, #EndPoliceIntimidation<br/>#EndPoliceBrutality</p>
            </td>
            <td>October 17,2020</td>
            <td>120 Views</td>
            <td>20 Shares</td>
          </tr>
          <tr>
            <td>3</td>
            <td class="author-name">
              <p class="author-img">{/* <img src={picture1} alt="" /> */}</p>
              <p>I LEND MY VOICE: #EndSARS, #EndPoliceIntimidation<br/>#EndPoliceBrutality</p>
            </td>
            <td>October 17,2020</td>
            <td>120 Views</td>
            <td>20 Shares</td>
          </tr>
          <tr>
            <td>4</td>
            <td class="author-name">
              <p class="author-img">{/* <img src={picture2} alt="" /> */}</p>
              <p>I LEND MY VOICE: #EndSARS, #EndPoliceIntimidation<br/>#EndPoliceBrutality</p>
            </td>
            <td>October 17,2020</td>
            <td>120 Views</td>
            <td>20 Shares</td>
          </tr>
          <tr>
            <td>5</td>
            <td class="author-name">
              <p class="author-img">{/* <img src={picture3} alt="" /> */}</p>
              <p>I LEND MY VOICE: #EndSARS, #EndPoliceIntimidation<br/>#EndPoliceBrutality</p>
            </td>
            <td>October 17,2020</td>
            <td>120 Views</td>
            <td>20 Shares</td>
          </tr>
          <tr>
            <td>6</td>
            <td class="author-name">
              <p class="author-img">{/* <img src={picture3} alt="" /> */}</p>
              <p>I LEND MY VOICE: #EndSARS, #EndPoliceIntimidation<br/>#EndPoliceBrutality</p>
            </td>
            <td>October 17,2020</td>
            <td>120 Views</td>
            <td>20 Shares</td>
          </tr>
          <tr>
            <td>7</td>
            <td class="author-name">
              <p class="author-img">{/* <img src={picture3} alt="" /> */}</p>
              <p>I LEND MY VOICE: #EndSARS, #EndPoliceIntimidation<br/>#EndPoliceBrutality</p>
            </td>
            <td>October 17,2020</td>
            <td>120 Views</td>
            <td>20 Shares</td>
          </tr>
          <tr>
            <td>8</td>
            <td class="author-name">
              <p class="author-img">{/* <img src={picture3} alt="" /> */}</p>
              <p>I LEND MY VOICE: #EndSARS, #EndPoliceIntimidation<br/>#EndPoliceBrutality</p>
            </td>
            <td>October 17,2020</td>
            <td>120 Views</td>
            <td>20 Shares</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Author1;
