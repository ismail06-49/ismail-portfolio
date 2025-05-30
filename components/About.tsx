import React from 'react'
import Image from 'next/image'
import profilePic from '@/public/my-profile.jpg'
import { Code2 } from 'lucide-react'

const About = () => {
    return (
        <section className="mt-16 max-w-2xl mx-auto text-center bg-[var(--card)] text-[var(--card-foreground)] p-8 rounded-xl shadow">
            <div className="flex flex-col items-center gap-4">
                <Image
                    src={profilePic}
                    alt="My profile photo"
                    width={120}
                    height={120}
                    className="size-32 rounded-full shadow-lg object-cover"
                />
                <h2 className="flex flex-row justify-center items-center gap-2 text-2xl font-semibold mb-2">
                    <span>Haddad Ismail</span>
                    <Code2 />
                </h2>
                <p className="mb-4">
                    I&#39;m a passionate front-end developer specializing in modern web technologies like React, Next.js, and Tailwind CSS. I enjoy building beautiful, responsive interfaces and continuously learning new things.
                </p>
                <a
                    href="/Haddad-Ismail-CV.pdf"
                    download
                    className="inline-block bg-[var(--primary)] text-[var(--primary-foreground)] px-6 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
                >
                    Download CV
                </a>
            </div>
        </section>
    )
}

export default About