import React from "react";
import styled from "styled-components";

const MyList = ({ items = [] }) => {
  return <Container></Container>;
};

const Container = styled.div``;
// styled-component는 ${(props) => {props.어쩌고}} 로 받아야 한다고 합니다
const StyledList = styled.div``;

export default MyList;
