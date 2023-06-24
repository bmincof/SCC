import React from "react";
import styled from "styled-components";

// String, function
// button의 icon, value, 누르면 동작할 함수, disabled, css 설정을 받습니다
// styled-component로 바꿔야 해요
// style -> className
const MyButton = ({ value }) => {
  return (
    <Container>
      <StyledTab>{value}</StyledTab>
    </Container>
  );
};

const Container = styled.div``;
// styled-component는 ${(props) => {props.어쩌고}} 로 받아야 한다고 합니다
const StyledTab = styled.div``;

export default MyButton;
