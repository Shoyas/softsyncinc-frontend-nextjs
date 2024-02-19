import Image from "next/image";


const WorkCard = (props: any) => {
    const { title, shortDescription, image } = props.project;

    return (
        <div
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            className="bg-gradient-to-br from-[#0C5ADB] via-[#453F41] to-[#0C5ADB] rounded-3xl p-7"
        >
            <div className="h-96 transition-all">
                <Image
                    className="w-full h-full ease-in-out duration-[5s] rounded-2xl object-top object-cover hover:object-bottom"
                    src={image}
                    alt={title}
                />
            </div>
            <div className="group flex items-center justify-between mt-3">
                <div className="">
                    <h2 className="text-sm text-[#BCBCBC]">{title}</h2>
                    <p className="text-white text-2xl font-medium">{shortDescription}</p>
                </div>
            </div>
        </div>
    );
};

export default WorkCard;