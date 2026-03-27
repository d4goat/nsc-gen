interface titleTypes {
    title: string;
    contact: {
        street: string;
        phone: string;
        mail: string;
    }
}

interface timeline {
    from: number
    to: number;
}

type WorkExperience = {
    workTitle: string;
    workList: string[];
    workTimeline: timeline
}

type StudyExperience = {
    title: string;
    studyTimeline: timeline
}

interface TemplateProps {
    title: titleTypes
    profile: string;
    workExperience?: WorkExperience[]
    studyExperience: StudyExperience[]
    certificate?: string[]
    coreConpetency: string[]
}

export type { TemplateProps }