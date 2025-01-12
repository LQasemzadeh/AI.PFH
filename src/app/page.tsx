"use client";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Introduction from "@/app/Components/Introduction";
import Technology from "@/app/Components/Technology";


export default function Home() {
    return (
        <div>
            <Hero />
            <About />
            <Introduction />
            <Technology />
        </div>
    );
}
