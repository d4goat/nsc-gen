import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { SaweriaClass, SaweriaCardClass, heroBgClass, SaweriaWithHoverClass } from "~/lib/utils";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from 'embla-carousel-autoplay'
import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const TestiomonialSection = () => {
    const plugins = React.useRef(
        Autoplay({ stopOnInteraction: true, delay: 2000 })
    )

    const testimonials = [
        {
            name: 'Sarah Chen',
            testimoni: "I was skeptical at first, but the templates are genuinely beautiful. Got 3 interview callbacks in the first week!",
            job: 'Marketing Manager',
            avatar: 'SC',
            rating: 5,
            theme: 'primary'
        },
        {
            name: 'Michael Rodriguez',
            testimoni: "The LaTeX-style templates are perfect for tech roles. Clean, professional, and ATS-friendly. Highly recommended!",
            job: 'Software Engineer',
            avatar: 'MR',
            rating: 5,
            theme: 'secondary'
        },
        {
            name: 'Jessica Taylor',
            testimoni: "I love the customization options. It's hard to find a builder that respects design principles while remaining functional.",
            job: 'Graphic Designer',
            avatar: 'JT',
            rating: 5,
            theme: 'accent'
        },
        {
            name: 'Robert Miller',
            testimoni: "Saved me hours of formatting frustration. The export to PDF is flawless every time. Worth every penny.",
            job: 'Project Manager',
            avatar: 'RM',
            rating: 5,
            theme: 'primary'
        },
        {
            name: 'Chris Thompson',
            testimoni: "Simple, effective, and modern. Exactly what I needed for my career transition. The interface is very intuitive.",
            job: 'Data Scientist',
            avatar: 'CT',
            rating: 5,
            theme: 'secondary'
        },
        {
            name: 'James Wilson',
            testimoni: "The best CV builder I've used. The professional look really stands out to high-end employers in finance.",
            job: 'Financial Analyst',
            avatar: 'JW',
            rating: 5,
            theme: 'accent'
        }
    ];

    return (
        <section id="testimonials" className={`relative py-24 overflow-hidden`}>
            <motion.div
                animate={{ y: [-10, 10, -10], x: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className={`rounded-full bg-theme-primary ${SaweriaClass} w-7 h-7 absolute top-24 left-[20%]`}
            />
            <motion.div
                animate={{ y: [-10, 10, -10], x: [-10, 10, -10] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className={`rounded-xl bg-theme-secondary ${SaweriaClass} w-10 h-10 absolute top-24 right-[20%]`}
            />
            <motion.div
                animate={{ y: [-10, 10, -10], x: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className={`rounded-full bg-theme-accent ${SaweriaClass} w-7 h-7 absolute bottom-14 right-[20%]`}
            />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-2xl mb-16 mx-auto"
                >
                    <Badge className={`${SaweriaClass} bg-theme-primary px-4 py-2 mb-4 text-sm font-semibold`}>Testimonials</Badge>
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Loved by {' '} <span className="text-theme-primary">Thousands</span> of Job Seekers</h2>
                    <p className="text-lg text-muted-foreground">See what our have users to say about their experience with NSC-GEN.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((item, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            key={item.name}
                        >
                            <Card className={`${SaweriaCardClass} h-full`}>
                                <CardContent>
                                    <div className={`${SaweriaClass} rounded-xl w-fit mb-6 p-2`}>
                                        <Quote className="text-theme-primary w-5 h-5"></Quote>
                                    </div>
                                    <p className="mb-4">{`"${item.testimoni}"`}</p>
                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-3 items-center">
                                            <div className={`${SaweriaClass} bg-theme-${item.theme} font-semibold text-muted rounded-xl w-12 h-12 flex items-center justify-center`}>
                                                {item.avatar}
                                            </div>
                                            <div>
                                                <p className="font-semibold">{item.name}</p>
                                                <p className="text-muted-foreground">{item.job}</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-0.5">
                                            {Array.from({ length: item.rating }).map((_, index) => (
                                                <Star key={index} className="text-theme-accent fill-theme-accent w-4 h-4"></Star>
                                            ))}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TestiomonialSection