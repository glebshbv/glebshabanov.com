import Image from 'next/image'
import React from 'react'
import StravaWidget from './widgets/StravaWidget'

export default function BioSection() {
  return (
    <div className="flex flex-col items-center gap-8 md:sticky md:top-8 md:w-72 md:shrink-0">
      <div className="flex flex-col items-center gap-2">
        <Image
        src="/gleb.JPG"
        alt="Gleb Shabanov - Tech entrepreneur and software engineer based in Singapore"
        width={160}
        height={160}
        className="h-32 w-32 overflow-hidden rounded-full object-cover md:h-40 md:w-40"
        />
        <h1 className="text-xl font-bold">Gleb Shabanov</h1>
        <div className="flex gap-3">
          <a href="https://github.com/glebshbv" className="text-sm underline opacity-60 hover:opacity-100">
              GitHub
          </a>
          <a href="https://sg.linkedin.com/in/glebshabanov" className="text-sm underline opacity-60 hover:opacity-100">
              LinkedIn
          </a>
          <a href="https://x.com/itisgleb" className="text-sm underline opacity-60 hover:opacity-100">
              Twitter
          </a>
          <a href="https://www.instagram.com/gleeeeb/" className="text-sm underline opacity-60 hover:opacity-100">
              Instagram
          </a>
        </div>
      </div>
      <div className="hidden md:block">
        <StravaWidget />
      </div>
</div>
  )
}
