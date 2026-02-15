import React from 'react'
import StravaWidget from './widgets/StravaWidget'

const ARTICLE_LINKS = [
    { title: 'Fake Mayo', href: 'https://www.fakemayo.com/p/glebs-learnings-from-building-and-growing-an-acting-job-board' },
    { title: 'Kubia', href: 'https://e27.co/why-kubia-is-not-in-a-rush-to-apply-for-singapores-digital-bank-license-20200114/' },
    { title: 'Crunchbase', href: 'https://www.crunchbase.com/person/gleb-shabanov-ee2b' },
] as const

export default function MediaSection() {
  return (
    <section className="flex flex-col w-full gap-4" aria-labelledby="media-heading">
      <header>
        <h2 id="media-heading" className="text-2xl font-bold">Media & Appearances</h2>
      </header>
      <div className="flex flex-wrap gap-2">
        {ARTICLE_LINKS.map(({ title, href }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="block px-3 py-1.5 text-sm text-neutral-600 hover:text-neutral-900 border border-neutral-200 hover:border-neutral-400 rounded transition-colors"
          >
            {title}
          </a>
        ))}
      </div>
      <div className="w-full">
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/episode/67ejOxsK2awXjYIFezzYKU/video?utm_source=generator"
          width="624"
          height="351"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="w-full max-w-[624px]"
          title="Gleb Shabanov Spotify Podcast Episode"
        />
      </div>
    <div className="border-t my-2" />
      <div className="md:hidden">
        <StravaWidget />
      </div>
  </section>
  )
}