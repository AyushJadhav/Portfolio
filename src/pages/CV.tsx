export default function CV() {
  const resumeUrl = "/Ayush_Jadhav_Resume.pdf";

  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="mb-3 text-5xl font-bold">CV</h1>
          <p className="text-neutral-300">
            View or download my latest resume.
          </p>
        </div>

        <a
          href={resumeUrl}
          download="Ayush_Jadhav_Resume.pdf"
          className="rounded-xl bg-cyan-500 px-6 py-3 text-center font-semibold text-neutral-950 hover:bg-cyan-400"
        >
          Download Resume
        </a>
      </div>

      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white shadow-2xl">
        <iframe
          src={resumeUrl}
          title="Ayush Jadhav Resume"
          className="h-[900px] w-full"
        />
      </div>
    </main>
  );
}