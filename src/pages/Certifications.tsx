import { certifications } from "../data/portfolioData";

export default function Certifications() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="mb-4 text-5xl font-bold">Certifications</h1>

      <p className="mb-10 max-w-2xl text-neutral-300">
        Professional certifications and technical credentials.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {certifications.map((certification) => (
          <article
            key={certification.title}
            className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl transition hover:-translate-y-1 hover:bg-white/10"
          >
            <a
              href={certification.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img
                src={certification.image}
                alt={certification.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <h2 className="mb-2 text-xl font-bold text-white">
                  {certification.title}
                </h2>

                <p className="mb-4 text-sm text-neutral-300">
                  {certification.description}
                </p>

                <span className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20">
                  View Certificate
                </span>
              </div>
            </a>
          </article>
        ))}
      </div>
    </main>
  );
}