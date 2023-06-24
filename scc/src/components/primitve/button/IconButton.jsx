import React from "react";
import styled from "styled-components";
import { FaApple } from "react-icons/fa";

// String, function
// button의 icon, value, 누르면 동작할 함수, disabled, css 설정을 받습니다
// styled-component로 바꿔야 해요
// style -> className
const IconButton = ({
  icon,
  callBack = () => {
    console.log("클릭됨");
  },
  disabled = false,
  className = "standard",
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
        <FaApple size="27" />
      </button>
    </Container>
  );
};

const Container = styled.div`
  display: inline-block;
  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    height: 4rem;
    width: 4rem;
    margin: 0.4rem;

    border-radius: 2rem;
    border: none;

    font-size: 1.5rem;
    font-weight: bold;

    color: #131f0d;
  }

  button:hover {
    cursor: pointer;
  }

  button:active {
    opacity: 0.7;
  }

  .standard {
    background-color: rgba(0, 0, 0, 0);
  }

  .filled {
    color: white;
    background-color: #248522;
  }

  .outlined {
    background-color: rgba(0, 0, 0, 0);
    border: 0.1rem solid #d9e7cb;
  }
`;

export default IconButton;
