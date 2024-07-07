import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { ReactIcon } from "./icons/ReactIcon";
import { Code } from "./Code";
import { TailwindIcon } from "./icons/TailwindIcon";
import { OpenAiIcon } from "./icons/OpenAiIcon";
import { ContactCard } from "./ContactCard";

export const Contact = () => {
    return (
        <Section className="flex flex-col gap-4 items-start">
            <Badge variant={"outline"}>Contact Me</Badge>
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                I Would Love Working With You
            </h2>
            <div className="flex max-md:flex-col gap-4 w-full">
                <ContactCard image="https://www.codeur.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTc4MzA0NCwicHVyIjoiYmxvYl9pZCJ9fQ==--a2279d332dec1699e56ea5678a9635ba4aa18064/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJqcGciLCJyZXNpemVfdG9fZml0IjpbNTAwLDUwMF19LCJwdXIiOiJ2YXJpYXRpb24ifX0=--bc8271a73afb673f8694614eebe78acb94883f32/avatar.jpg" mediumImage="https://img.freepik.com/vecteurs-libre/nouvelle-conception-icone-x-du-logo-twitter-2023_1017-45418.jpg?w=740&t=st=1720383751~exp=1720384351~hmac=7c5b0b951afd6844029a67168cbc9595335595b155da26d47b74a74bdce62202" name="Armand Agogué" description="Software Developer" />
                <ContactCard image="https://www.codeur.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTc4MzA0NCwicHVyIjoiYmxvYl9pZCJ9fQ==--a2279d332dec1699e56ea5678a9635ba4aa18064/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJqcGciLCJyZXNpemVfdG9fZml0IjpbNTAwLDUwMF19LCJwdXIiOiJ2YXJpYXRpb24ifX0=--bc8271a73afb673f8694614eebe78acb94883f32/avatar.jpg" mediumImage="https://img.freepik.com/vecteurs-libre/nouvelle-conception-icone-x-du-logo-twitter-2023_1017-45418.jpg?w=740&t=st=1720383751~exp=1720384351~hmac=7c5b0b951afd6844029a67168cbc9595335595b155da26d47b74a74bdce62202" name="Armand Agogué" description="Software Developer" />
                <ContactCard image="https://www.codeur.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTc4MzA0NCwicHVyIjoiYmxvYl9pZCJ9fQ==--a2279d332dec1699e56ea5678a9635ba4aa18064/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJqcGciLCJyZXNpemVfdG9fZml0IjpbNTAwLDUwMF19LCJwdXIiOiJ2YXJpYXRpb24ifX0=--bc8271a73afb673f8694614eebe78acb94883f32/avatar.jpg" mediumImage="https://img.freepik.com/vecteurs-libre/nouvelle-conception-icone-x-du-logo-twitter-2023_1017-45418.jpg?w=740&t=st=1720383751~exp=1720384351~hmac=7c5b0b951afd6844029a67168cbc9595335595b155da26d47b74a74bdce62202" name="Armand Agogué" description="Software Developer" />
            </div>
        </Section>
    ); 
};