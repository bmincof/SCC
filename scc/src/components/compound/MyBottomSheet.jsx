import React from "react";
import styled from "styled-components";

// String, function
// button의 icon, value, 누르면 동작할 함수, disabled, css 설정을 받습니다
// styled-component로 바꿔야 해요
// style -> className
const MyButton = ({ value }) => {
  return (
    <Container>
      <StyledButton>{value}</StyledButton>
    </Container>
  );
};

const Container = styled.divContainer;
// styled-component는 ${(props) => {props.어쩌고}} 로 받아야 한다고 합니다
const StyledButton = styled.button``;

export default MyButton;
