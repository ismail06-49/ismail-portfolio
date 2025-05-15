import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Landing from '@/public/landing-page.png';

const Projects = () => {
    return (
        <section className="mt-16">
            <h2 className="text-2xl font-semibold text-center mb-8">Projects</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {/* Create a Card component to reuse it */}
                <Card>
                    <CardContent className="p-4">
                        <Image src={Landing} alt="Project 1" className="rounded-xl mb-2" />
                        <h3 className="text-lg font-bold">NightPharm</h3>
                        <p className="text-sm">A pharmacy locator with night guard info using Next.js + Map API.</p>
                        <div className="flex gap-2 mt-2">
                            <Button size="sm">Demo</Button>
                            <Button variant="outline" size="sm">GitHub</Button>
                        </div>
                    </CardContent>
                </Card>
            {/* Add more projects here */}
            </div>
        </section>
    )
}

export default Projects
