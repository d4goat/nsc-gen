import { FileText, Linkedin, Github, Instagram } from "lucide-react";
import { Link } from "react-router";
import { SaweriaButtonClass, SaweriaButtonIconClass, SaweriaClass, linearBgClass } from "~/lib/utils";
import { Separator } from "./ui/separator";

const Footer = () => {
    const footerLinks = {
        products: [
            { name: 'Features', link: '#' },
            { name: 'Templates', link: '#' },
            { name: 'Pricing', link: '#' },
        ],
        resources: [
            { name: 'Blog', link: '#' },
            { name: 'CV Guide', link: '#' },
            { name: 'Cover Letters', link: '#' },
            { name: 'Interview Tips', link: '#' },
        ],
        company: [
            { name: 'About Us', link: '#' },
            { name: 'Careers', link: '#' },
            { name: 'Contacts', link: '#' },
        ],
        legal: [
            { name: 'Privacy Policy', link: '#' },
            { name: 'Terms of Service', link: '#' },
        ],
    }

    const socialLinks = [
        { name: 'linkedin', icon: Linkedin, url: '#' },
        { name: 'Instagram', icon: Instagram, url: '#' },
        { name: 'Github', icon: Github, url: '#' },
    ]

    return (
        <footer className="border-t-2 border-black bg-purple-100">
            <div className="container mx-auto py-20">
                <div className="grid grid-cols-2 md:grid-cols-6 gap-6 mb-12">
                    <div className="col-span-2 flex flex-col gap-3">
                        <Link to={'/'} className="flex items-center gap-6">
                            <div className={`${linearBgClass} ${SaweriaClass} text-muted p-2 rounded-xl`}>
                                <FileText className="w-5 h-5"></FileText>
                            </div>
                            <span className="font-extrabold text-xl uppercase">Nsc-Gen</span>
                        </Link>
                        <p className="text-muted-foreground">Create professional CVs in minutes with our AI-powered platform. Land your dream job faster.</p>
                        <div className="flex items-center gap-3">
                            {socialLinks.map((item, index) => (
                                <Link key={index} to={item.url}>
                                    <div className={`${SaweriaButtonIconClass} rounded-xl w-fit p-2`}>
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {Object.entries(footerLinks).map(([categories, links]) => (
                        <div key={categories}>
                            <h4 className="capitalize font-bold mb-4">{categories}</h4>
                            <ul className="space-y-2">
                                {links.map((item) => (
                                    <li key={item.name}>
                                        <Link to={item.link} className="text-muted-foreground hover:text-foreground transition-colors 
                                        duration-150 text-sm font-medium">{item.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                </div>
                <Separator className="my-10 bg-muted-foreground"></Separator>
                <p className="text-muted-foreground text-sm text-center font-medium">
                    © {new Date().getFullYear()} NSC-GEN. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer