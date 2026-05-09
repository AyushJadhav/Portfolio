import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-neutral-400">
      ©2026 by {personalInfo.name}. All rights reserved.
    </footer>
  );
}