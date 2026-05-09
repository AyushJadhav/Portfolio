import type { ReactNode } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function ContactInfo() {
  return (
    <div>
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
        Available for opportunities
      </p>

      <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
        Let’s set a meeting time or a coffee time!
      </h1>

      <p className="mb-10 max-w-xl text-lg leading-8 text-neutral-300">
        Reach out for Java developer roles, backend projects, cloud opportunities, or collaborations.
      </p>

      <div className="space-y-5 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
        <InfoRow icon={<Mail />} label="Email" value={personalInfo.email} href={`mailto:${personalInfo.email}`} />
        <InfoRow icon={<Phone />} label="Phone" value={personalInfo.phone} href={`tel:${personalInfo.phone}`} />
        <InfoRow icon={<MapPin />} label="Location" value={personalInfo.location} />
      </div>
    </div>
  );
}

type InfoRowProps = {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
};

function InfoRow({ icon, label, value, href }: InfoRowProps) {
  return (
    <div className="flex gap-4">
      <div className="mt-1 h-5 w-5 text-cyan-400">{icon}</div>
      <div>
        <p className="font-semibold">{label}</p>
        {href ? (
          <a href={href} className="text-neutral-300 hover:text-white">{value}</a>
        ) : (
          <p className="text-neutral-300">{value}</p>
        )}
      </div>
    </div>
  );
}