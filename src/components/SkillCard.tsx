import type { Skill } from "../data/portfolioData";

export default function SkillCard({ title, description }: Skill) {
  return (
    <article className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl">
      <h3 className="mb-3 text-xl font-bold">{title}</h3>
      <p className="leading-7 text-neutral-300">{description}</p>
    </article>
  );
}
