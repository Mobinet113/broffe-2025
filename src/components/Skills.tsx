/** @format */

import Heading from "./common/Heading";

export default function Skills() {
    return (
        <div className="min-h-screen flex items-center justify-center p-10">
            <div className="max-w-[900px] text-2xl text-center">
                <Heading type="h2">Competencies</Heading>

                <p className="mb-10">
                    Working within agencies has given me the opportunity to work on a wide range of projects
                    and technologies. From turning beautiful, rich, XD designs into fully functional websites,
                    to developing dashboards and helpful tools.
                </p>
                <p className="mb-10">Here are some technologies I have experience with:</p>

                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-neutral-800 rounded-lg p-5 text-left">
                        <Heading type="h3">Frontend</Heading>
                        <ul className="list-disc ml-5">
                            <li>React</li>
                            <li>Angular</li>
                            <li>WordPress</li>
                            <li>GSAP</li>
                        </ul>
                    </div>
                    <div className="bg-neutral-800 rounded-lg p-5 text-left">
                        <Heading type="h3">Backend</Heading>
                        <ul className="list-disc ml-5">
                            <li>Node.js</li>
                            <li>Laravel</li>
                            <li>WordPress</li>
                            <li>GraphQL</li>
                        </ul>
                    </div>
                    <div className="bg-neutral-800 rounded-lg p-5 text-left">
                        <Heading type="h3">DevOps</Heading>
                        <ul className="list-disc ml-5">
                            <li>AWS</li>
                            <li>Google Cloud</li>
                            <li>Docker</li>
                            <li>Circle CI / Github Actions</li>
                        </ul>
                    </div>
                    <div className="bg-neutral-800 rounded-lg p-5 text-left">
                        <Heading type="h3">Databases</Heading>
                        <ul className="list-disc ml-5">
                            <li>MySQL</li>
                            <li>Firestore</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
