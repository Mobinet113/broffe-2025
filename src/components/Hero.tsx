/** @format */

import Heading from "./common/Heading";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

interface HeroProps {
    onAnimationEnd?: () => void;
}

export default function Hero({ onAnimationEnd }: HeroProps) {
    gsap.registerPlugin([useGSAP, ScrollTrigger]);

    const container = useRef<HTMLDivElement>(null);
    const firstLine = useRef<HTMLSpanElement>(null);
    const secondLine = useRef<HTMLSpanElement>(null);
    const myName = useRef<HTMLSpanElement>(null);
    const scrollHint = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline();

            tl.from(firstLine.current, {
                duration: 1.5,
                opacity: 0,
                ease: "power2.out",
                delay: 1,
            });

            tl.from(secondLine.current, {
                duration: 1.5,
                opacity: 0,
                ease: "power2.out",
            });

            tl.to(myName.current, {
                color: "pink",
                duration: 1.5,
                ease: "power2.out",
                onComplete: onAnimationEnd,
            });

            tl.to(scrollHint.current, {
                opacity: 1,
                duration: 1.5,
                ease: "power2.out",
            });

            gsap.to(firstLine, {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top top",
                    end: "bottom top",
                    markers: true,
                },
                x: "300px",
            });
        },
        { scope: container }
    );

    return (
        <div ref={container} className="hero h-screen flex items-center justify-center">
            <Heading type="h1">
                <span ref={firstLine} className="block">
                    Hey!
                </span>

                <span ref={secondLine}>
                    I'm <span ref={myName}>Ben.</span>
                </span>
            </Heading>

            <div
                ref={scrollHint}
                className="absolute bottom-0 left-0 right-0 mx-auto text-white text-center mt-auto text-sm opacity-0">
                <svg fill="#ffffff" version="1.1" className="w-5 mx-auto my-2" viewBox="0 0 407.437 407.437">
                    <polygon points="386.258,91.567 203.718,273.512 21.179,91.567 0,112.815 203.718,315.87 407.437,112.815 " />
                </svg>
            </div>
        </div>
    );
}
