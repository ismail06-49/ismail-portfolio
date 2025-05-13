import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
    return (
        <section className="mt-16 text-center">
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <p className="mb-2">Let&#39;s build something great together.</p>
            <div className="flex justify-center gap-4">
                <Mail className="w-5 h-5" />
                <Linkedin className="w-5 h-5" />
                <Github className="w-5 h-5" />
            </div>
        </section>
    )
}

export default Contact
