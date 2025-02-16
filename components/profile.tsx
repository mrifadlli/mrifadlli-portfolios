import React from 'react'
import BlurFadeText from './magicui/blur-fade-text'
import BlurFade from './magicui/blur-fade'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { DATA } from '@/data/index'

export default function profile({ BLUR_FADE_DELAY }: { BLUR_FADE_DELAY: number }) {
    return (
        <section id="hero">
            <div className="mx-auto w-full max-w-2xl space-y-8">
                <div className="gap-4 flex items-center justify-between">
                    <div className="flex-col flex flex-1 space-y-2.5">
                        <BlurFadeText
                            delay={BLUR_FADE_DELAY}
                            className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                            yOffset={8}
                            text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
                        />
                        <BlurFadeText
                            className="max-w-[600px] md:text-xl"
                            delay={BLUR_FADE_DELAY}
                            text={DATA.description}
                        />
                    </div>
                    <BlurFade delay={BLUR_FADE_DELAY}>
                        <Avatar className="size-28">
                            <AvatarImage className="w-full h-full object-cover object-top rounded-full" alt={DATA.name} src={DATA.avatarUrl} />
                            <AvatarFallback>{DATA.initials}</AvatarFallback>
                        </Avatar>
                    </BlurFade>
                </div>
            </div>
        </section>
    )
}
