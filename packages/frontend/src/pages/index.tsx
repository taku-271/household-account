import Head from "next/head";
import { Button, Heading } from "@yamada-ui/react";
import { GetServerSidePropsContext } from "next";
import { authServerSideProps } from "@/libs/auth";
import { UserPropsType } from "@/types/User";

export default function Home({ user }: UserPropsType) {
  return (
    <>
      <Head>
        <title>家計簿</title>
        <meta name="description" content="家計簿をつけるアプリ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Heading as="h1" size="4xl">
          Hello {user.name}!
        </Heading>
        <Button onClick={() => (location.href = "http://localhost:3000/")}>
          認証へ戻る
        </Button>
      </main>
    </>
  );
}

export const getServerSideProps = (context: GetServerSidePropsContext) =>
  authServerSideProps(context);
