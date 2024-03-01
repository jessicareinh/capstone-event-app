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
  display: ${(props) => (props.$isOpen ? "block" : "none ")};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: left;
  font-size: 1.2rem;

  background-color: #f5f5f5;
  padding: 50px;
  width: 90vw;

  flex-direction: column;
  border-radius: 5px;
  z-index: 1000;
  @media (min-width: 501px) {
    max-width: 500px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  max-width: 200px;
  margin-top: 20px;
`;

const Button = styled.button`
  background-color: ${(props) => (props.cancel ? "gray" : "#756ab6")};
  color: #f5f5f5;
  border: none;
  border-radius: 5px;
  width: 70px;
  height: 40px;
  margin: 10px;
  cursor: pointer;
  font-size: 1rem;
`;

export default function Modal({
  isOpen,
  modalType,
  confirmMessage,
  onConfirm,
  onCancel,
}) {
  return (
    <>
      {isOpen && <Overlay />}
      <ModalWrapper $isOpen={isOpen} aria-label="Confirmation Modal">
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
