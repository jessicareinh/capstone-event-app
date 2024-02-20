import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";

const NavBar = styled.nav`
  background-color: #fff;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
  width: 100vw;
  padding: 0 10px;
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 50vw;
  z-index: 999;
  background-color: #ffffff4b;
  box-shadow: -10px 0 10px rgba(0, 0, 0, 0.1);
  display: ${(props) => (props.visible ? "flex" : "none")};
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  list-style: none;
  backdrop-filter: blur(10px);
  @media (max-width: 400px) {
    width: 50%;
  }
`;

const Li = styled.li`
  height: 50px;
  &:first-child {
    margin-right: auto;
    font-size: 2.2rem;
    font-weight: 600;
  }
`;

const Li_side = styled(Li)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Ul = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 500px) {
    li:not(:first-child):not(:last-child) {
      display: none;
    }
  }
  @media (min-width: 501px) {
    svg {
      display: none;
    }
  }
`;

const StyledLink = styled(Link)`
  height: 100%;
  padding: 0 30px;
  text-decoration: none;
  display: flex;
  align-items: center;
  color: black;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export default function Navigation() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  function showSidebar() {
    setSidebarVisible(!sidebarVisible);
  }

  function hideSidebar() {
    setSidebarVisible(!sidebarVisible);
  }

  return (
    <NavBar>
      <Sidebar visible={sidebarVisible}>
        <Li_side onClick={hideSidebar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="26"
            viewBox="0 -960 960 960"
            width="26"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </Li_side>
        <Li_side>
          <StyledLink href="/">Home</StyledLink>
        </Li_side>
        <Li_side>
          <StyledLink href="/my-events">My Events</StyledLink>
        </Li_side>
        <Li_side>
          <StyledLink href="/favorites">Favorites</StyledLink>
        </Li_side>
      </Sidebar>
      <Ul>
        <Li>
          <StyledLink href="/">E</StyledLink>
        </Li>
        <Li>
          <StyledLink href="/">Home</StyledLink>
        </Li>
        <Li>
          <StyledLink href="/favorites">Favorites</StyledLink>
        </Li>
        <Li>
          <StyledLink href="/my-events">My Events</StyledLink>
        </Li>

        <Li onClick={showSidebar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="50"
            viewBox="0 -960 960 960"
            width="50"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </Li>
      </Ul>
    </NavBar>
  );
}
