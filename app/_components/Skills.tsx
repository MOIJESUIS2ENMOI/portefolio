import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { ReactIcon } from "./icons/ReactIcon";
import { Code } from "./Code";
import { TailwindIcon } from "./icons/TailwindIcon";
import { OpenAiIcon } from "./icons/OpenAiIcon";

export const Skills = () => {
    return (
        <Section className="flex flex-col gap-4 items-start">
            <Badge variant={"outline"}>Skills</Badge>
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                I love Working On
            </h2>
            <div className="flex max-md:flex-col gap-4 flex-1">
                <div className="flex flex-col gap-2 flex-1">
                    <ReactIcon size={42}/>
                    <h3 className="text-2xl font-semibold tracking-tight">React</h3>
                    <p className="text-sm text-muted-foreground">Best FrameWork is <Code className="inline-flex items-center gap-1">React</Code> but also <Code className="inline-flex items-center gap-1">Next.js</Code></p>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                    <TailwindIcon size={42}/>
                    <h3 className="text-2xl font-semibold tracking-tight">TailWind CSS</h3>
                    <p className="text-sm text-muted-foreground">Best CSS is <Code className="inline-flex items-center gap-1">TailWind</Code> but also <Code className="inline-flex items-center gap-1">Next.js</Code></p>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                    <OpenAiIcon size={42}/>
                    <h3 className="text-2xl font-semibold tracking-tight">OpenAi</h3>
                    <p className="text-sm text-muted-foreground">Best AI is <Code className="inline-flex items-center gap-1">OpenAi</Code> but also <Code className="inline-flex items-center gap-1">Next.js</Code></p>
                </div>
            </div>
        </Section>
    );
};