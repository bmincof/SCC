import React, { useState } from "react";
import styled from "styled-components";

// String, String, Boolean, Object?
// input의 태그, placeholder, readOnly, css 설정을 받습니다
// styled-component로 바꿔야 해요
// parameter = ?? -> text
const TextField = ({ type = "text", icon, placeholder, readOnly, style }) => {
  const [value, setValue] = useState("");

  // 로그 찍어보니까 CJK 문제가 없던데...?
  const handleInput = (value) => {
    setValue(value, console.log(value));
  };

  return (
    <Container>
      <span>{icon}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => handleInput(e.target.value)}
        // onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        readOnly={readOnly}
      />
    </Container>
  );
};

const Container = styled.div`
  display: inline-block;
  margin: 1rem;

  padding: 1.3rem 1rem;
  background-color: #f0f3e8;

  input {
    background-color: rgba(0, 0, 0, 0);
    border: none;
  }

  input:focus {
    outline: none;
  }

  input::placeholder {
    font-size: 1rem;
    color: #131f0d;
  }

  span {
    margin-right: 0.4rem;
  }
`;

export default TextField;
