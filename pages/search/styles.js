import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  margin: 20px;
`;

export const Input = styled.input`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  flex-grow: 1;
  margin-right: 1rem;

  &:focus {
    outline: none;
    border-color: #999;
  }
`;

export const Button = styled.button`
  padding: 1rem 1.5rem;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #222;
  }
`;

export const ResultAmount = styled.div`
  margin-top: 1rem;
  text-align: center;
`;