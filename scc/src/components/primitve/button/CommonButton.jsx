import React from "react";
import styled from "styled-components";

// String, function
// button의 icon, value, 누르면 동작할 함수, disabled, css 설정을 받습니다
// styled-component로 바꿔야 해요
// style -> className
const CommonButton = ({
  value = "빈 버튼",
  icon,
  callBack = () => {
    console.log("클릭됨");
  },
  disabled = false,
  className = "text",
}) => {
  const clickEvent = () => {
    console.log("미구현");
  };

  return (
    <Container>
      <button
        type="button"
        className={className}
        onClick={clickEvent}
        disabled={disabled}
      >
        {value}
      </button>
    </Container>
  );
};

const Container = styled.div`
  display: inline-block;
  button {
    height: 3rem;

    padding: 0rem 1.5rem 0rem;
    margin: 1rem;
    border-radius: 2rem;
    border: none;

    color: #131f0d;
    font-size: 1rem;
    font-weight: bold;
  }

  button:hover {
    cursor: pointer;
  }

  button:active {
    opacity: 0.7;
  }

  .text {
    background-color: rgba(0, 0, 0, 0);
  }

  .elevated {
    background-color: #f0f3e8;
    box-shadow: 1px 1px 1px gray;
  }

  .filled {
    color: white;
    background-color: #248522;
  }

  .tonal {
    background-color: #d9e7cb;
  }

  .outlined {
    background-color: rgba(0, 0, 0, 0);
    border: 0.1rem solid #d9e7cb;
  }
`;

export default CommonButton;
