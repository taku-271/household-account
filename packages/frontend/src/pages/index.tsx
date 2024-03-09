import Head from "next/head";
import { Heading } from "@yamada-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>家計簿</title>
        <meta name="description" content="家計簿をつけるアプリ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Heading as="h1" size="4xl">
          Hello World!
        </Heading>
      </main>
    </>
  );
}
