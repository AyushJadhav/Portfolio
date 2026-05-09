import { NavLink } from "react-router-dom";
import { personalInfo } from "../data/portfolioData";

type NavItem = {
  path: string;
  label: string;
};

export default function Navbar() {
  const links: NavItem[] = [
    { path: "/", label: "Home" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/cv", label: "CV" },
    { path: "/certifications", label: "Certifications" },
    { path: "/hire-me", label: "Hire Me" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <NavLink to="/" className="text-xl font-bold tracking-tight">
          {personalInfo.name}
        </NavLink>

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
      </nav>
    </header>
  );
}