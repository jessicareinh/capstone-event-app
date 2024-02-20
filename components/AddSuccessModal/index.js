import React from "react";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background-color: #2a2626ad;
`;
const ModalWrapper = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none ")};
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: whitesmoke;
  padding: 25px;
  border-radius: 5px;
  z-index: 1000;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const Button = styled.div`
  background-color: slateblue;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  cursor: pointer;
`;

const Paragraph = styled.p`
  text-align: center;
  font-family: Caveat;
  font-size: 14px;
  font-weight: bold;
`;

export default function AddSuccessModal({ isOpen, confirmMessage, onConfirm }) {
  if (!isOpen) return null;
  return (
    <>
      <Overlay />
      <ModalWrapper isOpen={isOpen}>
        <Paragraph>{confirmMessage}</Paragraph>
        <ButtonWrapper>
          <Button onClick={onConfirm}>OK</Button>
        </ButtonWrapper>
      </ModalWrapper>
    </>
  );
}
