import Image from "next/image";

export default function EventCard({
  title,
  image,
  date,
  location,
  width,
  height,
}) {
  return (
    <>
      <div>
        <Image src={image} alt={title} width={width} height={height} />
        <h2>{title}</h2>
        <p>{date}</p>
        <p>{location}</p>
      </div>
    </>
  );
}
