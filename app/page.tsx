import React from 'react'
import Profile from '@/components/profile'
import About from '@/components/about'
import Work from '@/components/work'
import Projects from '@/components/projects'
import Skills from '@/components/skills';
import Contact from '@/components/contact';

const BLUR_FADE_DELAY = 0.04;

export default function page() {
  return (
    <div className="flex justify-center items-center">
      <div className='min-h-screen h-full w-[672px] mt-24 mb-24 px-5 md:px-2'>
        <Profile BLUR_FADE_DELAY={BLUR_FADE_DELAY} />
        <About BLUR_FADE_DELAY={BLUR_FADE_DELAY} />
        <Work BLUR_FADE_DELAY={BLUR_FADE_DELAY} />
        <Projects BLUR_FADE_DELAY={BLUR_FADE_DELAY} />
        <Skills BLUR_FADE_DELAY={BLUR_FADE_DELAY} />
        <Contact BLUR_FADE_DELAY={BLUR_FADE_DELAY} />
      </div>
    </div>
  )
}
