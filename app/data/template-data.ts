import type {
  TemplateProps2,
  TemplateProps1,
  TemplateProps3,
} from "~/types/template";

const template1Data: TemplateProps1 = {
  title: {
    title: "Pedro Fernandes",
    contact: {
      mail: "hello@reallygreatsite.com",
      phone: "+123-456-7890",
      street: "123 Anywhere St.,Any City",
    },
  },
  profile:
    "Digital Marketer yang berpengalaman dalam mengelola kampanye pemasaran digital berbasis data. Terbiasa menggunakan berbagai platform iklan digital untuk meningkatkan visibilitas dan konversi brand. Memiliki kemampuan analisis yang kuat serta pengalaman dalam mengelola strategi konten dan media sosial.",
  workExperience: [
    {
      workTitle: "Digital Marketing Specialist di Paucek and Lage",
      workTimeline: { from: 2021, to: 2023 },
      workList: [
        "Merancang dan menjalankan strategi kampanye digital untuk lebih dari 10 brand lokal",
        "mengelola iklan berbayar dengan rata-rata ROU 4x",
        "Meningkatkan traffic organik website sebesar 80% dalam 6 bulan melalui SEO",
        "Menganalisis performa kampanye menggunakan iklan digital",
      ],
    },
    {
      workTitle: "Social Media & Content di Salford & Co.Freelance",
      workTimeline: { from: 2020, to: 2021 },
      workList: [
        "Membuat dan menjadwalkan konten untuk media sosial",
        "Berhasil menaikkan followers akun klien hingga 200% dalam 4 bulan",
        "Melakukan riset keyword dan optimasi caption untuk engagement",
      ],
    },
  ],
  studyExperience: [
    {
      title: "S1 Ilmu Komunikasi Universitas Borcelle",
      studyTimeline: { from: 2016, to: 2020 },
    },
  ],
  certificate: [
    "Ads Search Certification",
    "Certified Digital Marketing Associate",
    "Email Marketing Fundametals",
  ],
  coreCompetency: [
    "Digital Advertising",
    "SEO",
    "Social Media Management",
    "Email Marketing",
    "Analytics",
    "Software Desain Grafis",
  ],
};

const template2Data: TemplateProps2 = {
  title: {
    title: "Rachelle Beaudry",
    contact: {
      mail: "hello@reallygreatsite.com",
      phone: "+123-456-7890",
      street: "123 Anywhere St.,Any City",
    },
  },
  profile:
    "Results-driven Accounting Executive with a proven record of optimizing financial performance. Expertise in strategic financial initiatives and team leadership. Seeking a challenging executive role to leverage analytical skills and drive organizational success.",
  workExperience: [
    {
      workTitle: "Accounting Executive, Borcella",
      workTimeline: { from: "Jan 2023", to: "Present" },
      workList: [
        "Implemented cost-control measures resulting in a 15% reduction in operational expenses",
        "Streamlined financial reporting processes, enhancing overall efficiency by 20%",
        "Led a team in successfully navigating a complex audit, ensuring compilance with industry regulations.",
      ],
    },
    {
      workTitle: "Accountant, Slford & Co",
      workTimeline: { from: "Mar 2021", to: "Dec 2022" },
      workList: [
        "Managed month-end close processes, reducing closing time by 25%",
        "Implemented a new financial forecasting system, improving accuracy by 18%",
        "Collaborated with cross-functional teams to develop and implement financial strategis, resulting in a 10% increase in revenue.",
        "Spearheaded automation, decreasing manual workload by 30%",
      ],
    },
    {
      workTitle: "Junior Accountant, Arowwai Industries",
      workTimeline: { from: "Feb 2020", to: "Jan 2021" },
      workList: [
        "Assisted in the preparation of financial statements, ensuring accuracy and compilance.",
        "Conducted internal audits, identifying and rectifying discrepancies in financial records.",
      ],
    },
  ],
  studyExperience: [
    {
      title: "Master of Professional Accounting",
      university: "Rimberio Univeristy",
      timeline: { from: "Sep 2018", to: "Oct 2019" },
      skills: ["Specialization in Financial Management"],
    },
  ],
  certificate: [
    "Certified Financial Analyst",
    "Advanced Spreadsheet for Accounting & Finance",
  ],
  coreCompetency: [
    {
      title: "Technical Skills",
      data: [
        "Financial Analysis",
        "Budgeting and Forecasting",
        "Risk Management",
        "Invoicing System",
        "Taxation",
      ],
    },
    {
      title: "Tools",
      data: [
        "Accounting Software",
        "Finance Software",
        "Data Tools",
        "Invoicing Tools",
      ],
    },
    {
      title: "Language",
      data: ["English (fluent)", "Malay (fluent)", "Mandarin (proficient)"],
    },
  ],
  additionalInformation: [
    "Served as Team Lead in the company-wide initiative for process improvement",
    "Volunteer Treasurer, Local Nonprofit Organization",
    `Received "Excellence in Financial Management Award at Borcelle"`,
  ],
};

const template3Data: TemplateProps3 = {
  title: {
    title: "Jacqueline Thompson",
    contact: {
      mail: "hello@reallygreatsite.com",
      phone: "+123-456-7890",
      street: "123 Anywhere St.,Any City",
    },
  },
  profile:
    "Results-oriented Engineering Executive with a proven track record of optimizing project outcomes. Skilled in strategic project management and team leadership. Seeking a challenging executive role to leverage technical expertise and drive engineering excellence.",
  coreCompetency: [
    {
      title: "Technical Skills",
      data: [
        "Project Management",
        "Structural Analysis",
        "Robotic and Automation",
        "CAD",
      ],
    },
    {
      title: "Language",
      data: ["English", "Malay", "German"],
    },
    {
      title: "Certifications",
      data: [
        "Professional Engineering (PE) License",
        "Project Management Professional (PMP)",
      ],
    },
    {
      title: "Awards/Activities",
      data: [
        `Recieved the "Engineering Excellence" Award for outstanding contributions to project innovation, Borcelle Technologies`,
        "Project Management Professional (PMP)",
      ],
    },
  ],
  workExperience: [
    {
      workTitle: "Engineering Executive, Borcelle Technologies",
      workTimeline: { from: "Jan 2023", to: "Present" },
      workList: [
        "Implemented cost-effective solutions, resulting in a 20% reduction in project expenses",
        "Streamlined project workflows, enhancing overall efficiency by 25%.",
        "Led a team in successfully delivering a complex engineering project on time and within allocated budget.",
      ],
    },
    {
      workTitle: "Project Engineer, Salford & Co",
      workTimeline: { from: "Mar 2021", to: "Dec 2022" },
      workList: [
        "Managed project timelines, reducing delivery times by 30%",
        "Spearheaded the adoption of cutting-edge engineering software, improving project accuracy by 15%.",
        "Collaborated with cross-functional teams, enhancing project success rates by 10%.",
      ],
    },
    {
      workTitle: "Graduate Engineer, Arowwai Industries",
      workTimeline: { from: "Feb 2020", to: "Jan 2021" },
      workList: [
        "Coordinated project tasks, ensuring adherence to engineering standards and regulations.",
        "Conducted Comprehensive project analyses, identifying and rectifying discrepancies in engineering designs.",
      ],
    },
  ],
  studyExperience: [
    {
      title: "Master of Science Engineering",
      university: "University of Engineering and Technology",
      timeline: { from: "Sep 2018", to: "Oct 2019" },
      skills: [
        "Specialization in Advanced Manufacturing.",
        `Thesis on "Innovations in sustainable Engineerig Practices".`,
      ],
    },
    {
      title: "Bachelor of Science in Civil Engineering",
      university: "City College of Engineering",
      timeline: { from: "Aug 2015", to: "Aug 2019" },
      skills: [
        "Relevant coursework in Struuctural Design and Project Management.",
      ],
    },
  ],
};

// Definisikan tipe template yang tersedia
type TemplateType = "template1" | "template2" | "template3";

// Interface untuk template map yang menyimpan data DAN tipe component
interface TemplateItem {
  type: TemplateType;
  data: TemplateProps1 | TemplateProps2;
}

// Map template names ke data dan tipe component-nya
const templatesMap: Record<string, TemplateItem> = {
  Test1: { type: "template1", data: template1Data },
  Test2: { type: "template2", data: template2Data }, // Gunakan Templates2 component
  Test3: { type: "template3", data: template1Data }, // Gunakan Templates3 component
};

export { template1Data, templatesMap, template2Data };
export type { TemplateType, TemplateItem };
