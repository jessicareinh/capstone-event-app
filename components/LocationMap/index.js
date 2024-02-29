export default function Map({ lat, lon }) {
  return (
    <>
      <iframe
        src={`https://maps.google.com/maps?q=${lat},${lon}&z=16&output=embed`}
        width="100%"
        height="50%"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="google map"
        aria-label="Google Map with location coordinates"
      ></iframe>
    </>
  );
}
