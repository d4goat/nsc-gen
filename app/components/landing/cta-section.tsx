import { motion } from "framer-motion";
import { Button } from "~/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { heroBgClass, linearBgClass, SaweriaButtonClass } from "~/lib/utils";

const CTASection = () => {
    return (
        <section className={`py-24 relative overflow-hidden ${heroBgClass}`}>
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className={`relative rounded-2xl ${linearBgClass} p-8 md:p-16 border-2 border-foreground shadow-[8px_8px_0_0_rgba(0,0,0,1)] overflow-hidden`}
                >
                    {/* Decorative Elements */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute top-8 right-8 w-12 h-12 rounded-xl bg-white/20 border-2 border-white/30"
                    />
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="absolute bottom-8 left-8 w-8 h-8 rounded-full bg-white/20 border-2 border-white/30"
                    />

                    <div className="relative z-10 text-center max-w-2xl mx-auto">
                        {/* Icon */}
                        <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-white/20 border-2 border-white/30 mb-6"
                        >
                            <Sparkles className="w-8 h-8 text-primary-foreground" />
                        </motion.div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-4">
                            Ready to Build Your Perfect CV?
                        </h2>

                        <p className="text-lg text-primary-foreground/80 mb-8 max-w-lg mx-auto">
                            Join 1,000+ professionals who've already landed their dream jobs with NSC-GEN.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button className={`text-black bg-muted hover:bg-muted 
                            shadow-saweria border-2 border-black text-lg font-bold ${SaweriaButtonClass}`} size={'xl'}>Get Started Free <ArrowRight /></Button>
                        </div>

                        <p className="text-sm text-primary-foreground/60 mt-6 font-medium">
                            No credit card required • Free forever plan available
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;
