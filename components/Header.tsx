import { Code2 } from "lucide-react"
import Link from "next/link"

const Header = () => {
    return (
        <nav className="flex items-center justify-between p-4 rounded-lg">
            <Code2  className='text-[var(--primary)] animate-fade-in size-24' />
            <ul className="flex space-x-4 text-white text-lg font-medium">
                <li className="hover:text-[var(--primary)] cursor-pointer transition duration-300 ease-in-out transform hover:scale-110">
                    <Link href='#home'>Home</Link>
                </li>
                <li className="hover:text-[var(--primary)] cursor-pointer transition duration-300 ease-in-out transform hover:scale-110">
                    <Link href='#about'>About Me</Link>
                </li>
                <li className="hover:text-[var(--primary)] cursor-pointer transition duration-300 ease-in-out transform hover:scale-110">
                    <Link href='#projects'>Projects</Link>
                </li>
                <li className="hover:text-[var(--primary)] cursor-pointer transition duration-300 ease-in-out transform hover:scale-110">
                    <Link href='#skills'>Skills</Link>
                </li>
                <li className="hover:text-[var(--primary)] cursor-pointer transition duration-300 ease-in-out transform hover:scale-110">
                    <Link href='#contact'>Contact Me</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header
