import { ComponentPropsWithoutRef } from "react";
import { Section } from "./Section";
import { cn } from "@/lib/utils";
import { GithubIcon } from "./icons/GithubIcon";
import Link from "next/link";

const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
    return <span className={cn("bg-accent/30  hover:bg-accent/50 font-mono border border-accent px-1 py-0.5 text-primary rounded-sm transition-colors", className)} {...props} />;
};

export const Hero = () => {
    return (
        <Section className="flex max-lg:flex-col items-start gap-4">
            <div className="flex-[3] with-full flex flex-col gap-2">
                <h2 className="font-caption text-4xl text-primary font-bold">Armand Agogué</h2>
                <h3 className="font-caption text-2xl">Sft Dev && Creator</h3>
                <p className="text-base">I'm a passionate software developer and freelance <Link href="https://github.com/MOIJESUIS2ENMOI"><Code className="inline-flex items-center gap-1"><GithubIcon size={16} className="inline" />graphic designer</Code></Link> I've worked on various projects from small startups to large corporations.</p>
            </div>
            <div className="flex-[2] max-md:m-auto ml-auto">
                <img src="https://www.codeur.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTc4MzA0NCwicHVyIjoiYmxvYl9pZCJ9fQ==--a2279d332dec1699e56ea5678a9635ba4aa18064/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJqcGciLCJyZXNpemVfdG9fZml0IjpbNTAwLDUwMF19LCJwdXIiOiJ2YXJpYXRpb24ifX0=--bc8271a73afb673f8694614eebe78acb94883f32/avatar.jpg" className="w-full h-auto max-w-sm max-md:w-56" alt="Armand Agogué" />
            </div>
        </Section>
    );
}