/** @format */

import Hero from "./components/Hero";
import Intro from "./components/Intro";
import { useState } from "react";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";

function App() {
    const [lockScroll, setLockScroll] = useState(false);

    return (
        <div className={`bg-neutral-900 text-white ${lockScroll ? "overflow-hidden h-screen" : ""}`}>
            <Hero onAnimationEnd={() => setLockScroll(false)} />
            <Intro />
            <Skills />
            <Portfolio />
        </div>
    );
}

export default App;
