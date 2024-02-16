import Image from "next/image.js";
import styled from "styled-components";

const Button = styled.button`
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  z-index: 1;
  background: ${(props) =>
    props.$isFavorite
      ? "linear-gradient(to right, yellow, lightcoral)"
      : "white"};
  border: 3px solid black;
  border-radius: 50%;
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
  overflow: hidden;
  transition: background-color 0.3s ease, transform 0.3s ease;
  &:active {
    transform: scale(1.2);
  }
`;

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <Button type="button" onClick={onToggleFavorite} $isFavorite={isFavorite}>
      <Image src="/star-1.png" width={30} height={30} alt="" />
    </Button>
  );
}
