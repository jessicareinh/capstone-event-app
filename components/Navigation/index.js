import { useState } from "react";
import styled, { keyframes } from "styled-components";
import Image from "next/image";

const NavBar = styled.nav`
  background-color: #fff;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
  width: 100vw;
  padding: 0 10px;
`;

const Li = styled.li`
  height: 60px;
  margin-right: 10px;
  &:first-child {
    margin-right: auto;
    font-size: 2.5rem;
    font-weight: 600;
  }
`;

const SideBarItem = styled(Li)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavMenu = styled.nav`
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  white-space: nowrap;
  @media (max-width: 550px) {
    li:not(:first-child):not(:last-child) {
      display: none;
    }
  }
  @media (min-width: 551px) {
    svg {
      display: none;
    }
  }
`;

const NavLink = styled.a`
  width: 100%;
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

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
  animation: ${fadeIn} 0.3s ease forwards;
  display: ${(props) => (props.$visible ? "block" : "none")};
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 50vw;
  z-index: 999;
  background-color: #fff;
  box-shadow: -10px 0 10px rgba(0, 0, 0, 0.1);
  display: ${(props) => (props.$visible ? "block" : "none")};
  flex-direction: column;
  animation: ${slideIn} 0.3s ease forwards;
`;

export default function Navigation() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  function toggleSidebar() {
    setSidebarVisible(!sidebarVisible);
  }

  function handleLinkClick() {
    setSidebarVisible(false);
  }

  return (
    <NavBar>
      <Overlay $visible={sidebarVisible} onClick={toggleSidebar} />
      <Sidebar $visible={sidebarVisible}>
        <SideBarItem onClick={toggleSidebar} aria-label="Open sidebar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="26"
            viewBox="0 -960 960 960"
            width="26"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </SideBarItem>
        <SideBarItem>
          <NavLink href="/" onClick={handleLinkClick}>
            Home
          </NavLink>
        </SideBarItem>
        <SideBarItem>
          <NavLink href="/search" onClick={handleLinkClick}>
            Search
          </NavLink>
        </SideBarItem>
        <SideBarItem>
          <NavLink href="/my-events" onClick={handleLinkClick}>
            My Events
          </NavLink>
        </SideBarItem>
        <SideBarItem>
          <NavLink href="/favorites" onClick={handleLinkClick}>
            Favorites
          </NavLink>
        </SideBarItem>
      </Sidebar>
      <NavMenu>
        <Li>
          <NavLink href="/">E</NavLink>
        </Li>
        <Li>
          <NavLink href="/search">Search</NavLink>
        </Li>
        <Li>
          <NavLink href="/favorites">Favorites</NavLink>
        </Li>
        <Li>
          <NavLink href="/my-events">My Events</NavLink>
        </Li>

        <Li onClick={toggleSidebar} aria-label="Close sidebar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="50"
            viewBox="0 -960 960 960"
            width="50"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </Li>
      </NavMenu>
    </NavBar>
  );
}
