import { FormInput } from "../form-input";
import { z } from "zod";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { Button } from "../ui/button";
import { Card, CardHeader, CardContent, CardTitle, CardFooter } from "../ui/card";
import type { TemplateProps } from "../../types/template";
import { Plus, Trash } from "lucide-react";
import { SaweriaCardClass, SaweriaClass } from "~/lib/utils";
import type React from "react";

const formSchema = z.object({
    title: z.object({
        title: z.string().min(1, "Title is required"),
        contact: z.object({
            street: z.string().min(1, "Street is required"),
            phone: z.string().min(1, "Phone is required"),
            mail: z.string().email("Invalid email").min(1, "Email is required"),
        })
    }),
    profile: z.string().min(1, "Profile is required"),
    workExperience: z.array(z.object({
        workTitle: z.string().min(1, "Work title is required"),
        workList: z.array(z.string()), // Complex to edit a list of strings inside an array of objects
        workTimeline: z.object({
            from: z.coerce.number().min(1900, "Invalid year"),
            to: z.coerce.number().min(1900, "Invalid year")
        })
    })).optional(),
    studyExperience: z.array(z.object({
        title: z.string().min(1, "Study title is required"),
        studyTimeline: z.object({
            from: z.coerce.number().min(1900, "Invalid year"),
            to: z.coerce.number().min(1900, "Invalid year")
        })
    })),
    certificate: z.array(z.string()).optional(),
    coreConpetency: z.array(z.string())
});

type FormValues = z.infer<typeof formSchema>;

// Simple Zod Resolver to avoid installing @hookform/resolvers
const zodResolver = (schema: z.Schema<any, any>) => async (values: any) => {
    const result = schema.safeParse(values);
    if (result.success) {
        return { values: result.data, errors: {} };
    }
    const errors: any = {};
    result.error.issues.forEach((issue) => {
        const path = issue.path.join(".");
        errors[path] = { message: issue.message, type: issue.code };
    });
    return { values: {}, errors };
};

export function Templates1Form() {
    const { register, control, handleSubmit, formState: { errors } } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: { title: "", contact: { street: "", phone: "", mail: "" } },
            profile: "",
            workExperience: [],
            studyExperience: [],
            certificate: [],
            coreConpetency: []
        }
    });

    const { fields: workFields, append: appendWork, remove: removeWork } = useFieldArray({
        control,
        name: "workExperience"
    });

    const { fields: studyFields, append: appendStudy, remove: removeStudy } = useFieldArray({
        control,
        name: "studyExperience"
    });

    // Special handling for array of strings (coreConpetency)
    // We need to map them to objects for useFieldArray or manage manually
    // But since TemplateProps defines them as string[], we'll use a wrapper approach if we use useFieldArray,
    // or just simple index management. useFieldArray is cleaner but tricky with primitives.
    // Let's use useFieldArray with a trick or just simple state for these?
    // RHF docs say: "append({ test: 'test' })" for object arrays.
    // For string arrays, we can use useFieldArray if we name it "coreConpetency" and append "string".
    const { fields: competencyFields, append: appendCompetency, remove: removeCompetency } = useFieldArray({
        control,
        name: "coreConpetency" as never // Cast to avoid TS issues if strictly typed to string[]
    });

    // Same for certificate
    const { fields: certFields, append: appendCert, remove: removeCert } = useFieldArray({
        control,
        name: "certificate" as never
    });

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log("Form Data:", data);
        alert(JSON.stringify(data, null, 2));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-4xl mx-auto p-4">
            <Card className={`${SaweriaClass}`}>
                <CardHeader>
                    <CardTitle>Resume Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {/* Title Section */}
                    <div className="grid gap-4 border p-4 rounded-md">
                        <h3 className="font-semibold">Header Info</h3>
                        <FormInput {...register("title.title")} label="Job Title / Role" error={errors.title?.title?.message} />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <FormInput {...register("title.contact.street")} label="Street" error={errors.title?.contact?.street?.message} />
                            <FormInput {...register("title.contact.phone")} label="Phone" error={errors.title?.contact?.phone?.message} />
                            <FormInput {...register("title.contact.mail")} label="Email" error={errors.title?.contact?.mail?.message} />
                        </div>
                    </div>

                    {/* Profile */}
                    <FormInput {...register("profile")} label="Professional Summary" error={errors.profile?.message} />

                    {/* Work Experience */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <h3 className="font-semibold">Work Experience</h3>
                            <Button type="button" variant="outline" size="sm" onClick={() => appendWork({ workTitle: "", workList: [], workTimeline: { from: 2020, to: 2024 } })}>
                                <Plus className="h-4 w-4 mr-2" /> Add Work
                            </Button>
                        </div>
                        {workFields.map((field, index) => (
                            <div key={field.id} className="grid gap-4 border p-4 rounded-md relative">
                                <Button type="button" variant="ghost" size="icon" className="absolute top-2 right-2" onClick={() => removeWork(index)}>
                                    <Trash className="h-4 w-4 text-red-500" />
                                </Button>
                                <FormInput {...register(`workExperience.${index}.workTitle`)} label="Work Title" error={errors.workExperience?.[index]?.workTitle?.message} />
                                <div className="grid grid-cols-2 gap-4">
                                    <FormInput {...register(`workExperience.${index}.workTimeline.from`)} type="text" onChange={(val: React.ChangeEvent) => {
                                        let input = val.target as HTMLInputElement
                                        input.value = input.value.replace(/[^\d,]/g, '')

                                    }} label="Start Year" error={errors.workExperience?.[index]?.workTimeline?.from?.message} />
                                    <FormInput {...register(`workExperience.${index}.workTimeline.to`)} type="text" onChange={(val: React.ChangeEvent) => {
                                        let input = val.target as HTMLInputElement
                                        input.value = input.value.replace(/[^\d,]/g, '')

                                    }} label="End Year" error={errors.workExperience?.[index]?.workTimeline?.to?.message} />
                                </div>
                                {/* Note: workList (string[]) is not fully implemented in this UI for simplicity, could add another nested useFieldArray if needed */}
                                <p className="text-sm text-muted-foreground italic">Work description list items implementation pending...</p>
                            </div>
                        ))}
                    </div>

                    {/* Study Experience */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <h3 className="font-semibold">Education</h3>
                            <Button type="button" variant="outline" size="sm" onClick={() => appendStudy({ title: "", studyTimeline: { from: 2016, to: 2020 } })}>
                                <Plus className="h-4 w-4 mr-2" /> Add Education
                            </Button>
                        </div>
                        {studyFields.map((field, index) => (
                            <div key={field.id} className="grid gap-4 border p-4 rounded-md relative">
                                <Button type="button" variant="ghost" size="icon" className="absolute top-2 right-2" onClick={() => removeStudy(index)}>
                                    <Trash className="h-4 w-4 text-red-500" />
                                </Button>
                                <FormInput {...register(`studyExperience.${index}.title`)} label="Degree / School" error={errors.studyExperience?.[index]?.title?.message} />
                                <div className="grid grid-cols-2 gap-4">
                                    <FormInput {...register(`studyExperience.${index}.studyTimeline.from`)} type="text" onChange={(val: React.ChangeEvent) => {
                                        let input = val.target as HTMLInputElement
                                        input.value = input.value.replace(/[^\d,]/g, '')

                                    }} label="Start Year" error={errors.studyExperience?.[index]?.studyTimeline?.from?.message} />
                                    <FormInput {...register(`studyExperience.${index}.studyTimeline.to`)} type="text" onChange={(val: React.ChangeEvent) => {
                                        let input = val.target as HTMLInputElement
                                        input.value = input.value.replace(/[^\d,]/g, '')

                                    }} label="End Year" error={errors.studyExperience?.[index]?.studyTimeline?.to?.message} />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Core Competencies */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <h3 className="font-semibold">Core Competencies</h3>
                            <Button type="button" variant="outline" size="sm" onClick={() => appendCompetency("New Skill")}>
                                <Plus className="h-4 w-4 mr-2" /> Add Skill
                            </Button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {competencyFields.map((field, index) => (
                                <div key={field.id} className="flex gap-2">
                                    <FormInput {...register(`coreConpetency.${index}` as any)} placeholder="Skill" />
                                    <Button type="button" variant="ghost" size="icon" onClick={() => removeCompetency(index)}>
                                        <Trash className="h-4 w-4 text-red-500" />
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Certificates */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <h3 className="font-semibold">Certificates</h3>
                            <Button type="button" variant="outline" size="sm" onClick={() => appendCert("New Certificate")}>
                                <Plus className="h-4 w-4 mr-2" /> Add Certificate
                            </Button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {certFields.map((field, index) => (
                                <div key={field.id} className="flex gap-2">
                                    <FormInput {...register(`certificate.${index}` as any)} placeholder="Certificate Name" />
                                    <Button type="button" variant="ghost" size="icon" onClick={() => removeCert(index)}>
                                        <Trash className="h-4 w-4 text-red-500" />
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>

                </CardContent>
                <CardFooter>
                    <Button type="submit" className="w-full">Generate Resume</Button>
                </CardFooter>
            </Card>
        </form>
    );
}

export default Templates1Form;