interface titleTypes {
  title: string;
  contact: {
    street: string;
    phone: string;
    mail: string;
  };
}

interface timeline {
  from: number | string;
  to: number | string;
}

type WorkExperience = {
  workTitle: string;
  workList: string[];
  workTimeline: timeline;
};

type StudyExperience = {
  title: string;
  studyTimeline: timeline;
};

interface TemplateProps1 {
  title: titleTypes;
  profile: string;
  workExperience?: WorkExperience[];
  studyExperience: StudyExperience[];
  certificate?: string[];
  coreCompetency: string[];
}

interface TemplateProps2 extends Omit<
  TemplateProps1,
  "coreCompetency" | "studyExperience"
> {
  coreCompetency: { title: string; data: string[] }[];
  studyExperience: {
    title: string;
    university: string;
    timeline: timeline;
    skills: string[];
  }[];
  additionalInformation?: string[];
}

type TemplateProps3 = Omit<
  TemplateProps2,
  "additionalInformation" | "certificate"
>;

export type { TemplateProps1, TemplateProps2, TemplateProps3 };
