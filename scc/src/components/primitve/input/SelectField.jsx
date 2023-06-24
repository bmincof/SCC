import React from "react";
import styled from "styled-components";

// 이걸 말하는게 아니라 Compound Component 패턴을 적용해서 만들라는 뜻이겠지요??
// dropdown의 세부 내용(list), css 설정을 받습니다
// styled-component로 바꿔야 해요
const MyDropDown = ({ list = [] }) => {
  return (
    <Container>
      <select>
        <option>--선택--</option>
        {list.map((item, idx) => (
          <option key={idx}>{item}</option>
        ))}
      </select>
    </Container>
  );
};

const Container = styled.div`
  display: inline-block;
  margin: 1rem;

  padding: 1.3rem 1rem;
  background-color: #f0f3e8;

  select {
    background-color: rgba(0, 0, 0, 0);
    border: none;
  }

  select::option {
    background-color: rgba(0, 0, 0, 0);
    border: none;
  }
`;

export default MyDropDown;
