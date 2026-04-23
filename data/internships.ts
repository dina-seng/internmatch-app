export interface Internship {
    id: string;
    company: string;
    role: string;
    location: string;
    type: "Remote" | "Hybrid" | "On-site";
    duration: string;
    stipend: string;
    logo: string;
    tags: string[];
    postedDaysAgo: number;
    companyColor: string;
}

export const INTERNSHIPS: Internship[] = [
{
id: "1",
company: "Stripe",
role: "Software Engineer Internship",
location: "San Francisco, CA",
type: "Hybrid",
duration: "12 weeks",
stipend: "$8,500/mo",
logo: "S",
tags: ["TypeScript", "Go", "Payments"],
postedDaysAgo: 1,
companyColor: "#635BFF",
},
{
id: "2",
company: "Figma",
role: "Product Design Intern",
location: "Remote",
type: "Remote",
duration: "10 weeks",
stipend: "$7,000/mo",
logo: "F",
tags: ["Figma", "UI/UX", "Research"],
postedDaysAgo: 2,
companyColor: "#F24E1E",
},
{
id: "3",
company: "Notion",
role: "Data Science Intern",
location: "New York, NY",
type: "Hybrid",
duration: "16 weeks",
stipend: "$7,500/mo",
logo: "N",
tags: ["Python", "SQL", "ML"],
postedDaysAgo: 3,
companyColor: "#000000",
},
{
id: "4",
company: "Linear",
role: "Frontend Engineer Intern",
location: "Remote",
type: "Remote",
duration: "12 weeks",
stipend: "$6,500/mo",
logo: "L",
tags: ["React", "TypeScript", "GraphQL"],
postedDaysAgo: 4,
companyColor: "#5E6AD2",
},
{
id: "5",
company: "Vercel",
role: "DevOps Intern",
location: "San Francisco, CA",
type: "On-site",
duration: "12 weeks",
stipend: "$8,000/mo",
logo: "V",
tags: ["Docker", "K8s", "CI/CD"],
postedDaysAgo: 5,
companyColor: "#000000",
},
{
id: "6",
company: "Anthropic",
role: "ML Research Intern",
location: "San Francisco, CA",
type: "Hybrid",
duration: "16 weeks",
stipend: "$9,000/mo",
logo: "A",
tags: ["Python", "PyTorch", "LLMs"],
postedDaysAgo: 6,
companyColor: "#D97757",
},
{
id: "7",
company: "Loom",
role: "iOS Engineer Intern",
location: "Remote",
type: "Remote",
duration: "10 weeks",
stipend: "$6,000/mo",
logo: "L",
tags: ["Swift", "SwiftUI", "iOS"],
postedDaysAgo: 7,
companyColor: "#625DF5",
},
{
id: "8",
company: "Retool",
role: "Full Stack Intern",
location: "New York, NY",
type: "On-site",
duration: "12 weeks",
stipend: "$7,500/mo",
logo: "R",
tags: ["React", "Node.js", "PostgreSQL"],
postedDaysAgo: 9,
companyColor: "#F5A623",
},
];

export const FEATURED_INTERNSHIP = INTERNSHIPS[0];

export const FILTER_CHIPS = [
"All",
"Remote",
"Hybrid",
"On-site",
"Engineering",
"Design",
"Data",
"Marketing",
];