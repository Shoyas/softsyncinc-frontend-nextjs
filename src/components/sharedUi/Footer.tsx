import Link from "next/link";


const Footer = () => {
    return (
        <div className="mt-28 px-3 lg:px-0 mb-10">
            <Link href="/" className="flex flex-col items-center justify-center">
                <p className="md:text-5xl text-3xl font-bold text-center text-blue">
                    ZARaN IT
                </p>
            </Link>
            <div className="flex flex-col items-center justify-center my-2">
                <p className="text-sm text-center text-gray font-bold">
                    Copyright © {new Date().getFullYear()} - All right reserved by{" "}
                    <span>
                        <Link className="text-blue underline font-bold" href="/">ZARaN IT</Link>
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Footer;
