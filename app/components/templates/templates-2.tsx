import { Card, CardContent } from "../ui/card";
import type { TemplateProps2 } from "~/types/template";

const Templates2 = ({
    coreConpetency,
    profile,
    studyExperience,
    title,
    certificate,
    workExperience,
    additionalInformation
}: TemplateProps2) => {
    // Generate a website URL based on the email domain if website is not explicitly present in types
    const website = title.contact.mail
        ? `www.${title.contact.mail.split('@')[1] || 'reallygreatsite.com'}`
        : 'www.reallygreatsite.com';

    return (
        <Card className="h-full border-none shadow-none rounded-none bg-white text-neutral-900 font-sans p-8 md:p-12 select-none">
            <CardContent className="p-0">
                <div className="grid grid-cols-[1.75fr_1fr] gap-x-12 gap-y-10">
                    {/* LEFT COLUMN */}
                    <div className="flex flex-col gap-10">
                        {/* Name & Profile */}
                        <div className="flex flex-col gap-4">
                            <h1 className="text-[38px] font-bold tracking-tight text-neutral-950 leading-none">
                                {title.title}
                            </h1>
                            <p className="text-[13px] text-neutral-700 leading-relaxed font-normal">
                                {profile}
                            </p>
                        </div>

                        {/* Work Experience */}
                        {workExperience && workExperience.length > 0 && (
                            <div className="flex flex-col">
                                <h2 className="text-[17px] font-bold text-neutral-900 mb-5">
                                    Work Experience
                                </h2>
                                <div className="space-y-6">
                                    {workExperience.map((item, index) => (
                                        <div key={index} className="flex flex-col">
                                            <h3 className="font-bold text-[13.5px] text-neutral-900">
                                                {item.workTitle}
                                            </h3>
                                            <span className="text-[12px] text-neutral-500 mt-0.5 mb-1.5">
                                                {item.workTimeline.from} - {item.workTimeline.to}
                                            </span>
                                            <ul className="list-disc pl-4 space-y-1.5">
                                                {item.workList.map((bullet, idx) => (
                                                    <li key={idx} className="text-[12.5px] text-neutral-700 leading-relaxed">
                                                        {bullet}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Educational Background */}
                        {studyExperience && studyExperience.length > 0 && (
                            <div className="flex flex-col">
                                <h2 className="text-[17px] font-bold text-neutral-900 mb-5">
                                    Educational Background
                                </h2>
                                <div className="space-y-6">
                                    {studyExperience.map((item, index) => (
                                        <div key={index} className="flex flex-col">
                                            <h3 className="font-bold text-[13.5px] text-neutral-900">
                                                {item.title}
                                            </h3>
                                            <span className="text-[13px] text-neutral-800 mt-0.5">
                                                {item.university}
                                            </span>
                                            <span className="text-[12px] text-neutral-500 mt-0.5 mb-1.5">
                                                {item.timeline.from} - {item.timeline.to}
                                            </span>
                                            {item.skills && item.skills.length > 0 && (
                                                <ul className="list-disc pl-4 space-y-1.5">
                                                    {item.skills.map((skill, idx) => (
                                                        <li key={idx} className="text-[12.5px] text-neutral-700 leading-relaxed">
                                                            {skill}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="flex flex-col gap-10">
                        {/* Contact */}
                        <div className="flex flex-col">
                            <h2 className="text-[17px] font-bold text-neutral-900 mb-4">
                                Contact
                            </h2>
                            <div className="text-[13px] text-neutral-700 space-y-1.5 leading-normal">
                                <p>{title.contact.street}</p>
                                <p>{title.contact.phone}</p>
                                <p>{title.contact.mail}</p>
                                {website && <p>{website}</p>}
                            </div>
                        </div>

                        {/* Skills */}
                        {coreConpetency && coreConpetency.length > 0 && (
                            <div className="flex flex-col">
                                <h2 className="text-[17px] font-bold text-neutral-900 mb-4">
                                    Skills
                                </h2>
                                <div className="space-y-5">
                                    {coreConpetency.map((item, index) => (
                                        <div key={index} className="flex flex-col">
                                            <h3 className="font-bold text-[13.5px] text-neutral-900 mb-2">
                                                {item.title}
                                            </h3>
                                            <ul className="list-disc pl-4 space-y-1.5">
                                                {item.data.map((bullet, idx) => (
                                                    <li key={idx} className="text-[12.5px] text-neutral-700 leading-relaxed">
                                                        {bullet}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Certification */}
                        {certificate && certificate.length > 0 && (
                            <div className="flex flex-col">
                                <h2 className="text-[17px] font-bold text-neutral-900 mb-4">
                                    Certification
                                </h2>
                                <ul className="list-disc pl-4 space-y-1.5">
                                    {certificate.map((item, index) => (
                                        <li key={index} className="text-[12.5px] text-neutral-700 leading-relaxed">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Additional Information */}
                        {additionalInformation && additionalInformation.length > 0 && (
                            <div className="flex flex-col">
                                <h2 className="text-[17px] font-bold text-neutral-900 mb-4">
                                    Additional Information
                                </h2>
                                <ul className="list-disc pl-4 space-y-1.5">
                                    {additionalInformation.map((item, index) => (
                                        <li key={index} className="text-[12.5px] text-neutral-700 leading-relaxed">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default Templates2;