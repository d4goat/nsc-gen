import Navbar from "~/components/navbar";
import { Button } from "~/components/ui/button";
import type { Route } from "./+types/home";
import HeroSection from "~/components/landing/hero";
import FeatureSection from "~/components/landing/features";
import HowItWorksSection from "~/components/landing/how-it-works";
import TestiomonialSection from "~/components/landing/testimonials";
import CTASection from "~/components/landing/cta-section";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: 'Home | Nsc-Gen' }
    ]
}

const Home = () => {
    return (
        <main className="min-h-screen">
            <HeroSection />
            <FeatureSection />
            <HowItWorksSection />
            <TestiomonialSection />
            <CTASection />
        </main>
    )
}

export default Home