import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { motion } from "framer-motion";
import { SaweriaCardClass, SaweriaWithHoverClass } from "~/lib/utils";

const Test = () => {
    const templatesItem = [
        {
            title: "Test1",
            img: "app/assets/img/template1.png"
        },
        {
            title: "Test2",
            img: "app/assets/img/template2.png"
        },
        {
            title: "Test3",
            img: "app/assets/img/template3.png"
        }
    ]

    return (
        <section className="relative bg-background py-32">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2 }}
                    className="text-center max-w-2xl mx-auto mb-16"
                >
                    <Badge className="bg-theme-secondary px-4 py-2 mb-4 border-black shadow-saweria text-sm font-bold">Templates</Badge>
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Choose Your {' '} <span className="text-theme-primary">Perfect Template</span></h2>
                    <p className="text-muted-foreground text-lg">Select from a variety of professionally designed CV templates to make your application stand out.</p>
                </motion.div>

                <div className="grid grid-cols-3 gap-4">
                    {templatesItem.map((item, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            key={`${item.title}-${index}`}
                        >
                            <Card className={`${SaweriaCardClass} h-full group`}>
                                <CardContent>
                                    <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Test;