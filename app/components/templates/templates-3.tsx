import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "../ui/card";
import { Separator } from "../ui/separator";
import type { TemplateProps3 } from "~/types/template";

const headClassFont = 'font-serif text-lg font-semibold'

const Templates3 = ({ coreCompetency, profile, studyExperience, title, workExperience }: TemplateProps3) => {
    return (
        <Card className={`h-full `}>
            <CardHeader className="text-center">
                <CardTitle className="text-xl font-serif"><h1>{title.title}</h1></CardTitle>
                <CardDescription className="text-sm text-neutral-500">
                    {title.contact.phone} |
                    {title.contact.mail} |
                    {title.contact.street} |
                </CardDescription>
            </CardHeader>
            <CardContent>

            </CardContent>
        </Card>
    )
}

export default Templates3