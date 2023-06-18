import React, { useState } from "react";
import styled from "styled-components";

// String, String, Boolean, Object?
// input의 태그, placeholder, readOnly, css 설정을 받습니다
// styled-component로 바꿔야 해요
const MyInput = ({ type, placeholder, readOnly, style }) => {
  const [value, setValue] = useState("");

  // 로그 찍어보니까 CJK 문제가 없던데...?
  const handleInput = (value) => {
    setValue(value, console.log(value));
  };

  return (
    <div>
      <input
        type={type}
        value={value}
        onChange={(e) => handleInput(e.target.value)}
        // onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        readOnly={readOnly}
      />
    </div>
  );
};

export default MyInput;
