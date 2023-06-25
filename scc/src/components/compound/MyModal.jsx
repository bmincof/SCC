import React from "react";
import styled from "styled-components";
import MyTitle from "../primitve/MyTitle";
import LongText from "../primitve/LongText";
import MySubTitle from "../primitve/MySubTitle";

// String, function
// button의 icon, value, 누르면 동작할 함수, disabled, css 설정을 받습니다
// styled-component로 바꿔야 해요
// style -> className
const MyModal = ({ title, subtitle, desc, buttons = [] }) => {
  return (
    <Container>
      <Modal>
        <ModalBody>
          <MyTitle value={title} />
          <LongText value={desc} />
        </ModalBody>
        <ModalButtons>{buttons.map((button) => button)}</ModalButtons>
      </Modal>
    </Container>
  );
};

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;

const Modal = styled.div`
  z-index: 11;
  border-radius: 1rem;
  background-color: white;
  border: solid 1px;
  width: 30%;
`;

const ModalBody = styled.div`
  margin: 1rem;

  text-align: left;

  * {
    margin-bottom: 1rem;
  }
`;

const ModalButtons = styled.div`
  text-align: right;
`;

export default MyModal;
