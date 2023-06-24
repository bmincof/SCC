import React, { useState } from "react";
import styled from "styled-components";

// String, String, Boolean, Object?
// textarea의 placeholder, rows, readOnly, css 설정을 받습니다
// styled-component로 바꿔야 해요
const MyTextArea = ({ placeholder, rows, readOnly, style }) => {
  const [value, setValue] = useState("");

  const handleInput = (e) => {
    setValue(e.target.value);
    console.log(value);
  };

  return (
    <Container>
      <StyledTextarea
        onChange={handleInput}
        // onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        readOnly={readOnly}
      >
        {value}
      </StyledTextarea>
    </Container>
  );
};

const Container = styled.div``;
const StyledTextarea = styled.textarea``;

export default MyTextArea;
