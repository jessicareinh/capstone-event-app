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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: left;
  font-size: 20px;
  line-height: 1.6;
  background-color: #f5f5f5;
  padding: 100px;
  width: 100%;

  flex-direction: column;
  border-radius: 5px;
  z-index: 1000;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 20px;
  align-items: center;
`;

const Button = styled.button`
  background-color: ${(props) => (props.cancel ? "gray" : "#531f7a")};
  color: #f5f5f5;
  border: none;
  border-radius: 5px;
  padding: 15px 20px;
  height: 50px;
  cursor: pointer;
  font-size: 90%;
`;

export default function Modal({
  isOpen,
  modalType,
  confirmMessage,
  onConfirm,
  onCancel,
}) {
  const handleConfirm = () => {
    onConfirm();
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <>
      {isOpen && <Overlay />}
      <ModalWrapper isOpen={isOpen}>
        <p>{confirmMessage}</p>
        <ButtonWrapper>
          {modalType === "success" ? (
            <Button onClick={onConfirm}>OK</Button>
          ) : (
            <>
              <Button onClick={onConfirm}>Yes</Button>
              <Button onClick={onCancel}>Cancel</Button>
            </>
          )}
        </ButtonWrapper>
      </ModalWrapper>
    </>
  );
}
