import Image from 'next/image';
import { Navbar }         from '@/components/Navbar';
import { Hero }           from '@/components/Hero';
import { SectionTitle }   from '@/components/SectionTitle';
import { SkillPill }      from '@/components/SkillPill';
import { ExperienceCard } from '@/components/ExperienceCard';
import { EducationCard }  from '@/components/EducationCard';
import { ProjectCard }    from '@/components/ProjectCard';
import { ContactSection } from '@/components/ContactSection';
import { RevealWrapper }  from '@/components/RevealWrapper';
import { experiences, projects, skills, education } from '@/data/portfolio';

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* RevealWrapper: attaches IntersectionObserver on the client */}
      <RevealWrapper>
        <main>

          {/* ── HERO ──────────────────────────────────────────────── */}
          <Hero />

          {/* ── ABOUT ─────────────────────────────────────────────── */}
          <section
            id="about"
            className="border-t border-white/[0.06] py-20"
          >
            <div className="mx-auto w-[min(1100px,92%)]">
              <SectionTitle title="About Me" />

              {/* Two-column: text left, photo right */}
              <div className="grid gap-12 md:grid-cols-[1fr_340px] items-start">

                {/* Left — text */}
                <div className="space-y-5 text-[1.05rem] text-zinc-400 leading-relaxed">
                  <p className="reveal">
                    I am an aspiring Software Engineer with strong proficiency in C++, Python, Data Structures & Algorithms, and full-stack development.
                  </p>
                  <p className="reveal">
                    I have experience in building scalable web applications, asynchronous backend systems, real-time data processing pipelines, and AI-driven applications using Flask, Django, SQL, Redis, and cloud deployment.
                  </p>
                  <p className="reveal">
                    I am passionate about designing efficient, reliable, and user-centric software with a focus on performance optimization, clean architecture, and problem-solving.
                  </p>
                </div>

                {/* Right — photo */}
                <div className="reveal justify-self-center md:justify-self-end">
                  <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-2 shadow-xl">
                  <div className="relative rounded-xl overflow-hidden w-[280px] h-[320px] md:w-[300px] md:h-[360px]">
                      <Image src="/photo.jpeg" alt="Chandra Kiran Narala" fill className="object-cover object-top" priority />
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Arsenal — below the grid, matching reference */}
              <div id="arsenal" className="mt-16 pt-16 border-t border-white/[0.06]">
                <h3 className="reveal text-center text-xl font-semibold mb-8 text-zinc-200 tracking-tight">
                  Technical Arsenal
                </h3>
                <div className="reveal flex flex-wrap justify-center gap-2.5">
                  {skills.map((skill) => (
                    <SkillPill key={skill} skill={skill} />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── EXPERIENCE ────────────────────────────────────────── */}
          <section
            id="experience"
            className="border-t border-white/[0.06] py-20"
          >
            <div className="mx-auto w-[min(900px,92%)]">
              <SectionTitle title="Work Experience" />

              <div className="relative">
                {experiences.map((exp) => (
                  <ExperienceCard key={exp.company} exp={exp} />
                ))}
              </div>
            </div>
          </section>

          <section
            id="education"
            className="border-t border-white/[0.06] py-20"
          >
            <div className="mx-auto w-[min(900px,92%)]">
              <SectionTitle title="Education" />

              <div className="relative">
                {education.map((edu) => (
                  <EducationCard key={edu.institution} edu={edu} />
                ))}
              </div>
            </div>
          </section>

          {/* ── PROJECTS ──────────────────────────────────────────── */}
          <section
            id="projects"
            className="border-t border-white/[0.06] py-20"
          >
            <div className="mx-auto w-[min(1100px,92%)]">
              <SectionTitle title="Featured Projects" />

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
              </div>
            </div>
          </section>

          {/* ── CONTACT ───────────────────────────────────────────── */}
          <ContactSection />

        </main>
      </RevealWrapper>
    </>
  );
}
