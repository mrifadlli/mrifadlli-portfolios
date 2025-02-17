import { Icons } from "@/components/icons"
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
    name: "Anrico Fadli",
    initials: "RF",
    description: "👨‍💻 Junior Developer | Laravel & React.js | API Integration | Performance Optimization",

    summary: "A passionate Full-Stack Developer with experience in React, Laravel, and API integration. Skilled in building responsive, high-performance web applications and collaborating with UX/UI teams to create seamless user experiences.",

    avatarUrl: "/xixi.jpg",

    skills: [
        "React",
        "React Native",
        "Next.js",
        "Typescript",
        "Express.js",
        "Zustand",
        "Laravel",
        "MySql",
    ],

    navbar: [
        { href: "/", icon: HomeIcon, label: "Home" },
        { icon: NotebookIcon, label: "Resume" },
    ],

    work: [
        {
            company: "Tennet Depository Indonesia",
            href: "https://tennet.id/",
            badges: [],
            location: "On Site",
            title: "Junior Fullstack Developer",
            logoUrl: "/tennet.png",
            start: "January 2024",
            description: ["Designed and developed scalable web applications using Laravel and React.js.",
                "Collaborated with cross-functional teams to deliver user-centric solutions.",
                "Managed GitHub repositories, enforcing code reviews, branch protection rules, and CI workflows.",
                "Integrated APIs to ensure seamless data exchange and optimized system performance.",
                "Worked closely with stakeholders to align technical solutions with business requirements."],
        },
        {
            company: "Tennet Depository Indonesia",
            href: "https://tennet.id/",
            badges: [],
            location: "On Site",
            title: "Frontend Developer",
            logoUrl: "/tennet.png",
            start: "October 2024",
            end: "December 2024",
            description: ["Developed responsive web interfaces using React and Tailwind CSS, enhancing user experience.",
                "Worked with UX/UI designers to align designs with user needs and improve usability.",
                "Optimized web applications for performance, scalability, and cross-browser compatibility.",
                "Designed and implemented reusable components following clean coding standards.",
                "Integrated APIs with backend teams, ensuring smooth and efficient functionality."],
        },
    ],

    projects: [
        {
            title: "Brancash",
            href: "/brancash",
            dates: "Jan 2024",
            active: true,
            description:
                "Seamless Transactions, Secure Outcomes. Cutting-edge blockchain solutions for a smarter, safer financial future 🚀.",
            technologies: ["React", "TypeScript", "Zustand", "TailwindCSS", "Material UI"],
            links: [
                {
                    type: "Website",
                    href: "/brancash",
                    icon: <Icons.globe className="size-4" />,
                },
            ],
            image: "/asset_portfolio/brancash-landing/landing.webp"
        },
        {
            title: "Digital Assets Services",
            href: "/digital-assets-services",
            dates: "January 2024 - Present",
            active: true,
            description: "Web application that provides Digital Asset Escrow, Digital Asset Guarantee & Digital Asset OTC, with crypto as a payment.",
            technologies: ["React", "TypeScript", "Zustand", "Laravel", "MySql", "TailwindCSS", "Material UI"],
            links: [
                {
                    type: "Website",
                    href: "/digital-assets-services",
                    icon: <Icons.globe className="size-4" />,
                },
            ],
            image: "/asset_portfolio/digital-assets-services/home.webp",
        },
        {
            title: "MealsHunter",
            href: "https://mealshunter-mrifadlli.vercel.app",
            dates: "April 2023 - September 2023",
            active: true,
            description: "Discover and explore a world of flavors with MealsHunter! This app curates a vast collection of recipes from around the globe, helping food enthusiasts find and create delicious meals with ease. 🍽️🌍🔥",
            technologies: [
                "Vue.Js", "Public API", "Vuex", "TailwindCSS"
            ],
            links: [
                {
                    type: "Website",
                    href: "https://mealshunter-mrifadlli.vercel.app",
                    icon: <Icons.globe className="size-4" />,
                },
            ],
            image: "/asset_portfolio/mealshunter/landing.webp",
        },
        {
            title: "TennetReads",
            href: "/tennet-reads",
            dates: "April 2023 - March 2024",
            active: true,
            description: "Empowering financial literacy with secure, blockchain-backed solutions. Tennet Reads provides seamless access to insightful financial knowledge, ensuring smart transactions and safe outcomes for a secure future. 🚀📖",
            technologies: ["React", "TypeScript", "Zustand", "Express.Js", "MySql", "TailwindCSS"],
            links: [
                {
                    type: "Website",
                    href: "/tennet-reads",
                    icon: <Icons.globe className="size-4" />,
                },
            ],
            image: "/asset_portfolio/tennet-reads/academy.webp",
        },
    ],

    contact: {
        email: "hello@example.com",
        tel: "+123456789",
        social: {
            GitHub: {
                name: "GitHub",
                url: "https://github.com/mrifadlli",
                icon: Icons.github,

                navbar: true,
            },
            LinkedIn: {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/muhamad-anrico-fadli-216812196/",
                icon: Icons.linkedin,

                navbar: true,
            },
            email: {
                name: "Send Email",
                url: "mailto:manricofadli@gmail.com",
                icon: Icons.email,

                navbar: true,
            },
        },
    },

    projectOverview: {
        "brancash": {
            title: "Brancash",
            description: "Seamless Transactions, Secure Outcomes. Cutting-edge blockchain solutions for a smarter, safer financial future 🚀." ,
            images: [
                "/asset_portfolio/brancash-landing/landing.webp",
                "/asset_portfolio/brancash-landing/excrow.webp",
                "/asset_portfolio/brancash-landing/dag.webp",
                "/asset_portfolio/brancash-landing/otc.webp",
                "/asset_portfolio/brancash-landing/consultant.webp",
            ],
            techStack: ["React", "TypeScript", "Zustand", "TailwindCSS", "Material UI"]
        },
        "digital-assets-services": {
            title: "Digital Assets Services",
            description: "Web application that provides Digital Asset Escrow, Digital Asset Guarantee & Digital Asset OTC, with crypto as a payment.",
            images: [
                "/asset_portfolio/digital-assets-services/home.webp",
                "/asset_portfolio/digital-assets-services/escrow.webp",
                "/asset_portfolio/digital-assets-services/otc.webp",
                "/asset_portfolio/digital-assets-services/settings.webp",
            ],
            techStack: ["React", "TypeScript", "Zustand", "Laravel", "MySql", "TailwindCSS", "Material UI"]
        },
        "tennet-reads": {
            title: "Tennet Reads",
            description: "Empowering financial literacy with secure, blockchain-backed solutions. Tennet Reads provides seamless access to insightful financial knowledge, ensuring smart transactions and safe outcomes for a secure future. 🚀📖",
            images: [
                "/asset_portfolio/tennet-reads/academy.webp",
                "/asset_portfolio/tennet-reads/landing.webp",
                "/asset_portfolio/tennet-reads/explore.webp",
                "/asset_portfolio/tennet-reads/read.webp",
            ],
            techStack: ["React", "TypeScript", "Zustand", "Express.Js", "MySql", "TailwindCSS"],
        },
    }
}