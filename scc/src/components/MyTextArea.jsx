import React, { useState } from "react";
import styled from "styled-components";

// String, String, Boolean, Object?
// textarea의 placeholder, rows, readOnly, css 설정을 받습니다
// styled-component로 바꿔야 해요
const MyTextArea = ({ placeholder, rows, readOnly, style }) => {
  const [value, setValue] = useState("");

  const handleInput = (value) => {
    setValue(value);
    console.log(value);
  };

  return (
    <div>
      <textarea
        onChange={(e) => handleInput(e.target.value)}
        // onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        readOnly={readOnly}
      >
        {value}
      </textarea>
    </div>
  );
};

export default MyTextArea;
