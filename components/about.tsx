import React from 'react'
import BlurFade from './magicui/blur-fade'
import { DATA } from '@/data/index'

export default function about({ BLUR_FADE_DELAY }: { BLUR_FADE_DELAY: number }) {
    return (
        <section id="about" className='space-y-1 mt-10'>
            <BlurFade delay={BLUR_FADE_DELAY * 3}>
                <h1 className="text-2xl font-bold">About</h1>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
                <p className="max-w-full text-pretty text-[16px] text-muted-foreground dark:prose-invert text-neutral-700 dark:text-neutral-200">
                    {DATA.summary}
                </p>
            </BlurFade>
        </section>
    )
}
