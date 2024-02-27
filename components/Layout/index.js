import Navigation from "../Navigation";

export default function Layout({ children }) {
  return (
    <>
      <header>
        <Navigation />
        <main>{children}</main>
      </header>
    </>
  );
}
