import React from "react";
import styled from "styled-components";

// p 역할을 대신할 컴포넌트
const LongText = ({ value }) => {
  return (
    <Container>
      <p>{value}</p>
    </Container>
  );
};

const Container = styled.div`
  p {
  }
`;

export default LongText;
