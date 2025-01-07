/** @format */

import Heading from "./common/Heading";

const projects = [
    {
        name: "Bunker",
        img: "bunker.png",
        tech: ["WordPress", "GSAP"],
    },
    {
        name: "Celadin",
        img: "celadin.png",
        tech: ["WordPress"],
    },
    {
        name: "Digiplex",
        img: "digiplex.png",
        tech: ["WordPress", "GSAP"],
    },
    {
        name: "Lifschutz Davidson Sandilands",
        img: "lds-uk.png",
        tech: ["Headless WordPress", "React"],
    },
    {
        name: "Now|Rankr",
        img: "nowrankr.png",
        tech: ["React", "AWS Serverless"],
    },
    {
        name: "Silver Agency",
        img: "silver.png",
        tech: ["WordPress", "GSAP"],
    },
    {
        name: "Zero Carbon Project",
        img: "zcp-market.png",
        tech: ["Laravel"],
    },
    {
        name: "Reed Professional Services",
        img: "reedps.png",
        tech: ["WordPress", "GSAP", "Tailwind CSS"],
    },
    {
        name: "Nourish Care",
        img: "nourish.png",
        tech: ["WordPress", "GSAP", "Tailwind CSS"],
    },
    {
        name: "Student Group Claim",
        img: "sgc.png",
        tech: ["WordPress", "GSAP"],
    },
    {
        name: "Nosto",
        img: "nosto.png",
        tech: ["WordPress", "GSAP", "Tailwind CSS"],
    },
];
export default function Portfolio() {
    return (
        <div className="p-10 text-center">
            <Heading type="h2">Portfolio</Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project) => (
                    <div className="relative bg-neutral-800 rounded-lg overflow-hidden" key={project.name}>
                        <img
                            src={`/portfolio/${project.img}`}
                            alt={project.name}
                            className="object-cover object-top aspect-video w-full"
                        />

                        <div className="absolute inset-0 bg-black bg-opacity-75 opacity-0 hover:opacity-100 transition-opacity p-10 text-left">
                            <div className="text-white">
                                <p className="text-xl font-bold">{project.name}</p>

                                <p className="mt-4 font-semibold">Technologies used:</p>
                                <ul className="">
                                    {project.tech.map((t) => (
                                        <li key={t}>{t}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
