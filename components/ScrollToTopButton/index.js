import { useState, useEffect } from "react";
import { BsFillRocketFill } from "react-icons/bs";
import styled from "styled-components";

const ScrollButton = styled.button`
  position: fixed;
  bottom: 8vh;
  right: 30px;
  z-index: 99;
  font-size: 24px;
  background: #d1c4e9;
  color: #f5f5f5;
  cursor: pointer;
  border-radius: 100%;
  font-size: 30px;
  border: 0;
  width: 50px;
  height: 50px;

  border-color: #f5f5f5;

  :hover {
    background: #d1c4e9;
  }
`;

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showButton && (
        <ScrollButton onClick={scrollToTop}>
          <BsFillRocketFill />
        </ScrollButton>
      )}
    </>
  );
};

export default ScrollToTopButton;
