import styled from "styled-components";

const CatButton = styled.button`
  text-align: center;
  min-width: 70px;
  width: 25vw;
  max-width: 140px;
  height: 60px;
  margin: 10px;
  font-size: 1.1rem;
  border-radius: 4px;
  background-color: #5e5e5e;
  color: white;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #b18bbd;
  }
  @media (min-width: 501px) {
    font-size: 1.3rem;
  }
  @media (min-width:758px) {
    max-width: 120px;
    height: 50px;
    margin-top: 15px;
  }
`;

export default function CategoryButton({ onClick, children }) {
  return (
    <>
      <CatButton onClick={onClick}>{children}</CatButton>
    </>
  );
}
