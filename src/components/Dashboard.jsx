import React from "react";
import styled from "styled-components";
import { DashboardWrapper } from "./styled/index";
import Bar from "./Chart";
import Doughnut from "./Chart2";
import picture from "../assets/Rectangle 11.svg";
import picture1 from "../assets/Rectangle 12.svg";
import picture2 from "../assets/Rectangle 13.svg";
import picture3 from "../assets/Rectangle 14.svg";

const column = "column";
const AllBox = styled.div`
  display: flex;
  color: #405169;
  font-size: 12px;

  .top-authors,
  .top-posts {
    margin: 5px 0;
    font-weight: 500;
    font-size: 20px;
  }
  .index {
    border-collapse: collapse;
    width: 100%;
  }

  /* .index tr td:not(:first-child),
  #table1 tr td:not(:first-child) {
    padding: 5px;
    text-align: left;
    border-bottom: 1px solid #dde9fb;
  } */

  #table1 tr td {
    padding: 5px 0;
    border-bottom: 1px solid #dde9fb;
  }

  .index tr {
    border-bottom: 1px solid #dde9fb;
  }

  .index tr td:not(:first-child) {
    border-bottom: none;
  }

  tr td:first-child {
    font-size: 12px;
  }
  .author-info {
    display: flex;
    align-items: center;
  }
  .author-img {
    padding-right: 10px;
  }

  tr:hover {
    background-color: #f5f5f5;
    cursor: pointer;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: ${column};
  }
`;

const MainBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media only screen and (max-width: 768px) {
    flex-direction: ${column};
  }
`;

const Box1 = styled.div`
  width: 50%;
  height: 300px;
  margin-right: 12px;
  padding: 14px;
  background: #ffffff;

  div {
    display: flex;
    justify-content: space-between;
    padding: 10px 22px;
    h3 {
      margin-left: 24px;
    }
  }

  @media only screen and (max-width: 768px) {
    width: 95%;
  }
`;

const Box2 = styled.div`
  margin-right: 12px;
  margin-bottom: 12px;
  width: 46%;
  height: 300px;
  background: #ffffff;
  padding: 24px;

  .chart2-title {
    font-weight: 500;
    font-size: 20px;
    text-align: center;
    margin-top: -140px;
  }
  .channel {
    display: flex;
    justify-content: space-between;
  }

  @media only screen and (max-width: 768px) {
    width: 95%;
    margin: 0;
  }
`;

const Box3 = styled.div`
  width: 35%;
  padding: 45px;

  margin-right: 12px;
  background: #ffffff;

  .box4 td {
    padding: 8px 0;
  }
  @media only screen and (max-width: 768px) {
    width: 95%;
    margin: 12px 0;
  }
`;

const Box4 = styled.div`
  padding: 45px 30px;
  width: 61%;
  background: #ffffff;

  .box3 tr td {
    padding: 5px 5px;
  }
  @media only screen and (max-width: 768px) {
    width: 95%;
  }
`;

const SideBox = styled.div`
  font-size: 16px;
  padding: 24px;
  width: 45%;
  font-size: 16px;
  background: #ffffff;

  #table1 {
    border-collapse: separate;
    width: 100%;
    border-spacing: 0px 15px;
  }

  #table1 tr td {
    padding: 5px 2px;
  }
  .author {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
  }

  .author p {
    color: #4c60eb;
    padding: 0 35px;
  }
  
  .posts,
  .email {
    font-size: 12px;
  }

  .email {
    color: rgba(64, 81, 105, 0.6);
    padding: 5px 0;
  }

  @media only screen and (max-width: 768px) {
    width: 95%;
    margin: 12px 0;
  }
`;

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <h2 className="title">DashBoard</h2>
      <AllBox>
        <MainBox>
          <Box1>
            <div>
              <h3>Top Authors</h3>
              <p>
                Last 3 months{" "}
                <span>
                  <i class="fas fa-chevron-down"></i>
                </span>
              </p>
            </div>
            <Bar />
          </Box1>
          <Box2>
            <div className="channel">
              <h3>Sharing Channel</h3>

              <p>
                This Month{" "}
                <span>
                  <i class="fas fa-chevron-down"></i>
                </span>
              </p>
            </div>
            <Doughnut />
            <p class="chart2-title">
              300 articles <br />
              shared
            </p>
          </Box2>

          <Box3>
            <h3 className="top-authors">Top Shared Author</h3>
            <table className="index box4">
              <tr>
                <td>1</td>
                <td className="author-info">
                  <p className="author-img">
                    <img src={picture} alt="" />
                  </p>
                  <p>Jenny Wilson</p>
                </td>
                <td>3.4K Shares</td>
              </tr>
              <tr>
                <td>2</td>
                <td className="author-info">
                  <p className="author-img">
                    <img src={picture} alt="" />
                  </p>
                  <p>Savannah Nguyen</p>
                </td>
                <td>3.4K Shares</td>
              </tr>
              <tr>
                <td>3</td>
                <td className="author-info">
                  <p className="author-img">
                    <img src={picture1} alt="" />
                  </p>
                  <p>Courtney Henry</p>
                </td>

                <td>3.4K Shares</td>
              </tr>
              <tr>
                <td>4</td>
                <td className="author-info">
                  <p className="author-img">
                    <img src={picture2} alt="" />
                  </p>
                  <p>Robert Fox</p>
                </td>

                <td>3.4K Shares</td>
              </tr>
              <tr>
                <td>5</td>
                <td className="author-info">
                  <p className="author-img">
                    <img src={picture3} alt="" />
                  </p>
                  <p>Jerome Bell</p>
                </td>

                <td>3.4K Shares</td>
              </tr>
            </table>
            {/* </div> */}
          </Box3>
          <Box4>
            <h3 className="top-posts">Top Posts</h3>
            <table className="index box3">
              <tr>
                <td>1</td>
                <td>
                  Amet minim molit non desurunt ullamco est sit aliqua dolor do
                  amet sint
                </td>
                <td className="author-info">
                  <p className="author-img">
                    <img src={picture} alt="" />
                  </p>
                  <p>Jenny Wilson</p>
                </td>
                <td>3.4K</td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  Amet minim molit non desurunt ullamco est sit aliqua dolor do
                  amet sint
                </td>
                <td className="author-info">
                  <p className="author-img">
                    <img src={picture} alt="" />
                  </p>
                  <p>Savannah Nguyen</p>
                </td>
                <td>3.4K</td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  Amet minim molit non desurunt ullamco est sit aliqua dolor do
                  amet sint
                </td>
                <td className="author-info">
                  <p className="author-img">
                    <img src={picture1} alt="" />
                  </p>
                  <p>Courtney Henry</p>
                </td>

                <td>3.4K</td>
              </tr>
              <tr>
                <td>4</td>
                <td>
                  Amet minim molit non desurunt ullamco est sit aliqua dolor do
                  amet sint
                </td>
                <td className="author-info">
                  <p className="author-img">
                    <img src={picture2} alt="" />
                  </p>
                  <p>Robert Fox</p>
                </td>

                <td>3.4K</td>
              </tr>
              <tr>
                <td>5</td>
                <td>
                  Amet minim molit non desurunt ullamco est sit aliqua dolor do
                  amet sint
                </td>
                <td className="author-info">
                  <p className="author-img">
                    <img src={picture3} alt="" />
                  </p>
                  <p>Jerome Bell</p>
                </td>

                <td>3.4K</td>
              </tr>
            </table>
          </Box4>
        </MainBox>

        <SideBox>
          <div className="author">
            <h3>Author</h3>
            <p>
              <i className="fas fa-arrow-right"></i>
            </p>
          </div>
          <table id="table1">
            <tr>
              <td>1</td>
              <td className="author-info">
                <p className="author-img">
                  <img src={picture} alt="" />
                </p>
                <div>
                  {" "}
                  <p>Jenny Wilson</p>
                  <p className="email">jennywilson@gmail.com</p>
                </div>
              </td>
              <td className="posts">120 posts</td>
            </tr>
            <tr>
              <td>2</td>
              <td className="author-info">
                <p className="author-img">
                  <img src={picture} alt="" />
                </p>
                <div>
                  <p>Cameron Williamson</p>
                  <p className="email">debraholt@gmail.com</p>
                </div>
              </td>
              <td className="posts">120 posts</td>
            </tr>
            <tr>
              <td>3</td>
              <td className="author-info">
                <p className="author-img">
                  <img src={picture} alt="" />
                </p>
                <div>
                  <p>Esther Howard</p>
                  <p className="email">wille.jennings@example.com</p>
                </div>
              </td>
              <td className="posts">120 posts</td>
            </tr>
            <tr>
              <td>4</td>
              <td className="author-info">
                <p className="author-img">
                  <img src={picture} alt="" />
                </p>
                <div>
                  <p>Darrell Steward</p>
                  <p className="email">alma.lawson@example.com</p>
                </div>
              </td>
              <td className="posts">120 posts</td>
            </tr>
            <tr>
              <td>5</td>
              <td className="author-info">
                <p className="author-img">
                  <img src={picture} alt="" />
                </p>
                <div>
                  <p>Devon Lane</p>
                  <p className="email">tim.jennings@example.com</p>
                </div>
              </td>
              <td className="posts">120 posts</td>
            </tr>
            <tr>
              <td>6</td>
              <td className="author-info">
                <p className="author-img">
                  <img src={picture} alt="" />
                </p>
                <div>
                  <p>Anette Black</p>
                  <p className="email">kenzi.lawson@example.com</p>
                </div>
              </td>
              <td className="posts">120 posts</td>
            </tr>
            <tr>
              <td>7</td>
              <td className="author-info">
                <p className="author-img">
                  <img src={picture} alt="" />
                </p>
                <div>
                  <p>Dianna Russell</p>
                  <p className="email">kenzi.lawson@example.com</p>
                </div>
              </td>
              <td className="posts">120 posts</td>
            </tr>
            <tr>
              <td>8</td>
              <td className="author-info">
                <p className="author-img">
                  <img src={picture} alt="" />
                </p>
                <div>
                  <p>Bessie Cooper</p>
                  <p className="email">george.young@example.com</p>
                </div>
              </td>
              <td className="posts">120 posts</td>
            </tr>
            <tr>
              <td>9</td>
              <td className="author-info">
                <p className="author-img">
                  <img src={picture} alt="" />
                </p>
                <div>
                  <p>Leslie Alexander</p>
                  <p className="email">george.young@example.com</p>
                </div>
              </td>
              <td className="posts">120 posts</td>
            </tr>
          </table>
        </SideBox>
      </AllBox>
    </DashboardWrapper>
  );
};

export default Dashboard;
