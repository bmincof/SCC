import React from "react";
import styled from "styled-components";
import MySubTitle from "../primitve/MySubTitle";

import { FaHeart, FaCircle } from "react-icons/fa";
// 제목, 작성자, 작성일, 추천수가 필요
const MyListItem = ({ title, author, createdAt, likes }) => {
  return (
    <Container>
      <MainInfo>
        <MySubTitle value={title} />
        <Author>
          <span>by </span>
          <span>{author}</span>
        </Author>
      </MainInfo>
      <SubInfo>
        <CreatedAt>
          <span>작성일 </span>
          <span>{createdAt}</span>
        </CreatedAt>
        <Delimiter>
          <FaCircle display={"inline-block"} size="4" />
        </Delimiter>
        <LikeImage>
          <FaHeart size="14" color="red" />
        </LikeImage>
        {likes}
      </SubInfo>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  text-align: left;

  margin-top: 0.5rem;

  > * {
    margin-top: 0.3rem;
  }
`;

const MainInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SubInfo = styled.div`
  color: #888888;
  border-bottom: solid 1px;
  padding-bottom: 1rem;
`;

const Author = styled.div`
  display: block;
  width: 30%;
`;

const CreatedAt = styled.div`
  display: inline-block;
`;

const Delimiter = styled.div`
  display: inline-block;
  margin: 0rem 0.5rem;

  * {
    margin-bottom: 0.3rem;
  }
`;

const LikeImage = styled.div`
  display: inline-block;
  margin-right: 0.2rem;

  * {
    padding-top: 0.1rem;
  }
`;

export default MyListItem;
