import React from "react";
import { RiBootstrapLine, RiNextjsLine, RiJavascriptLine, RiReactjsLine, RiHtml5Line, RiCss3Line, RiTailwindCssLine, RiGithubLine, RiGitMergeLine } from "react-icons/ri";

const Skills = () => {

    const skills = [RiBootstrapLine, RiNextjsLine, RiJavascriptLine, RiReactjsLine, RiHtml5Line, RiCss3Line, RiTailwindCssLine, RiGithubLine, RiGitMergeLine];

    return (
        <div
            id="skills"
            className="w-full h-[300px] bg-[var(--card)] text-[var(--card-foreground)] flex overflow-hidden relative rounded-lg shadow-lg"
        >
            <h2 className="absolute top-1/3 right-1/2 translate-x-1/2 text-center text-2xl font-bold text-[var(--foreground)] border-t-4 rounded-3xl pt-2">
                Skills
                <span className="block text-sm font-medium text-[var(--muted-foreground)] mt-1">
                    (Technologies I use)
                </span>
            </h2>
            {skills.map((skill, index) => (
                <span
                    className="absolute animate-scrollSm md:animate-scroll"
                    key={index}
                    style={{
                    animationDelay: `${index * 1}s`, // Delay each element by 3 seconds
                    }}
                >
                    {React.createElement(skill, { className: "size-15 text-[var(--primary)]" })}
                </span>
            ))}
        </div>
    )
}

export default Skills
