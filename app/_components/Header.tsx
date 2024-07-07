import { buttonVariants } from '@/components/ui/button';
import { Section } from './Section';
import { GithubIcon } from './icons/GithubIcon';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export const Header = () => {
    return (
        <header className="sticky top-0 py-4">
            <Section className="flex items-center justify-between">
                <h1 className="text-4xl font-bold text-primary">Mon PorteFolio de Fou</h1>
                <div>
                    <ul className="flex item-center gap-2">
                    <Link className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")} href="https://github.com/MOIJESUIS2ENMOI">
                        <GithubIcon size={12} className="text-foreground"/>
                    </Link>
                    <Link className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")} href="https://github.com/MOIJESUIS2ENMOI">
                        <GithubIcon size={12} className="text-foreground"/>
                    </Link>
                    <Link className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")} href="https://github.com/MOIJESUIS2ENMOI">
                        <GithubIcon size={12} className="text-foreground"/>
                    </Link>
                    <Link className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")} href="https://github.com/MOIJESUIS2ENMOI">
                        <GithubIcon size={12} className="text-foreground"/>
                    </Link>
                    </ul>
                    
                </div>
            </Section>
        </header>
    )
};