import type { Project } from "../data/portfolioData";

export default function ProjectCard({ title, description, tech }: Project) {

  const isTodoProject = title.toLowerCase().includes("todo");

  const isMentalHealthProject =
    title.toLowerCase().includes("mental health");

  return (
    <article className="group rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl transition hover:-translate-y-2 hover:bg-white/10">

      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
        Project
      </p>

      <h3 className="mb-3 text-2xl font-bold transition group-hover:text-cyan-400">
        {title}
      </h3>

      <p className="mb-5 leading-7 text-neutral-300">
        {description}
      </p>

      <p className="text-sm text-neutral-400">
        {tech}
      </p>

      {/* Todo App Buttons */}
      {isTodoProject && (
        <div className="mt-6 flex flex-wrap gap-3">

          <a
            href="https://todo-frontend-vert-kappa.vercel.app/login"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-black transition hover:bg-cyan-400"
          >
            Live App
          </a>

          <a
            href="https://github.com/AyushJadhav/Todo"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/20 px-4 py-2 text-sm transition hover:bg-white/10"
          >
            Backend
          </a>

          <a
            href="https://github.com/AyushJadhav/Todo-Frontend"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/20 px-4 py-2 text-sm transition hover:bg-white/10"
          >
            Frontend
          </a>

        </div>
      )}

      {/* Mental Health App Buttons */}
      {isMentalHealthProject && (
        <div className="mt-6 flex flex-wrap gap-3">

          <a
            href="https://mentalhealthanaylsis.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-black transition hover:bg-cyan-400"
          >
            Live App
          </a>

        </div>
      )}

    </article>
  );
}