import React from "react";
import styled from "styled-components";


const Pagination = () => {
  return (
    <>
      <Paginations>
        <p className="arrow">
          <i class="fas fa-chevron-left"></i>
        </p>
        <p className="page">1</p>
        <p className="page">2</p>
        <p className="page">3</p>
        <p className="page">4</p>
        <div className="page dots">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
        <p className="arrow">
          <i class="fas fa-chevron-right"></i>
        </p>
      </Paginations>
    </>
  );
};


const Paginations = styled.div`
  margin: 12px 0;
  display: flex;
  justify-content: flex-end;

  .arrow {
    font-size: 20px;
    margin: 0 10px;
    padding: 12px 20px;
    cursor: pointer;
  }

  .page {
    margin: 0 10px;
    width: 50px;
    height: 50px;
    text-align: center;
    padding: 12px 0px;
    background-color: #fff;
    transition: all ease 0.5s;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      color: #fff;
      background-color: #4c60eb;
    }
  }

  .dot {
    height: 5px;
    width: 5px;
    margin: 0 1px;
    background-color: #262332;
    border-radius: 50%;
    display: inline-block;
  }
`;

export default Pagination;
