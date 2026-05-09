import { Link } from "react-router-dom";
import { personalInfo } from "../data/portfolioData";

export default function HeroSection() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
      <div>
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Portfolio
        </p>

        <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
          Hi, I’m {personalInfo.name}. I build Java, Spring Boot, and cloud-based backend systems.
        </h1>

        <p className="mb-8 text-lg leading-8 text-neutral-300">
          {personalInfo.title}. This portfolio highlights my projects, skills, education, certifications, and contact details.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link to="/portfolio" className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-neutral-950 hover:bg-cyan-400">
            View Portfolio
          </Link>
          <Link to="/hire-me" className="rounded-xl border border-white/15 px-6 py-3 font-semibold hover:bg-white/10">
            Hire Me
          </Link>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
        <div className="flex aspect-square items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-500/30 to-blue-500/10 text-center">
              <div className="flex flex-col items-center">
      <img
        src="/passportPic.png"
        alt="Ayush Jadhav"
        className="h-110 w-110 rounded-full object-cover shadow-2xl ring-4 ring-white/20"
      />

      <p className="mt-4 text-neutral-300">Software Developer</p>
      </div>
        </div>
      </div>
    </section>
  );
}