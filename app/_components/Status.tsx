import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { Code } from "lucide-react";
import { ContactCard } from "./ContactCard";
import { SideProjectProps, SideProject } from "./SideProjectProps";
import { WorkProps, Work } from "./WorkProps";

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
    }
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
                <Card className="p-4 flex-1 flex flex-col gap-2">
                    <p className="text-lg text-muted-foreground">Contact me</p>
                    <ContactCard image="https://www.codeur.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTc4MzA0NCwicHVyIjoiYmxvYl9pZCJ9fQ==--a2279d332dec1699e56ea5678a9635ba4aa18064/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJqcGciLCJyZXNpemVfdG9fZml0IjpbNTAwLDUwMF19LCJwdXIiOiJ2YXJpYXRpb24ifX0=--bc8271a73afb673f8694614eebe78acb94883f32/avatar.jpg" mediumImage="https://img.freepik.com/vecteurs-libre/nouvelle-conception-icone-x-du-logo-twitter-2023_1017-45418.jpg?w=740&t=st=1720383751~exp=1720384351~hmac=7c5b0b951afd6844029a67168cbc9595335595b155da26d47b74a74bdce62202" name="Armand Agogué" description="Software Developer" />
                    <ContactCard image="https://www.codeur.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTc4MzA0NCwicHVyIjoiYmxvYl9pZCJ9fQ==--a2279d332dec1699e56ea5678a9635ba4aa18064/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJqcGciLCJyZXNpemVfdG9fZml0IjpbNTAwLDUwMF19LCJwdXIiOiJ2YXJpYXRpb24ifX0=--bc8271a73afb673f8694614eebe78acb94883f32/avatar.jpg" mediumImage="https://img.freepik.com/vecteurs-libre/nouvelle-conception-icone-x-du-logo-twitter-2023_1017-45418.jpg?w=740&t=st=1720383751~exp=1720384351~hmac=7c5b0b951afd6844029a67168cbc9595335595b155da26d47b74a74bdce62202" name="Armand Agogué" description="Software Developer" />
                </Card>
            </div>
        </Section>
    );
}

