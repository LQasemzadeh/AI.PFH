"use client";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Introduction from "@/app/Components/Introduction";


export default function Home() {
    return (
        <div>
            <Hero />
            <About />
            <Introduction />
        </div>
    );
}
