"use client";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Introduction from "@/app/Components/Introduction";
import Technology from "@/app/Components/Technology";
import Assignments from "@/app/Components/Assignments";
import Tools from "@/app/Components/Tools";


export default function Home() {
    return (
        <div>
            <Hero />
            <About />
            <Introduction />
            <Technology />
            <Assignments />
            <Tools />
        </div>
    );
}
