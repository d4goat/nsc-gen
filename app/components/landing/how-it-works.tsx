import { Download, Edit3, UserPlus, Wand2 } from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { motion } from "framer-motion";
import { heroBgClass, linearBgClass, SaweriaCardClass, SaweriaClass } from "~/lib/utils";
import { Badge } from "../ui/badge";

const HowItWorksSection = () => {
    const steps = [
        {
            icon: UserPlus,
            title: 'Create Your Profile',
            desc: 'Sign up for free and enter your basic information. It only takes 2 minutes to get started.'
        },
        {
            icon: Edit3,
            title: 'Add Your Experience',
            desc: 'Input your work history, education, and skills. Our AI helps you write better descriptions.'
        },
        {
            icon: Wand2,
            title: 'Customize & Enhance',
            desc: 'Choose a template, customize colors, and let AI optimize your content for ATS systems.'
        },
        {
            icon: Download,
            title: 'Download & Apply',
            desc: 'Export your professional CV and start applying to jobs with confidence.'
        },
    ]

    return (
        <section id="how-it-works" className={`py-24 relative overflow-hidden ${heroBgClass}`}>
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
                className={`${SaweriaClass} rounded-xl absolute top-20 left-14 w-10 h-10 bg-theme-secondary`}
            ></motion.div>
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
                className={`${SaweriaClass} rounded-xl absolute bottom-10 right-14 w-10 h-10 bg-theme-accent`}
            ></motion.div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-2xl mb-16 mx-auto"
                >
                    <Badge className={`bg-theme-secondary px-4 py-2 mb-4 ${SaweriaClass} text-sm font-semibold`}>How It Works</Badge>
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Build Your Cv in {' '} <span className="text-theme-primary">4 Simple Steps</span></h2>
                    <span className="text-muted-foreground text-lg">Our streamlined process makes creating a professional CV easier than ever.</span>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
                    {steps.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className={`${SaweriaCardClass} h-full group relative`}>
                                <CardContent>
                                    <div className={`${SaweriaClass} ${linearBgClass} rounded-xl text-muted font-semibold w-fit absolute -top-3 -right-3 px-2.5 py-2`}>
                                        0{index + 1}
                                    </div>
                                    <div className={`${SaweriaClass} rounded-xl w-fit text-theme-primary p-3 mb-6`}>
                                        <item.icon />
                                    </div>

                                    <h3 className="text-xl font-semibold">{item.title}</h3>
                                    <p className="text-muted-foreground">{item.desc}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
            {/* <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" fill="none" className="w-full">
                    <path
                        d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
                        fill="#fefce8"
                    />
                </svg>
            </div> */}
        </section>
    )
}

export default HowItWorksSection