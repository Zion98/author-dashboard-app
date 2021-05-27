import React, { useState } from "react";
import ReactDom from "react-dom";
import styled from "styled-components";

const AddWebsite = ({ handleToggle, setWebsites, websites }) => {
  const obj = {
    url: "",
    id: 0,
  };
  const [data, setData] = useState(obj);
  const [count, setCount] = useState(0);

  const handleChange = (e) => {
      const { value, name } = e.target;
          setData({ id: count, [name]: value });
  };

    const addUrl = () => {
        if (data.url !== "") {
          setWebsites([...websites, data]);
          let newID = count + 1;
          setCount(newID);
      }
    
    setData(obj);
  };

  return ReactDom.createPortal(
    <OVERLAY>
      <StyledDiv>
        <div>
          <div className="title">
            <span className="web">Add Website</span>
            <span className="close" onClick={handleToggle}>
              x
            </span>
          </div>

          <div style={{ marginTop: "2.5rem" }}>
            <div className="form-group">
              <label for="url" className="label">
                Website Url
              </label>
              <input
                type="text"
                className="form-control"
                id="url"
                onChange={handleChange}
                name="url"
                value={data.url}
                placeholder="Enter url"
                required
              />
            </div>
          </div>

          <button className="add-website mt-4" onClick={addUrl}>
            Add website
          </button>
        </div>
      </StyledDiv>
    </OVERLAY>,
    document.getElementById("portal")
  );
};


const OVERLAY = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(197, 197, 197, 0.5);
  z-index: 1000;
  backdrop-filter: blur(2px);
`;

const StyledDiv = styled.div`
  background-color: #fff;
  width: 40%;
  border-radius: 5px;
  padding: 1.5rem 1.5rem 3rem 1.5rem;
  color: #000;
  top: 23%;
  left: 32%;
  position: absolute;

  .title {
    border-bottom: 1px solid #dde9fb;
    padding-bottom: 1.3rem;
  }
  .web {
    font-size: 1.8rem;
    font-weight: 500;
  }
  .add-website {
    background: #4c60eb;
    border-radius: 4px;
    color: #fff;
    padding: 0.7rem 3.3rem;
    border: none;
    width: 100%;
  }
  #url {
    padding-left: 1rem;
  }

  .close {
    float: right;
  }
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    background-color: #fff;
    width: 70%;
    border-radius: 5px;
    padding: 1.5rem 0.8rem 3rem 0.8rem;
    color: #000;
    top: 50%;
    left: 15%;
    position: absolute;
  }
`;

export default AddWebsite;
