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

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;

const Button = styled.button`
  background-color: ${(props) => (props.cancel ? "gray" : "slateblue")};
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
      <ModalWrapper isOpen={isOpen} aria-label="Confirmation Modal">
        <p>{confirmMessage}</p>
        <ButtonWrapper>
          {modalType === "success" ? (
            <Button onClick={onConfirm} aria-label="Confirm">
              OK
            </Button>
          ) : (
            <>
              <Button onClick={onConfirm} aria-label="Confirm">
                Yes
              </Button>
              <Button onClick={onCancel} aria-label="Cancel">
                Cancel
              </Button>
            </>
          )}
        </ButtonWrapper>
      </ModalWrapper>
    </>
  );
}
