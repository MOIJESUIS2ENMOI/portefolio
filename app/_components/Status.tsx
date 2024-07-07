import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { ArrowUpRight, Code, LucideIcon } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const SIDE_PROJECTS: SideProjectProps[] = [
    {
        Logo: Code,
        title: "Side Project 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        url: "https://github.com/example/side-project-1"
    },
    {
        Logo: Code,
        title: "Side Project 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        url: "https://github.com/example/side-project-2"
    },
    {
        Logo: Code,
        title: "Side Project 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        url: "https://github.com/example/side-project-3"
    },
    {
        Logo: Code,
        title: "Side Project 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        url: "https://github.com/example/side-project-3"
    },
    {
        Logo: Code,
        title: "Side Project 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        url: "https://github.com/example/side-project-3"
    }
];

const WORKS: WorkProps[] = [
    {
        image: "https://www.codeur.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTc4MzA0NCwicHVyIjoiYmxvYl9pZCJ9fQ==--a2279d332dec1699e56ea5678a9635ba4aa18064/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJqcGciLCJyZXNpemVfdG9fZml0IjpbNTAwLDUwMF19LCJwdXIiOiJ2YXJpYXRpb24ifX0=--bc8271a73afb673f8694614eebe78acb94883f32/avatar.jpg",
        title: "Work 1",
        role: "Lorem ipsum",
        date: "12-12-2021",
        url: "",
        freelance: true
    },
    {
        image: "https://www.codeur.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTc4MzA0NCwicHVyIjoiYmxvYl9pZCJ9fQ==--a2279d332dec1699e56ea5678a9635ba4aa18064/avatar.jpg",
        title: "Work 2",
        role: "Lorem ipsum",
        date: "12-12-2021",
        url: ""
    },
    {
        image: "https://www.codeur.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTc4MzA0NCwicHVyIjoiYmxvYl9pZCJ9fQ==--a2279d332dec1699e56ea5678a9635ba4aa18064/avatar.jpg",
        title: "Work 3",
        role: "Lorem ipsum",
        date: "12-12-2021",
        url: ""
    },
    {
        image: "https://www.codeur.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTc4MzA0NCwicHVyIjoiYmxvYl9pZCJ9fQ==--a2279d332dec1699e56ea5678a9635ba4aa18064/avatar.jpg",
        title: "Work 4",
        role: "Lorem ipsum",
        date: "12-12-2021",
        url: ""
    },
]


export const Status = () => {
    return (
        <Section className="flex max-md:flex-col items-start gap-4">
            <div className="flex-[3] w-full">
                <Card className="w-full p-4 flex flex-col gap-2">
                    <p className="text-lg text-muted-foreground">Side, fun projects.</p>
                    <div className="flex flex-col gap-4">
                        {SIDE_PROJECTS.map((project, index) => {
                            return <SideProject key={index} {...project} />;
                        })}
                    </div>
                </Card>
            </div>
            <div className="flex-[2] w-full flex flex-col gap-4">
                <Card className="p-4 flex-1">
                    <p className="text-lg text-muted-foreground">Work</p>
                    <div className="flex flex-col gap-4">
                        {WORKS.map((work, index) => {
                            return <Work key={index} {...work} />;
                        })}
                    </div>
                </Card>
                <Card className="p-4 flex-1">
                    <p className="text-lg text-muted-foreground">Contact me</p>
                    <ContactCard image="https://www.codeur.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTc4MzA0NCwicHVyIjoiYmxvYl9pZCJ9fQ==--a2279d332dec1699e56ea5678a9635ba4aa18064/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJqcGciLCJyZXNpemVfdG9fZml0IjpbNTAwLDUwMF19LCJwdXIiOiJ2YXJpYXRpb24ifX0=--bc8271a73afb673f8694614eebe78acb94883f32/avatar.jpg" mediumImage="https://www.codeur.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTc4MzA0NCwicHVyIjoiYmxvYl9pZCJ9fQ==--a2279d332dec1699e56ea5678a9635ba4aa18064/avatar.jpg" name="Armand Agogué" description="Software Developer" />
                </Card>
            </div>
        </Section>
    );
}

const ContactCard = (props: {
    image: string;
    mediumImage: string;
    name: string;
    description: string;
}) => {
    return (
        <Card className="p-3 bg-accent/10 flex items-center gap-4">
            <div className="relative">
                <img src={props.image} alt={props.name} className="w-10 h-10" />
                <img src={props.mediumImage} alt={props.name} className="w-4 h-4 absolute -bottom-2 -right-2" />
            </div>
            <div className="mr-auto">
                <div className="flex items-center gap-2">
                    <p className="text-xs font-semibold">{props.name}</p>
                </div>
                <p className="text-xs text-muted-foreground">{props.description}</p>
            </div>
            <ArrowUpRight />
        </Card>
    );
};


type SideProjectProps = {
    Logo: LucideIcon;
    title: string;
    description: string;
    url: string;
};

const SideProject = (props: SideProjectProps) => {
    return (
        <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
            <span className="bg-accent text-accent-foreground p-3 rounded-sm">
                <props.Logo />
            </span>
            <div>
                <p className="text-lg font-semibold">{props.title}</p>
                <p className="text-sm text-muted-foreground">{props.description}</p>
            </div>
        </Link>
    );
};

type WorkProps = {
    image: string;
    title: string;
    role: string;
    date: string;
    url: string;
    freelance?: boolean;
};

const Work = (props: WorkProps) => {
    return (
        <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
            <img src={props.image} alt={props.title} className="w-10 h-10 object-contain rounded-md" />
            <div className="mr-auto">
                <div className="flex items-center gap-2">
                    <p className="text-xs font-semibold">{props.title}</p>
                    {props.freelance && <Badge variant="outline">Mission</Badge>}
                </div>
                <p className="text-xs text-muted-foreground">{props.role}</p>
            </div>
            <p className="text-xs text-muted-foreground">{props.date}</p>
        </Link>
    );
};