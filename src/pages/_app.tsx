import { AppProps } from "next/app";
import Image from "next/image";
import { globalStyles } from "yarn/styles/global";

import logoImg from "../assets/logo.svg";
import { Container, Header } from "yarn/styles/pages/app";
import Head from "next/head";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Ignite shop</title>
      </Head>
      <Container>
        <Header>
          <Image src={logoImg} alt="" />
        </Header>

        <Component {...pageProps} />
      </Container>
    </>
  );
}
