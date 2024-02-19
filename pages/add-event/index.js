import EventForm from "@/components/EventForm";
import Link from "next/link";
import styled from "styled-components";
import router from "next/router";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;
`;

const PageTitle = styled.h1`
  text-align: center;
  margin: 30px 0;
  font-family: "Chakra Petch", sans-serif;
  font-weight: 700;
`;

const Nav = styled.nav`
  font-family: "Chakra Petch", sans-serif;
  display: flex;
  gap: 55px;
  font-size: 1.2rem;
  color: navy;
  margin-bottom: 30px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    text-decoration-color: #fda1de;
    text-decoration-thickness: 3px;
  }
`;

const BackLink = styled.button`
  font-size: 1.2rem;
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
  color: navy;
  &:hover {
    text-decoration: underline;
    text-decoration-color: #fda1de;
    text-decoration-thickness: 3px;
  }
`;

export default function MyEvents({ onAddEvent }) {
  return (
    <>
      <Wrapper>
        <PageTitle>Add your Events</PageTitle>
        <Nav>
          <BackLink onClick={() => router.back()}>◄ Back</BackLink>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/my-events">My Events</NavLink>
        </Nav>
        <EventForm onAddEvent={onAddEvent} />
      </Wrapper>
    </>
  );
}
