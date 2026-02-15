import React from 'react'

export default function AboutSection() {
  return (
    <article className="flex flex-col w-full gap-2">
        <header>
          <h2 className="text-2xl font-bold">About Me</h2>
        </header>
        <div className="prose prose-neutral max-w-none">
        <p className="text-md">
            I am a tech entrepreneur with a passion for shipping products that help people live better lives.
        </p>
        <p className="text-md">
            I specialize in Go, React and Ruby on Rails development.
        </p>
        <p className="text-md">
            I am building my career in Singapore, where I moved back in 2018. 
        </p>
        <p className="text-md">
            I am happily married to my amazing wife Steph. 
        </p>
        </div>
        <div className="border-t my-2" />
    </article>
  )
}
