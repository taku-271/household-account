import Head from "next/head";
import { Box, Button, Heading } from "@yamada-ui/react";
import { GetServerSidePropsContext } from "next";
import { authServerSideProps } from "@/libs/auth";
import { UserPropsType } from "@/types/User";
import { useRouter } from "next/router";

export default function Home({ user }: UserPropsType) {
  const router = useRouter();

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
        <Box display="flex" gap="sm">
          <Button onClick={() => router.push("/calendar")}>カレンダー</Button>
          <Button onClick={() => (location.href = "http://localhost:3000/")}>
            認証へ戻る
          </Button>
        </Box>
      </main>
    </>
  );
}

export const getServerSideProps = (context: GetServerSidePropsContext) =>
  authServerSideProps(context);
