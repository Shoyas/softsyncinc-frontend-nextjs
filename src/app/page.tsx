/*
import HomeContainerPage from "@/components/ui/HomeUi/HomeContainer";
import Head from "next/head";

const HomePage = () => {
  
  return (
    <div>
      <Head>
        <title>SoftSync INC | Home</title>
        <meta
          name="description"
          content="SoftSync INC provides software development, web development, content researching for youtube, SEO (Search Engine Optimization) and digital marketing."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeContainerPage />
    </div>
  );
};


export default HomePage;
*/

import HomeContainerPage from "@/components/ui/HomeUi/HomeContainer";
import Head from "next/head";
import { headers } from "next/headers";
import { NextApiResponse } from "next";

const HomePage = ({ res }: { res: NextApiResponse }) => {
  let ip = "127.0.0.1";
  if (res) {
    const header = headers();
    ip = (header.get("x-forwarded-for") ?? "127.0.0.1").split(",")[0];
  }

  return (
    <div>
      <Head>
        <title>SoftSync INC | Home</title>
        <meta
          name="description"
          content="SoftSync INC provides software development, web development, content researching for youtube, SEO (Search Engine Optimization) and digital marketing."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeContainerPage ip={ip} />
    </div>
  );
};

HomePage.getInitialProps = ({ res }: { res: NextApiResponse }) => {
  return { res };
};

export default HomePage;
