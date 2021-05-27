import  { useRef } from "react";
import styled from "styled-components";

const Token = () => {
  const Ref = useRef(null);

  const copyText = (e) => {
     navigator.clipboard.writeText(Ref.current.value)
  };

  return (
    <StyledDiv>
      <div>
        <div className="prof-heading">
          <h3 className="prof">Get Token</h3>
          <p className="basic-info">Add token to begin tracking</p>
        </div>

        <div className="prof-div">
          <div>
            <p className="copy">
              Copy this code and paste it on the header section of your website
            </p>
            <div className="copy-div">
              <label htmlFor="copy" className="copy-text">
                <input
                  style={{ display: "none" }}
                  id="copy"
                  type="checkbox"
                  value="KGFHKJDHFH8377643987!@#$#$JHBCB4"
                  ref={Ref}
                  checked
                />
                KGFHKJDHFH8377643987!@#$#$JHBCB4
              </label>

              <span className="button-span">
                <button className="copy-btn" onClick={copyText}>
                  Copy
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  background: #fff;
  border-radius: 5px;
  color: #909eb1;
  min-height: 35rem;
  position: relative;

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
    padding: 2.4rem 2rem 2.4rem 2rem;
  }
  .copy {
    font-weight: 300;
    color: rgb(64, 81, 105);
    font-size: 1.3rem;
  }
  .copy-div {
    background: rgba(76, 141, 235, 0.1077);
    padding: 0.5rem 1rem 0.5rem 2rem;
  }
  .button-span {
    float: right;
  }
  .copy-btn {
    background: #4c60eb;
    border-radius: 5px;
    color: #fff;
    padding: 0.4rem 2.3rem;
    border: none;
  }
  .copy-text {
    color: #000;
    font-size: 1.5rem;
    font-weight: 300;
    border: none;
    background: rgba(76, 141, 235, 0.00011);
    width: 60%;
  }
  @media only screen and (min-width: 320px) and (max-width: 767px) {
    .copy-text {
      color: #405169;
      font-size: 0.6rem;
      font-weight: 300;
      border: none;
      background: rgba(76, 141, 235, 0.00011);
      width: 100%;
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
    .prof-heading {
      border-bottom: 1px solid rgb(237, 237, 238);
      padding: 2.4rem 1rem;
    }
    .prof-div {
      padding: 2.4rem 1rem 2.4rem 1rem;
    }
    .copy {
      font-weight: 300;
      color: rgb(64, 81, 105);
      font-size: 0.7rem;
    }
    .copy-div {
      background: rgba(76, 141, 235, 0.10077);
      padding: 0.5rem 0.5rem 0.5rem 0.5rem;
    }
    .copy-btn {
      margin-top: 1rem;
    }
  }
`;

export default Token;
