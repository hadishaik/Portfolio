import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className="">
        <Script src={`https://smtpjs.com/v3/smtp.js`}></Script>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </>
  );
}
