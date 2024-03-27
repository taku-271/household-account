import { GetServerSideProps } from "next";
import { decode, JWT } from "next-auth/jwt";

type HomeProps = {
  user: JWT;
};

export const authServerSideProps: GetServerSideProps<HomeProps> = async (
  context
) => {
  const sessionToken = context.req.cookies["next-auth.session-token"];

  const decoded = await decode({
    token: sessionToken,
    secret: process.env.NEXTAUTH_SECRET || "",
  });

  if (!decoded?.name) {
    return {
      redirect: {
        permanent: false,
        destination: `http://localhost:3000/auth/signin`,
      },
    };
  }

  return {
    props: { user: decoded || null },
  };
};
