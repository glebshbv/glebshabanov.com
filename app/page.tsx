
import AboutSection from "./(landing)/components/AboutSection";
import ProjectsSection from "./(landing)/components/ProjectsSection";
import MediaSection from "./(landing)/components/MediaSection";
import BioSection from "./(landing)/components/BioSection";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center" role="main">
      <div className="flex w-full max-w-5xl flex-1 flex-col gap-12 px-4 py-14 md:flex-row md:items-start md:gap-16">
        <aside className="md:sticky md:top-8">
          <BioSection />
        </aside>
        <section className="flex flex-col w-full gap-4" aria-label="Content sections">
          <AboutSection />
          <ProjectsSection /> 
          <MediaSection />
        </section>
      </div>
    </main>
  );
}
