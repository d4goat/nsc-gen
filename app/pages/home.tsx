import Navbar from "~/components/navbar";
import { Button } from "~/components/ui/button";
import type { Route } from "./+types/home";
import HeroSection from "~/components/landing/hero";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: 'Home | Nsc-Gen' }
    ]
}

const Home = () => {
    return (
        <main className="min-h-screen">
            <Navbar></Navbar>
            <HeroSection />
        </main>
    )
}

export default Home