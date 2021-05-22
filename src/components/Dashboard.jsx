import React from "react";

const Dashboard = () => {
  return (
    <main>
      <h2 className="title">DashBoard</h2>

      <div className="main-grid">
        <div className="flexer1">
          <div className="grid1"></div>
          <div className="grid2"></div>
          <div className="grid4">
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
          </div>
          <div className="grid5">
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
          </div>
        </div>
        <div className="grid3">
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
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
