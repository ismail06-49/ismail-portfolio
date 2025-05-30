'use client';

import { useState } from "react";
import Image from "next/image";
import Landing from '@/public/landing-page.png';
import Store from '@/public/store.png';
import Bee from '@/public/bee-baraka.png';
import Fight from '@/public/fight-like-a-champion.png';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const projects = [
    {
        title: "Landing Page",
        desc: "A modern, responsive landing page designed to capture leads and showcase your brand. Built with Next.js and Tailwind CSS for fast performance and easy customization.",
        image: Landing,
        demo: "#",
        github: "#",
    },
    {
        title: "Store",
        desc: "An e-commerce web application featuring product listings, a shopping cart, and secure checkout. Developed with a focus on user experience and seamless transactions.",
        image: Store,
        demo: "#",
        github: "#",
    },
    {
        title: "Bee Baraka",
        desc: "A platform for beekeepers and honey lovers. Bee Baraka connects local producers with customers, offering product catalogs, order management, and educational resources.",
        image: Bee,
        demo: "#",
        github: "#",
    },
    {
        title: "Figh like a champion",
        desc: "A platform for beekeepers and honey lovers. Bee Baraka connects local producers with customers, offering product catalogs, order management, and educational resources.",
        image: Fight,
        demo: "#",
        github: "#",
    },
];

const Projects = () => {
    const [selected, setSelected] = useState(0);

    return (
        <section className="w-full flex flex-col items-center py-16">
            {/* Main project detail */}
            <div className="bg-[var(--card)] text-[var(--card-foreground)] rounded-xl shadow-lg p-8 max-w-4xl w-full h-full min-h-96 flex flex-row items-center gap-3 mb-8 transition-all duration-300">
                <Card>
                    <CardContent className="flex flex-col items-center gap-3 p-4">
                        <Image
                            src={projects[selected].image}
                            alt={projects[selected].title}
                            className="rounded-xl mb-2"
                        />
                        <h3 className="text-lg font-bold">{projects[selected].title}</h3>
                        <p className="text-sm text-center w-[80%]">{projects[selected].desc}</p>
                        <div className="flex gap-2 mt-2">
                            <Button size="sm">
                                <Link href={projects[selected].demo} target="_blank" rel="noopener noreferrer">Demo</Link>
                            </Button>
                            <Button variant="outline" size="sm">
                                <Link href={projects[selected].github} target="_blank" rel="noopener noreferrer">GitHub</Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4 flex-wrap justify-center">
                {projects.map((project, idx) => (
                    <button
                        key={idx}
                        onClick={() => setSelected(idx)}
                        className={`rounded-lg border-2 transition-all duration-200
                        ${idx === selected
                            ? "border-[var(--primary)] scale-105 shadow-lg"
                            : "border-transparent opacity-70 hover:opacity-100 hover:scale-105"}
                        `}
                        aria-label={project.title}
                    >
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={70}
                            height={50}
                            className="rounded-md object-cover"
                        />
                    </button>
                ))}
            </div>
        </section>
    );
};

export default Projects;