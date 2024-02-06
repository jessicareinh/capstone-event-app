import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export default function EventDetails(
  title,
  location,
  date,
  image,
  category,
  time,
  genre,
  address,
  postalCode
) {
  return (
    <>
      <h1>Details</h1>
      <Image src={image}></Image>
      <ul>
        <li>{title}</li>
        <li>{location}</li>
        <li>{date}</li>
        <li>{category}</li>
        <li>{time}</li>
        <li>{genre}</li>
        <li>{address}</li>
        <li>{postalCode}</li>
      </ul>
    </>
  );
}
