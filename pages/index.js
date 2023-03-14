import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Umair&apos;s Portfolio</title>
        <meta name="description" content="Umair's Front End Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-11/12 m-auto">
        <Header />
        <Projects />
      </main>
    </>
  );
}
