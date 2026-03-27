import type { TemplateProps } from "~/components/templates/templates-1";

const template1Data: TemplateProps = {
    title: {
        title: 'Pedro Fernandes',
        contact: {
            mail: 'hello@reallygreatsite.com',
            phone: '+123-456-7890',
            street: '123 Anywhere St.,Any City'
        }
    },
    profile: 'Digital Marketer yang berpengalaman dalam mengelola kampanye pemasaran digital berbasis data. Terbiasa menggunakan berbagai platform iklan digital untuk meningkatkan visibilitas dan konversi brand. Memiliki kemampuan analisis yang kuat serta pengalaman dalam mengelola strategi konten dan media sosial.',
    workExperience: [
        {
            workTitle: 'Digital Marketing Specialist di Paucek and Lage',
            workTimeline: { from: 2021, to: 2023 },
            workList: [
                'Merancang dan menjalankan strategi kampanye digital untuk lebih dari 10 brand lokal',
                'mengelola iklan berbayar dengan rata-rata ROU 4x',
                'Meningkatkan traffic organik website sebesar 80% dalam 6 bulan melalui SEO',
                'Menganalisis performa kampanye menggunakan iklan digital'
            ]
        },
        {
            workTitle: 'Social Media & Content di Salford & Co.Freelance',
            workTimeline: { from: 2020, to: 2021 },
            workList: [
                'Membuat dan menjadwalkan konten untuk media sosial',
                'Berhasil menaikkan followers akun klien hingga 200% dalam 4 bulan',
                'Melakukan riset keyword dan optimasi caption untuk engagement'
            ]
        }
    ],
    studyExperience: [
        {
            title: 'S1 Ilmu Komunikasi Universitas Borcelle',
            studyTimeline: { from: 2016, to: 2020 }
        }
    ],
    certificate: [
        'Ads Search Certification',
        'Certified Digital Marketing Associate',
        'Email Marketing Fundametals'
    ],
    coreConpetency: [
        'Digital Advertising',
        'SEO',
        'Social Media Management',
        'Email Marketing',
        'Analytics',
        'Software Desain Grafis',
    ]
}

// Definisikan tipe template yang tersedia
type TemplateType = "template1" | "template2" | "template3";

// Interface untuk template map yang menyimpan data DAN tipe component
interface TemplateItem {
    type: TemplateType;
    data: TemplateProps;
}

// Map template names ke data dan tipe component-nya
const templatesMap: Record<string, TemplateItem> = {
    "Test1": { type: "template1", data: template1Data },
    "Test2": { type: "template2", data: template1Data }, // Gunakan Templates2 component
    "Test3": { type: "template3", data: template1Data }, // Gunakan Templates3 component
}

export { template1Data, templatesMap }
export type { TemplateType, TemplateItem }