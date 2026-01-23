import { Download, FileCheck, Globe, Palette, Shield, Sparkles } from "lucide-react";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader } from "../ui/card";
import { motion } from "framer-motion";
import { SaweriaCardClass, SaweriaWithHoverClass } from "~/lib/utils";

const FeatureSection = () => {
    const featureItem = [
        {
            icon: Sparkles,
            title: "AI-Powered Writting",
            description: "Our AI analyzes your experience and crafts compelling descriptions that highlight your achievements.",
            color: "bg-theme-primary"
        },
        {
            icon: FileCheck,
            title: "ATS-Friendly Formats",
            description: "Every template is optimized to pass Applicant Tracking Systems and reach human recruiters.",
            color: "bg-theme-secondary"
        },
        {
            icon: Palette,
            title: "Beautiful Templates",
            description: "Choose from 50+ professionally designed templates that make your CV stand out.",
            color: "bg-theme-accent"
        },
        {
            icon: Globe,
            title: "Multi-Language",
            description: "Create CVs in 40+ languages with proper localization and cultural formatting.",
            color: "bg-theme-primary"
        },
        {
            icon: Download,
            title: "Export Anywhere",
            description: "Download your CV as PDF, Word, or share directly via a unique link.",
            color: "bg-theme-secondary"
        },
        {
            icon: Shield,
            title: "Privacy First",
            description: "Your data is encrypted and never shared. You own your information completely.",
            color: "bg-theme-accent"
        }
    ]

    return (
        <section id="features" className="relative bg-background py-24">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-2xl mx-auto mb-16"
                >
                    <Badge className="bg-theme-primary px-4 py-2 mb-4 border-2 border-black shadow-saweria text-sm font-bold">Features</Badge>
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Everything You Need to {' '} <span className="text-theme-primary">Land Your Dream Job</span></h2>
                    <p className="text-muted-foreground text-lg">Powerful tools designed to make your job search easier and more successful.</p>
                </motion.div>

                <div className="grid grid-cols-3 gap-4">
                    {featureItem.map((item, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            key={`${item.title}-${index}`}
                        >
                            <Card className={`${SaweriaCardClass} h-full group`}>
                                <CardHeader>
                                    <div className={`${SaweriaWithHoverClass} ${item.color} p-3 rounded-xl w-fit group-hover:rotate-6 transition-transform duration-200`}>
                                        <item.icon className="text-secondary" />
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <h2 className="text-xl font-bold mb-3">{item.title}</h2>
                                    <p className="text-muted-foreground">{item.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FeatureSection