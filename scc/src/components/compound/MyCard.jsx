import React from "react";
import styled from "styled-components";
import MyTitle from "../primitve/MyTitle";
import MySubTitle from "../primitve/MySubTitle";
import LongText from "../primitve/LongText";

// 프로필과 이미지를 포함하는 요소를 나타내기 위한 컴포넌트
const MyCard = ({
  width = "240px",
  height = "180px",
  title,
  subtitle,
  desc,
  src,
}) => {
  return (
    <Container width={width} height={height}>
      <img alt="이미지가 들어갈 장소" src={src} />
      <MyTitle value={title} />
      <MySubTitle value={subtitle} />
      <LongText value={desc} />
    </Container>
  );
};

const Container = styled.div`
  display: inline-block;
  text-align: left;
  border: solid 1px;

  width: 240px;
  height: 300px;

  img {
    background-color: #bbbbbb;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
  }
`;

export default MyCard;
