import { Button } from "./ui/button";
import { Link } from "react-router";
import { FileText, Menu } from "lucide-react";
import { motion } from 'framer-motion'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "./ui/drawer";

const Navbar = () => {
    const navLink = [
        { name: 'Features', to: '#features' },
        { name: 'How It Works', to: '#how-it-works' },
        { name: 'Testimonials', to: '#testimonials' },
        { name: 'Templates', to: '/templates' },
    ]
    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed left-0 top-0 right-0 backdrop-blur-md bg-background/95 z-50 border-b-2 border-black">
            <div className="container mx-auto px-4 h-16 lg:h-20">
                <div className="flex justify-between items-center h-full">
                    <Link to="/" className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-linear-[135deg]
                     from-linear-primary to-linear-secondary border-2 border-black shadow-saweria">
                            <FileText className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <span className="uppercase font-black font-sans text-xl text-foreground">nsc-gen</span>
                    </Link>
                    <ul className="hidden md:flex gap-4 items-center ">
                        {navLink.map((item, index) => (
                            <a key={index} className="text-muted-foreground hover:text-primary font-medium transition-colors duration-200" href={item.to}> {item.name} </a>
                        ))}
                    </ul>

                    <Drawer direction="right">
                        <DrawerTrigger asChild>
                            <Button variant={'outline'} className="md:hidden">
                                <Menu className="w-5 h-5" />
                            </Button>
                        </DrawerTrigger>
                        <DrawerContent>
                            <DrawerHeader>
                                <DrawerTitle>Menu</DrawerTitle>
                            </DrawerHeader>
                            <DrawerFooter>
                                <DrawerClose asChild>
                                    <Button variant="outline">Close</Button>
                                </DrawerClose>
                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                </div>
            </div>
        </motion.nav>
    )
}

export default Navbar