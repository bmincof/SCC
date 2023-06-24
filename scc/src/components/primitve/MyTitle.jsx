import React from "react";
import styled from "styled-components";

// h1 역할을 대신할 Title 컴포넌트
const MyTitle = ({ value }) => {
  return (
    <Container>
      <h1>{value}</h1>
    </Container>
  );
};

const Container = styled.div`
  h1 {
    font-size: 2rem;
  }
`;

export default MyTitle;
