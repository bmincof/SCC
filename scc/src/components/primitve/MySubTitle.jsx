import React from "react";
import styled from "styled-components";

// h2 역할을 대신할 부제목 컴포넌트
const MySubTitle = ({ value }) => {
  return (
    <Container>
      <h2>{value}</h2>
    </Container>
  );
};

const Container = styled.div`
  h2 {
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

export default MySubTitle;
