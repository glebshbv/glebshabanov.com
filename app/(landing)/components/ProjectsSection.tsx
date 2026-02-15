import Link from 'next/link'
import React from 'react'

const projects = [
    {
        name: "GoodTake.ai",
        description: "GoodTake.ai provides Generative AI tools for marketing agencies to create production-ready content at scale.",
        stack: ["Go", "Next.JS"],
        url: "https://goodtake.ai",
        github: "https://github.com/goodtake-ai",
        status: "active",
    },
    {
        name: "Envloped.com",
        description: "Envloped.com rethinks how email communication is done in the Agentic AI era",
        stack: ["Next.JS"],
        url: "https://envloped.com",
        status: "active",
    },
    {
        name: "Gentle Invoice",
        description: "Gentle Invoice helps small businesses manage their invoices and payments.",
        stack: ["Ruby on Rails", "React"],
        url: "https://gentleinvoice.com",
        github: "https://github.com/gentleinvoice",
        status: "stale",
    },
    {
        name: "Smoofy.co",
        description: "Smoofy.co was a b2b fintech platform for small businesses to use crypto as a mode of payment.",
        stack: ["Python", "React"],
        url: "https://smoofy.co",
        github: "https://github.com/smoofy-co",
        status: "sold",
    },
]

export default function ProjectsSection() {
  return (
    <section className="flex flex-col w-full gap-2" aria-labelledby="projects-heading">
      <header>
        <h2 id="projects-heading" className="text-2xl font-bold">Projects</h2>
      </header>
      <div className="prose prose-neutral max-w-none">
        <p className="text-md">
            My entire career has been about building great startups for customers. Some of them were successful, some of them were not. Learnings that I gained from building them as a founder are invaluable.
        </p>
      </div>
      <div className="space-y-4">
        {projects.map((project) => (
            <article key={project.name} className="border rounded-lg p-4">
                <header className="flex flex-row items-center gap-2">
                    <Link href={project.url} className="hover:text-blue-600 transition-colors">
                        <h3 className="text-lg font-bold underline">{project.name}</h3>
                    </Link>
                    <span className="italic text-sm text-gray-600">{project.status}</span>
                </header>
                <p className="text-md mt-2">{project.description}</p>
                <p className="text-md"><strong>Technology Stack:</strong> {project.stack.join(", ")}</p>
            </article>
        ))}
      </div>
      <div className="border-t my-2" ></div>
    </section>
  )
}
