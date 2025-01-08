/** @format */

import GradSpan from "./common/GradSpan";

export default function Intro() {
    // Function to get the number of years between 2017
    // (When I started at my first agency) and the current year.
    function getYears(): number {
        return new Date().getFullYear() - 2016;
    }

    return (
        <div className="min-h-screen flex items-center justify-center p-10">
            <div className="max-w-[900px] text-2xl text-center">
                <p>
                    I'm a <GradSpan>Full-stack Website Developer</GradSpan> with over {getYears()} years of
                    commercial experience working within creative and marketing agencies across a multitude of
                    sectors.
                </p>
            </div>
        </div>
    );
}
