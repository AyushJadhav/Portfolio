import { useState } from "react";
import { NavLink } from "react-router-dom";
import { personalInfo } from "../data/portfolioData";

type NavItem = {
  path: string;
  label: string;
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links: NavItem[] = [
    { path: "/", label: "Home" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/cv", label: "CV" },
    { path: "/certifications", label: "Certifications" },
    { path: "/hire-me", label: "Hire Me" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/90 backdrop-blur">
      <nav className="mx-auto max-w-6xl px-6 py-5">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="text-xl font-bold tracking-tight">
            {personalInfo.name}
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden gap-8 text-sm text-neutral-300 md:flex">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  isActive ? "text-cyan-400" : "hover:text-white"
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="text-2xl text-white md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="mt-5 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-neutral-300 md:hidden">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-cyan-400"
                    : "hover:text-white"
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}