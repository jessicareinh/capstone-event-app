import Head from "next/head";
import Navigation from "../Navigation";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>My Events</title>
      </Head>
      <header>
        <Navigation />
        <main>{children}</main>
      </header>
    </>
  );
}
