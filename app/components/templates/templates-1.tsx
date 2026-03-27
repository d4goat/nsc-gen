import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "../ui/card";
import { Separator } from "../ui/separator";
import type { TemplateProps } from "~/types/template";

const headClassFont = 'font-serif text-lg font-semibold'

const Templates1 = ({ coreConpetency, profile, studyExperience, title, certificate, workExperience }: TemplateProps) => {
    return (
        <Card className={`h-full `}>
            <CardHeader>
                <CardTitle className="text-xl font-serif"><h1>{title.title}</h1></CardTitle>
                <CardDescription className="text-sm text-neutral-500">
                    {title.contact.phone} |
                    {title.contact.mail} |
                    {title.contact.street} |
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-5">
                    {/* Profile */}
                    <div className="flex flex-col gap-1.5">
                        <h2 className={headClassFont}>Profil</h2>
                        <Separator />
                        <p className="text-sm">{profile}</p>
                    </div>

                    {/* Work Experience */}
                    <div className="flex flex-col gap-1.5">
                        <h2 className={headClassFont}>Pengalaman Kerja</h2>
                        <Separator />
                        {workExperience?.map((item, index) => (
                            <div key={index} className="text-sm">
                                <div className="flex justify-between">
                                    <h3 className="font-semibold">{item.workTitle}</h3>
                                    <div className="">
                                        <span>{item.workTimeline.from}</span>
                                        {' '}-{' '}
                                        <span>{item.workTimeline.to}</span>
                                    </div>
                                </div>
                                <p>{item.workList.map((work, idx) => (
                                    <li key={idx} className="list-none">• &nbsp;{work}</li>
                                ))}</p>
                            </div>
                        ))}
                    </div>

                    {/* Study */}
                    <div className="flex flex-col gap-1.5">
                        <h2 className={headClassFont}>Pendidikan</h2>
                        <Separator />
                        {studyExperience.map((item, index) => (
                            <div className="text-sm" key={index}>
                                <div className="flex justify-between">
                                    <h3 className="font-semibold">• &nbsp;{item.title}</h3>
                                    <div>
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
                            <div className="grid grid-cols-2 gap-1 mt-1">
                                {certificate.map((item, index) => (
                                    <div className="text-sm" key={index}>
                                        <h3>• &nbsp;{item}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    }

                    {/* Core Conpetency */}
                    <div className="flex flex-col gap-2">
                        <h2 className={headClassFont}>Kemampuan Utama</h2>
                        <Separator />
                        <div className="grid grid-cols-2 gap-1">
                            {coreConpetency.map((item, index) => (
                                <div key={index} className="text-sm">
                                    <h3>• &nbsp; {item}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export type { TemplateProps }
export default Templates1