import Link from "next/link"
import { Button } from "./ui/button"


const Hero = () => {
    return (
        <section className="w-full h-full flex flex-col justify-center items-start p-10">
            <h1 className="text-4xl font-bold text-[var(--foreground)]">Ismail Haddad</h1>
            <p className="mt-4 max-w-fit text-lg text-[var(--muted-foreground) md:pe-2 md:overflow-hidden md:border-r-4 md:animate-typing md:whitespace-nowrap md:tracking-[.15em]">Front-End Developer | Next.js & Tailwind Enthusiast</p>
            <div className="mt-6">
                <Button
                    // className="mt-6 bg-[var(--primary)] text-[var(--primary-foreground)] px-4 py-2 rounded-lg shadow hover:bg-indigo-600"
                    asChild
                >
                    <Link href='#projects' >
                        View Projects
                    </Link>
                </Button>
                <Button
                    // className="mt-6 bg-[var(--primary)] text-[var(--primary-foreground)] px-4 py-2 rounded-lg shadow hover:bg-indigo-600"
                    asChild
                    variant='link'
                >
                    <Link href='#contact'>
                        Contact Me
                    </Link>
                </Button>
            </div>
        </section>
    )
}

export default Hero
