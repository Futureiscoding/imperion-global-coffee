import Head from "next/head";
import "@/styles/globals.css";
import Layout from "@/components/Layout";
import PlaceholderBanner from "@/components/PlaceholderBanner";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0E4F36" />
        <link rel="icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </Head>
      <Layout>
        <PlaceholderBanner items={["verified grades and varieties", "verified sourcing regions", "minimum order and payment terms"]} />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
