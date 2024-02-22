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
