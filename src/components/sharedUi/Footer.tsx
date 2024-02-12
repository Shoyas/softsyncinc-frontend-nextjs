import Link from "next/link";


const Footer = () => {
    return (
        <div className="mt-20 mx-3">
            <Link href="/" className="flex flex-col items-center justify-center">
                <h1 className="text-5xl font-semibold text-center text-[#0C5ADB]">
                    ZARaN IT
                </h1>
            </Link>
            <div className="flex flex-col items-center justify-center mt-5 mb-3">
                <h4 className="text-sm text-center text-[#453F41]">
                    Copyright © {new Date().getFullYear()} - All right reserved by{" "}
                    <span className="text-[#0C5ADB] underline">
                        <Link href="/">ZARaN IT</Link>
                    </span>
                </h4>
            </div>
        </div>
    );
};

export default Footer;
