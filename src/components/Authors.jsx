import React from 'react'
import '../styles/authors.css';
import picture from '../assets/Rectangle 11.svg'
import picture1 from '../assets/Rectangle 12.svg'
import picture2 from '../assets/Rectangle 13.svg'
import picture3 from '../assets/Rectangle 14.svg'
const Authors = () => {
    return (
        <div class="author-content">
        <div class="title-author"><p>Author</p><p><button class="add-author">Add Author</button></p></div>
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
      </div>
    )
}

export default Authors
