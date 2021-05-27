import styled from "styled-components";

const ProfileSettings = () => {
  return (
    <StyledDiv>
      <div className="prof-heading">
        <h3 className="prof">Profile Settings</h3>
        <p className="basic-info">Edit basic information about you</p>
      </div>

      <div className="prof-div">
        <div>
          <span>
            {" "}
            <img src="/images/info-picture.svg" alt="profile" />
          </span>

          <span className="cam-span">
            {" "}
            <img src="/images/cam.svg" alt="cam-icon" />
          </span>

          <form style={{ marginTop: "2rem" }}>
            <div className="row mt-3">
              <div className="col-md-6">
                <div className="form-group">
                  <label for="first-name" className="label">
                    Enter your First Name
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="first-name"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label for="Last-name" className="label">
                    Enter your Last Name
                  </label>
                  <input type="text" className="form-control" id="role" />
                </div>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-md-6">
                <div className="form-group">
                  <label for="email-address" className="label">
                    Email Address
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="email-address"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label for="phone-number" className="label">
                    Phone number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone-number"
                  />
                </div>
              </div>
            </div>

            <div className="mt-4">
              <span className="button-control">
                <button className="mr-3 cancel-btn">Cancel</button>
                <button className="save-btn">Save Changes</button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  background: #fff;
  border-radius: 5px;
  color: rgba(64, 81, 105, 1);

  .prof {
    font-weight: 500;
    color: #405169;
  }
  .basic-info {
    color: rgba(64, 81, 105, 0.5) !important;
    font-size: 1.5rem;
    font-weight: 300;
    margin-bottom: 0rem;
  }
  .prof-heading {
    border-bottom: 1px solid rgb(237, 237, 238);
    padding: 2.4rem 2rem;
  }
  .prof-div {
    padding: 2.4rem 2rem 11.4rem 2rem;
  }
  .label {
    font-weight: 500;
    color: rgb(64, 81, 105);
  }
  .cam-span {
    position: absolute;
    left: 30rem;
    top: 27rem;
  }
  .button-control {
    float: right;
  }
  .cancel-btn {
    background: rgba(255, 255, 255, 1);
    color: #c2c1c5;
    border: 1px solid rgba(58, 46, 145, 0.2);
    padding: 0.7rem 6rem;
    border-radius: 5px;
  }
  .save-btn {
    background: #4c60eb;
    opacity: 0.3;
    color: #fff;
    border: 1px solid rgba(58, 46, 145, 0.2);
    padding: 0.7rem 6rem;
    border-radius: 5px;
  }

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    .cam-span {
      position: absolute;
      left: 13rem;
      top: 42rem;
    }
    .save-btn {
      background: #4c60eb;
      opacity: 0.3;
      color: #fff;
      border: 1px solid rgba(58, 46, 145, 0.2);
      padding: 0.7rem 4rem;
      border-radius: 5px;
      margin-top: 1rem;
    }
    .basic-info {
      color: rgba(64, 81, 105, 0.5) !important;
      font-size: 1.1rem;
      font-weight: 300;
      margin-bottom: 0rem;
    }
    .prof {
      font-weight: 400;
      color: #405169;
    }
    /* .prof-div {
      padding: 2.4rem 1rem 11.4rem 1rem;
    }
    .prof-heading {
      border-bottom: 1px solid rgb(237, 237, 238);
      padding: 2.4rem 1rem;
    } */
  }

  @media only screen and (min-width: 1024px) and (max-width: 1366px) {
    .cam-span {
      position: absolute !important;
      left: 26rem !important;
      top: 27rem !important;
    }
  }
`;

export default ProfileSettings;
