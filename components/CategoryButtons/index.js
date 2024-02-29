import styled from "styled-components";

const CatButton = styled.button`
  flex: 1 0 auto;
  text-align: center;
  min-width: 70px;
  width: 25%;
  height: 40px;
  font-size: 1.1rem;
  border-radius: 4px;
  background-color: ${(props) => (props.active ? "#b18bbd" : "#5e5e5e")};
  color: white;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #b18bbd;
  }
  @media (min-width: 501px) {
    font-size: 1.2rem;
    max-width: 135px;
  }
  @media (min-width: 758px) {
    max-width: 100px;
    height: 40px;
  }
`;

export default function CategoryButton({ onClick, children, active }) {
  return (
    <CatButton $active={active} onClick={onClick}>
      {children}
    </CatButton>
  );
}
