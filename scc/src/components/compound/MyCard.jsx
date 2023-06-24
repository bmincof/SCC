import React from "react";
import styled from "styled-components";
import MyTitle from "../primitve/MyTitle";
import MySubTitle from "../primitve/MySubTitle";
import LongText from "../primitve/LongText";
import CommonButton from "../primitve/button/CommonButton";

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
      <CardThumbnail alt="이미지가 들어갈 장소" src={src} />
      <CardBody>
        <MyTitle value={title} />
        <MySubTitle value={subtitle} />
        <LongText value={desc} />
      </CardBody>
      <CardButton>
        <CommonButton value={"바로가기"} className="filled" />
      </CardButton>
    </Container>
  );
};

const Container = styled.div`
  display: inline-block;
  border: solid 1px;

  width: 20rem;
`;

const CardThumbnail = styled.img`
  background-color: #d9e7cb;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const CardBody = styled.div`
  padding: 0.3rem;
  text-align: left;

  * {
    margin-bottom: 0.3rem;
  }
`;

const CardButton = styled.div`
  text-align: right;
`;

export default MyCard;
