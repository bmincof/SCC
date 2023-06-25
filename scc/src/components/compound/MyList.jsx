import React from "react";
import styled from "styled-components";
import MyListItem from "./MyListItem";
import MyTitle from "../primitve/MyTitle";

const MyList = ({ items = [], title }) => {
  return (
    <Container>
      <MyTitle value={title} />
      {items.map((item, idx) => (
        <MyListItem
          key={idx}
          title={item.title}
          author={item.author}
          createdAt={item.createdAt}
          likes={item.likes}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  margin-top: 1rem;

  > * {
    padding: 0rem 1rem 1rem 1rem;
  }
`;

export default MyList;
