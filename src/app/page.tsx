import Head from "next/head";

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>ZARaN IT | Home</title>
        <meta
          name="description"
          content="ZARaN IT provides software development, web development, content researching for youtube, SEO (Search Engine Optimization) and digital marketing."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="font-semibold">This home page</h1>
    </div>
  );
};

export default HomePage;
