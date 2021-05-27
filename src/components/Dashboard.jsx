import React from "react";
import styled from "styled-components";
import { DashboardWrapper } from "./styled/index";
import Bar from "./Chart";
import Doughnut from "./Chart2";
import picture from "../assets/Rectangle 11.svg";
import picture1 from "../assets/Rectangle 12.svg";
import picture2 from "../assets/Rectangle 13.svg";
import picture3 from "../assets/Rectangle 14.svg";

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <h2 className="title-dashboard">DashBoard</h2>
      <AllBox>
        <MainBox>
          <InnerFlex>
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
          </InnerFlex>
          <InnerFlex>
            <Box3>
              <h3 className="top-authors">Top Shared Author</h3>
              <table className="index-table box3">
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
            </Box3>
            <Box4>
              <h3 className="top-posts">Top Posts</h3>
              <table className="index-table box3">
                <tr>
                  <td>1</td>
                  <td class="words">
                    <p className="cave">
                      Amet minim molit non desurunt ullamco est sit aliqua dolor
                      do amet sint
                    </p>
                    <div className="tenor">
                      <p className="author-img">
                        <img src={picture} alt="" />
                      </p>
                      <p>Jenny Wilson</p>
                    </div>
                    3.4K
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td class="words">
                    <p className="cave">
                      Amet minim molit non desurunt ullamco est sit aliqua dolor
                      do amet sint
                    </p>
                    <div className="tenor">
                      <p className="author-img">
                        <img src={picture} alt="" />
                      </p>
                      <p>Eleanor Pena</p>
                    </div>
                    3.4K
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td class="words">
                    <p className="cave">
                      Amet minim molit non desurunt ullamco est sit aliqua dolor
                      do amet sint
                    </p>
                    <div className="tenor">
                      <p className="author-img">
                        <img src={picture} alt="" />
                      </p>
                      <p>Kristin Watson</p>
                    </div>
                    3.4K
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td class="words">
                    <p className="cave">
                      Amet minim molit non desurunt ullamco est sit aliqua dolor
                      do amet sint
                    </p>
                    <div className="tenor">
                      <p className="author-img">
                        <img src={picture} alt="" />
                      </p>
                      <p>Cameron Williamson</p>
                    </div>
                    3.4K
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td class="words">
                    <p className="cave">
                      Amet minim molit non desurunt ullamco est sit aliqua dolor
                      do amet sint
                    </p>
                    <div className="tenor">
                      <p className="author-img">
                        <img src={picture} alt="" />
                      </p>
                      <p>Ronalds Richards</p>
                    </div>
                    3.4K
                  </td>
                </tr>
              </table>
            </Box4>
          </InnerFlex>
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
                <div className="retro">
                  <p className="author-img">
                    <img src={picture} alt="" />
                  </p>
                  <div>
                    <p>Jenny Wilson</p>
                    <p className="email">jennywilson@gmail.com</p>
                  </div>
                </div>
                <p className="posts">120 posts</p>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td className="author-info">
                <div className="retro">
                  <p className="author-img">
                    <img src={picture} alt="" />
                  </p>
                  <div>
                    <p>Cameron Williamson</p>
                    <p className="email">debraholt@gmail.com</p>
                  </div>
                </div>
                <p className="posts">120 posts</p>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td className="author-info">
                <div className="retro">
                  <p className="author-img">
                    <img src={picture} alt="" />
                  </p>
                  <div>
                    <p>Esther Howard</p>
                    <p className="email">wille.jennings@example.com</p>
                  </div>
                </div>
                <p className="posts">120 posts</p>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td className="author-info">
                <div className="retro">
                  <p className="author-img">
                    <img src={picture} alt="" />
                  </p>
                  <div>
                    <p>Darrell Steward</p>
                    <p className="email">alma.lawson@example.com</p>
                  </div>
                </div>
                <p className="posts">120 posts</p>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td className="author-info">
                <div className="retro">
                  <p className="author-img">
                    <img src={picture} alt="" />
                  </p>
                  <div>
                    <p>Devon Lane</p>
                    <p className="email">tim.jennings@example.com</p>
                  </div>
                </div>
                <p className="posts">120 posts</p>
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td className="author-info">
                <div className="retro">
                  <p className="author-img">
                    <img src={picture} alt="" />
                  </p>
                  <div>
                    <p>Anette Black</p>
                    <p className="email">kenzi.lawson@example.com</p>
                  </div>
                </div>
                <p className="posts">120 posts</p>
              </td>
            </tr>
            <tr>
              <td>7</td>
              <td className="author-info">
                <div className="retro">
                  <p className="author-img">
                    <img src={picture} alt="" />
                  </p>
                  <div>
                    <p>Dianna Russell</p>
                    <p className="email">kenzi.lawson@example.com</p>
                  </div>
                </div>
                <p className="posts">120 posts</p>
              </td>
            </tr>
            <tr>
              <td>8</td>
              <td className="author-info">
                <div className="retro">
                  <p className="author-img">
                    <img src={picture} alt="" />
                  </p>
                  <div>
                    <p>Bessie Cooper</p>
                    <p className="email">george.young@example.com</p>
                  </div>
                </div>
                <p className="posts">120 posts</p>
              </td>
            </tr>
            <tr>
              <td>9</td>
              <td className="author-info">
                <div className="retro">
                  <p className="author-img">
                    <img src={picture} alt="" />
                  </p>
                  <div>
                    <p>Leslie Alexander</p>
                    <p className="email">george.young@example.com</p>
                  </div>
                </div>
                <p className="posts">120 posts</p>
              </td>
            </tr>
          </table>
        </SideBox>
      </AllBox>
    </DashboardWrapper>
  );
};

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
  .top-posts {
    margin-top: 12px;
  }
  .index-table {
    border-collapse: separate;
    width: 100%;
  }

  .index-table tr td:not(:first-child) {
    padding-bottom: 12px;
    border-bottom: 1px solid #dde9fb;
  }

  .index-table tr:last-child td {
    border-bottom: none;
  }
  .words,
  .tenor {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .cave,
  .tenor {
    width: 50%;
  }

  .tenor {
    margin-left: 52px;
    justify-content: flex-start;
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

  @media only screen and (min-width: 320px) and (max-width: 768px) {
  }

  /* @media only screen and (min-width: 320px) and (max-width: 768px) { */

  /* @media only screen and (min-width: 769px) and (max-width: 1023px) { */

  /* @media only screen and (min-width: 1024px) and (max-width: 1366px) { */
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    flex-direction: ${column};
  }
`;

const MainBox = styled.div`
  @media only screen and (max-width: 768px) {
    flex-direction: ${column};
  }
`;

const InnerFlex = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    flex-direction: column;
    margin: 12px 0;
  }
`;

const Box1 = styled.div`
  width: 50%;
  height: 320px;
  margin-right: 10px;
  padding: 14px;
  background: #ffffff;
  font-size: 12px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 22px;
    font-size: 12px;
    h3 {
      font-size: 20px;
    }
  }
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    margin: 24px 0;
    width: 95%;
  }
`;

const Box2 = styled.div`
  margin-bottom: 12px;
  width: 47%;
  height: 320px;
  background: #ffffff;
  padding: 25px;
  font-size: 12px;

  h3 {
    font-size: 20px;
  }
  .chart2-title {
    font-weight: 500;
    font-size: 20px;
    text-align: center;
    margin-top: -155px;
  }
  .channel {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    width: 95%;
    margin: 0;
  }
`;

const Box3 = styled.div`
  width: 35%;
  padding: 20px;
  margin-right: 12px;
  background: #ffffff;

  .box3 td {
    padding: 10px 0;
  }
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    width: 95%;
    margin: 12px 0;
  }
`;

const Box4 = styled.div`
  padding: 15px 30px;
  width: 62%;
  background: #ffffff;

  .box3 tr td {
    padding: 2px 5px;
  }
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    width: 95%;
  }
`;

const SideBox = styled.div`
  font-size: 16px;
  padding: 15px 25px;
  width: 100%;
  font-size: 16px;
  background: #ffffff;

  #table1 {
    border-collapse: separate;
    width: 100%;
  }

  #table1 tr td {
    padding: 10px 2px;
  }
  .author-info,
  .retro {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  #table1 tr td:not(:first-child) {
    border-bottom: 1px solid #dde9fb;
  }

  #table1 tr:last-child td {
    border-bottom: none;
  }
  .author {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;

    h3 {
      font-size: 20px;
    }
  }

  .author p {
    color: #4c60eb;
    padding: 0 15px;
  }

  .details {
    display: flex;
    align-items: flex-start;
  }

  .posts,
  .email {
    font-size: 12px;
  }

  .email {
    color: rgba(64, 81, 105, 0.6);
  }

  p {
    margin: 0;
  }

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    margin: 6px;
    width: 95%;
  }
`;

export default Dashboard;
