import  { useState } from "react";
import styled from "styled-components";
import AddWebsite from "./AddWebsite";

const Connect = ({ activeModal, handleToggle }) => {
    const [websites, setWebsites] = useState([]);
    
    const handleDelete = (id) => {
        let filteredWebsites = websites.filter((item) => item.id !== id)
        setWebsites(filteredWebsites);
    }

  return (
    <StyledDiv>
      <div>
        <div className="prof-heading">
          <h3 className="prof">Connect Website</h3>
          <p className="basic-info">Add website to begin tracking</p>
        </div>

        <div className="prof-div">
          <button className="add-website" onClick={handleToggle}>
            Add website
          </button>

          <div className="mt-5">
            {websites &&
              websites.map((item, index) => (
                <div key={index} className="grid-container">
                  <div>
                    <span>{index + 1}</span>{" "}
                    <span className="ml-4 text-area">{item.url}</span>
                  </div>
                  <div className="delete" onClick={() => handleDelete(item.id)}>
                    Delete
                  </div>
                </div>
              ))}
          </div>
        </div>

        {activeModal ? (
          <AddWebsite
            handleToggle={handleToggle}
            setWebsites={setWebsites}
            websites={websites}
          />
        ) : null}
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

  .add-website {
    background: #4c60eb;
    border-radius: 4px;
    color: #fff;
    padding: 1rem 3.3rem;
    border: none;
  }
  .grid-container {
    display: grid;
    grid-template-columns: 11fr 1fr;
    border-bottom: 1px solid #dde9fb;
    padding-bottom: 1.7rem;
    color: rgb(64, 81, 105);
    padding-top: 2rem;
  }
  .delete {
    font-weight: 500;
    font-size: 1.2rem;
    opacity: 0.9;
    cursor: pointer;
  }
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    background: #fff;
    border-radius: 5px;
    color: #909eb1;
    min-height: 26rem;
    position: relative;
    .prof-heading {
      border-bottom: 1px solid rgb(237, 237, 238);
      padding: 2.4rem 1rem;
    }
    .prof-div {
      padding: 2.4rem 1rem 2.4rem 1rem;
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
    .delete {
      font-weight: 500;
      font-size: 1rem;
      opacity: 0.9;
      cursor: pointer;
    }
    .text-area {
      margin-left: 0.4rem !important;
    }
  }
`;

export default Connect;
