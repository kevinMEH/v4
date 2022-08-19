import Image, { StaticImageData } from "next/image";

const ProjectCard = 
({ image, imageAlt, title, text, href }: 
{ image: string | StaticImageData | { default: StaticImageData }, imageAlt: string, title: string, text: string, href: string }) => {
    return(
    <a className="flex space-x-3 cursor-pointer border-off-white border-[1.5px] rounded-xl p-3" href={href}>
        <div className="relative h-[18%] w-[18%] max-w-[64px] flex-none">
            <div className="pb-[100%] w-full" />
            <div className="absolute bg-transparent dark:bg-off-black !bg-opacity-25 w-full h-full z-10" />
            <Image src={image} alt={imageAlt} className="rounded-lg" layout="fill" objectFit="cover" priority={false} />
        </div>
        <div>
            <h2 className="font-mono font-semibold leading-snug text-main-light dark:text-main-dark">{ title }</h2>
            <p className="font-mono text-xs leading-snug text-sub-light dark:text-sub-dark">{ text }</p>
        </div>
    </a>
    )
}

export default ProjectCard;