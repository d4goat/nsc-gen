import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "../ui/card";
import { Separator } from "../ui/separator";
import type { TemplateProps1 } from "~/types/template";

const headClassFont = 'font-serif text-lg font-semibold'

const Templates1 = ({ coreCompetency, profile, studyExperience, title, certificate, workExperience }: TemplateProps1) => {
    return (
        <Card className={`h-full `}>
            <CardHeader>
                <CardTitle className="text-xl font-serif"><h1>{title.title}</h1></CardTitle>
                <CardDescription className="text-sm text-neutral-500">
                    {title.contact.phone} {title.contact.phone !== "" && "| "}
                    {title.contact.mail} {title.contact.mail !== "" && "| "}
                    {title.contact.street}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-5">
                    {/* Profile */}
                    <div className="flex flex-col gap-1.5">
                        <h2 className={headClassFont}>Profil</h2>
                        <Separator />
                        <p className="text-sm break-words whitespace-pre-wrap">{profile}</p>
                    </div>

                    {/* Work Experience */}
                    <div className="flex flex-col gap-1.5">
                        <h2 className={headClassFont}>Pengalaman Kerja</h2>
                        <Separator />
                        {workExperience?.map((item, index) => (
                            <div key={index} className="text-sm">
                                <div className="flex justify-between gap-4">
                                    <h3 className="font-semibold break-words">{item.workTitle}</h3>
                                    <div className="shrink-0">
                                        <span>{item.workTimeline.from}</span>
                                        {' '}-{' '}
                                        <span>{item.workTimeline.to}</span>
                                    </div>
                                </div>
                                <div className="mt-1">
                                    {item.workList.map((work, idx) => (
                                        <li key={idx} className="list-none break-words">• &nbsp;{work}</li>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Study */}
                    <div className="flex flex-col gap-1.5">
                        <h2 className={headClassFont}>Pendidikan</h2>
                        <Separator />
                        {studyExperience.map((item, index) => (
                            <div className="text-sm" key={index}>
                                <div className="flex justify-between gap-4">
                                    <h3 className="font-semibold break-words">• &nbsp;{item.title}</h3>
                                    <div className="shrink-0">
                                        <span>{item.studyTimeline.from}</span>
                                        {' '}-{' '}
                                        <span>{item.studyTimeline.to}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Certificate */}
                    {certificate !== undefined && certificate.length > 0 &&
                        <div className="flex flex-col gap-2">
                            <h2 className={headClassFont}>Sertifikasi</h2>
                            <Separator />
                            <div className="flex flex-wrap gap-y-1 mt-1">
                                {certificate.map((item, index) => (
                                    <div className="w-1/2 text-sm pr-2" key={index}>
                                        <h3 className="break-words">• &nbsp;{item}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    }

                    {/* Core Competency */}
                    <div className="flex flex-col gap-2">
                        <h2 className={headClassFont}>Kemampuan Utama</h2>
                        <Separator />
                        <div className="flex flex-wrap gap-y-1">
                            {coreCompetency.map((item, index) => (
                                <div key={index} className="w-1/2 text-sm pr-2">
                                    <h3 className="break-words">• &nbsp; {item}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export type { TemplateProps1 }
export default Templates1