import Image from "next/legacy/image";
import notFound from "../asset/next-page/404-error-with.svg";

const NotFoundPage = () => {
  return (
    <div
      style={{
        width: "100%",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Image
        src={notFound}
        width={500}
        height={230}
        alt="image"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 30vw, 33vw"
      />
    </div>
  );
};

export default NotFoundPage;
