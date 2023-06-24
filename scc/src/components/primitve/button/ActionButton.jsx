import React from "react";
import styled from "styled-components";

// String, function
// button의 icon, value, 누르면 동작할 함수, disabled, css 설정을 받습니다
// styled-component로 바꿔야 해요
// style -> className
const ActionButton = ({
  icon,
  value,
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
        className={value ? "text" : "default"}
        onClick={clickEvent}
        disabled={disabled}
      >
        {icon}
        <span class="desc">{value}</span>
      </button>
    </Container>
  );
};

const Container = styled.div`
  display: inline-block;

  button {
    margin: 1rem;
  }

  button:hover {
    cursor: pointer;
  }

  button:active {
    opacity: 0.7;
  }

  .default {
    padding: 1rem 1.2rem 1rem;
    border-radius: 1rem;
    border: none;

    font-size: 1rem;
    font-weight: bold;

    color: #131f0d;
    background-color: #d9e7cb;

    box-shadow: 1px 1px 1px gray;
  }

  .text {
    display: inline-flex;
    align-items: center;

    padding: 1rem 1.2rem 1rem;
    border-radius: 1rem;
    border: none;

    font-size: 1rem;
    font-weight: bold;

    color: #131f0d;
    background-color: #d9e7cb;

    box-shadow: 1px 1px 1px gray;
  }

  .text > .desc {
    font-size: 1.2rem;
    margin-left: 0.5rem;
  }
`;

export default ActionButton;
