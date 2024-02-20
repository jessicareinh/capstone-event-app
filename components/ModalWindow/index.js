import React from "react";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
`;

const ModalWrapper = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none ")};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: gray;
  padding: 5px;
  border-radius: 5px;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  margin: 10;
  border-radius: 5px;
`;

const StyledText = styled.p`
  font-size: 14px;
  font-weight: bold;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

export default function Modal({ isOpen, confirmMessage, onConfirm, onCancel }) {
  if (!isOpen) return null;

  return (
    <>
      <Overlay />
      <ModalWrapper isOpen={isOpen}>
        <ModalContent>
          <StyledText>{confirmMessage}</StyledText>
          <ButtonWrapper>
            <button onClick={onConfirm}>Yes,I am sure</button>
            <button onClick={onCancel}>Cancel</button>
          </ButtonWrapper>
        </ModalContent>
      </ModalWrapper>
    </>
  );
}
