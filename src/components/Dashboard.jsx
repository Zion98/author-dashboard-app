import React from "react";
import styled from "styled-components";
import { DashboardWrapper } from "./styled/index";
import Bar from "./Chart";

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
    border-spacing: 0px 10px;
  }

  .index tr td:not(:first-child),
  #table1 tr td:not(:first-child) {
    padding: 5px;
    text-align: left;
    border-bottom: 1px solid #dde9fb;
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
  margin-bottom: 12px;
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

  @media only screen and (max-width: 768px) {
    width: 95%;
    margin: 0;
  }
`;

const Box3 = styled.div`
  font-size: 16px;
  padding: 24px;
  width: 35%;
  font-size: 16px;
  background: #ffffff;

  #table1 {
    border-collapse: separate;
    width: 100%;
    border-spacing: 0px 15px;
  }

  tr {
    padding: 20px 0;
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
  }

  @media only screen and (max-width: 768px) {
    width: 95%;
    margin: 12px 0;
  }
`;
const Box4 = styled.div`
  width: 35%;
  padding: 35px;
  margin-right: 12px;
  background: #ffffff;

  @media only screen and (max-width: 768px) {
    width: 95%;
    margin: 12px 0;
  }
`;
const SideBox = styled.div`
  padding: 35px 30px;
  width: 61%;
  background: #ffffff;

  @media only screen and (max-width: 768px) {
    width: 95%;
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
              <p>Last 3 months v</p>
            </div>
            <Bar />
          </Box1>
          <Box2></Box2>

          <Box4>
            <h3 className="top-authors">Top Shared Author</h3>
            <table className="index">
              <tr>
                <td>1</td>
                <td className="author-info">
                  <p className="author-img">
                    <img src="./assets/Rectangle 11.svg" alt="" />
                  </p>
                  <p>Jenny Wilson</p>
                </td>
                <td>3.4K Shares</td>
              </tr>
              <tr>
                <td>1</td>
                <td className="author-info">
                  <p className="author-img">
                    <img src="./assets/Rectangle 11.svg" alt="" />
                  </p>
                  <p>Savannah Nguyen</p>
                </td>
                <td>3.4K Shares</td>
              </tr>
              <tr>
                <td>3</td>
                <td className="author-info">
                  <p className="author-img">
                    <img src="./assets/Rectangle 12.svg" alt="" />
                  </p>
                  <p>Courtney Henry</p>
                </td>

                <td>3.4K Shares</td>
              </tr>
              <tr>
                <td>4</td>
                <td className="author-info">
                  <p className="author-img">
                    <img src="./assets/Rectangle 13.svg" alt="" />
                  </p>
                  <p>Robert Fox</p>
                </td>

                <td>3.4K Shares</td>
              </tr>
              <tr>
                <td>5</td>
                <td className="author-info">
                  <p className="author-img">
                    <img src="./assets/Rectangle 14.svg" alt="" />
                  </p>
                  <p>Jerome Bell</p>
                </td>

                <td>3.4K Shares</td>
              </tr>
            </table>
            {/* </div> */}
          </Box4>
          <SideBox>
            {/* <div className="grid5"> */}
            <h3 className="top-posts">Top Posts</h3>
            <table className="index">
              <tr>
                <td>1</td>
                <td>
                  Amet minim molit non desurunt ullamco est sit aliqua dolor do
                  amet sint
                </td>
                <td className="author-info">
                  <p className="author-img">
                    <img src="./assets/Rectangle 11.svg" alt="" />
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
                    <img src="./assets/Rectangle 11.svg" alt="" />
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
                    <img src="./assets/Rectangle 12.svg" alt="" />
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
                    <img src="./assets/Rectangle 13.svg" alt="" />
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
                    <img src="./assets/Rectangle 14.svg" alt="" />
                  </p>
                  <p>Jerome Bell</p>
                </td>

                <td>3.4K</td>
              </tr>
            </table>
            {/* </div> */}
            {/* </div> */}
          </SideBox>
        </MainBox>

        <Box3>
          {/* <div className="grid3"> */}
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
                  <img src="./assets/Rectangle 11.svg" alt="" />
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
                  <img src="./assets/Rectangle 11.svg" alt="" />
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
                  <img src="./assets/Rectangle 11.svg" alt="" />
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
                  <img src="./assets/Rectangle 11.svg" alt="" />
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
                  <img src="./assets/Rectangle 11.svg" alt="" />
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
                  <img src="./assets/Rectangle 11.svg" alt="" />
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
                  <img src="./assets/Rectangle 11.svg" alt="" />
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
                  <img src="./assets/Rectangle 11.svg" alt="" />
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
                  <img src="./assets/Rectangle 11.svg" alt="" />
                </p>
                <div>
                  <p>Leslie Alexander</p>
                  <p className="email">george.young@example.com</p>
                </div>
              </td>
              <td className="posts">120 posts</td>
            </tr>
          </table>
          {/* </div> */}
        </Box3>
      </AllBox>
    </DashboardWrapper>
  );
};

export default Dashboard;
