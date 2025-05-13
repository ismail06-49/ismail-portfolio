import Link from "next/link"
import { Button } from "./ui/button"


const Hero = () => {
    return (
        <section className="mx-10 mt-14 p-10">
            <h1 className="text-4xl font-bold text-[var(--foreground)]">Ismail</h1>
            <p className="mt-4 text-lg text-[var(--muted-foreground)">Front-End Developer | Next.js & Tailwind Enthusiast</p>
            <div className="mt-6">
                <Button
                    className="mt-6 bg-[var(--primary)] text-[var(--primary-foreground)] px-4 py-2 rounded-lg shadow hover:bg-indigo-600"
                    asChild
                >
                    <Link href='#projects' >
                        View Projects
                    </Link>
                </Button>
                <Button
                    className="mt-6 bg-[var(--primary)] text-[var(--primary-foreground)] px-4 py-2 rounded-lg shadow hover:bg-indigo-600"
                    asChild
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
