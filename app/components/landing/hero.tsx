import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ArrowRight, Sparkles, Star, Zap } from "lucide-react";
import { linearBgClass, SaweriaButtonClass } from "~/lib/utils";
import { Link } from "react-router";

const HeroSection = () => {
    return (
        <section className="relative min-h-screen py-28 md:py-24 overflow-hidden">
            <div className="absolute inset-0 bg-linear-[135deg] from-purple-100 via-pink-100 to-yellow-50" />

            <motion.div
                animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-24 md:top-32 left-[10%] w-16 h-16 rounded-xl bg-theme-primary border-2 border-foreground shadow-saweria"
            />

            <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-52 md:top-48 right-[10%] md:right-[15%] w-12 h-12 rounded-full bg-theme-secondary border-2 border-foreground shadow-saweria"
            />
            <motion.div
                animate={{ y: [-15, 15, -15], rotate: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-40 left-[15%] w-10 h-10 rounded-lg bg-theme-accent border-2 border-foreground shadow-saweria"
            />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 pt-20 lg:pt-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 text-center lg:text-left"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 border-2 border-foreground shadow-[3px_3px_0_0_hsl(var(--foreground))] mb-6"
                        >
                            <Sparkles className="w-4 h-4 text-primary" />
                            <span className="text-sm font-bold text-foreground">AI-Powered CV Generator</span>
                        </motion.div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight lg:mx-0 mb-8 font-black purple-800">
                            Create Your Perfect {" "}
                            <span className="text-theme-primary">Professional CV</span> {" "}
                            in Minutes
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
                            Stand out from the crowd with AI-crafted resumes. Our smart templates and personalized suggestions help you land your dream job faster.
                        </p>

                        {/* CTA Button */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button className={`${linearBgClass} text-muted 
                            shadow-saweria border-2 border-black text-lg font-bold ${SaweriaButtonClass}`} size={'xl'}>Start Building Free <ArrowRight /></Button>
                            <Link to="/templates"><Button className={`bg-muted text-primary hover:bg-muted shadow-saweria border-2 border-black text-lg font-bold 
                                ${SaweriaButtonClass}`} size={'xl'}>See Templates</Button></Link>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-wrap gap-8 mt-12 justify-center lg:justify-start"
                        >
                            {[
                                { value: "10K+", label: 'CVs Created' },
                                { value: "95%", label: 'Success Rate' },
                                { value: "4.9★", label: 'User Rating' },
                            ].map(stat =>
                            (
                                <div key={stat.label} className="text-center lg:text-left">
                                    <div className="text-2xl md:text-3xl font-extrabold text-theme-primary">{stat.value}</div>
                                    <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
                                </div>
                            )
                            )}
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex-1 relative"
                    >
                        <div className="relative">
                            {/* Main CV Card */}
                            <motion.div
                                animate={{ y: [-5, 5, -5] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="relative z-10 bg-card top-8 rounded-2xl p-6 border-2 border-foreground shadow-[6px_6px_0_0_hsl(var(--foreground))]"
                            >
                                <div className="flex items-start gap-4 mb-6">
                                    <div className={`w-16 h-16 rounded-xl ${linearBgClass} border-2 border-foreground flex items-center justify-center text-primary-foreground font-bold text-xl shadow-saweria`}>
                                        JD
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">John Doe</h3>
                                        <p className="text-muted-foreground text-sm">Senior Software Engineer</p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="h-3 bg-muted rounded-full w-full border border-foreground/20" />
                                    <div className="h-3 bg-muted rounded-full w-4/5 border border-foreground/20" />
                                    <div className="h-3 bg-muted rounded-full w-3/4 border border-foreground/20" />

                                    <div className="pt-4">
                                        <div className="text-xs font-bold text-muted-foreground mb-2">SKILLS</div>
                                        <div className="flex flex-wrap gap-2">
                                            {["React", "TypeScript", "Node.js", "Python"].map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="px-3 py-1 rounded-lg bg-primary/10 border-2 border-foreground text-foreground text-xs font-bold shadow-[2px_2px_0_0_rgba(0,0,0,1)]"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Floating Cards */}
                            <motion.div
                                animate={{ y: [0, -10, 0], rotate: [-2, 2, -2] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-10 md:-top-20 -right-4 bg-theme-secondary rounded-xl p-4 border-2 border-foreground shadow-saweria"
                            >
                                <div className="flex items-center gap-2">
                                    <Zap className="w-5 h-5 text-secondary-foreground" />
                                    <span className="text-sm font-bold text-secondary-foreground">AI Enhanced</span>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 10, 0], rotate: [1, -1, 1] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                className="absolute -bottom-24 md:-bottom-20 -left-6 bg-theme-accent rounded-xl p-4 border-2 border-foreground shadow-saweria"
                            >
                                <div className="flex items-center gap-2">
                                    <Star className="w-5 h-5 text-muted fill-muted" />
                                    <span className="text-sm font-bold text-muted">ATS Optimized</span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Wave */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" fill="none" className="w-full">
                    <path
                        d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
                        fill="#ffffff"
                    />
                </svg>
            </div>
        </section >
    )
}

export default HeroSection