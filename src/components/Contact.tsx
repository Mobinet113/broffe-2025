/** @format */

import GradSpan from "./common/GradSpan";
import Heading from "./common/Heading";

export default function Contact() {
    return (
        <div className="min-h-screen flex items-center justify-center p-10">
            <div className="text-center max-w-[900px]">
                <Heading type="h2">Get in touch</Heading>

                <div className="grid sm:grid-cols-2 gap-10 text-2xl items-center mt-10">
                    <a
                        href="/Benjamin-Roffe.pdf"
                        target="_blank"
                        className="btn border border-solid border-white inline-block w-fit mx-auto px-5 py-2 rounded-xl">
                        Download my CV
                    </a>

                    <p>
                        Or email me at{" "}
                        <a href="mailto:hello@broffe.com">
                            <GradSpan>hello@broffe.com</GradSpan>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
