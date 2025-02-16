import React from 'react'
import BlurFade from './magicui/blur-fade'
import { DATA } from '@/data'
import { ResumeCard } from './resume-card'

export default function work({ BLUR_FADE_DELAY }: { BLUR_FADE_DELAY: number }) {
    return (
        <section id="work" style={{ marginTop:"30px" }}>
            <div className="flex min-h-0 flex-col">
                <BlurFade delay={BLUR_FADE_DELAY * 5}>
                    <h2 className="text-xl font-bold">Work Experience</h2>
                </BlurFade>
                {DATA.work.map((work, id) => (
                    <BlurFade
                        key={id}
                        delay={BLUR_FADE_DELAY * 6 + id * 0.05}
                    >
                        <ResumeCard
                            key={work.company}
                            logoUrl={work.logoUrl}
                            altText={work.company}
                            title={work.company}
                            subtitle={work.title}
                            href={work.href}
                            badges={work.badges}
                            period={`${work.start} - ${work.end ?? "Present"}`}
                            description={work.description}
                        />
                    </BlurFade>
                ))}
            </div>
        </section>
    )
}
