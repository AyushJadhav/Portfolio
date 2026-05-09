import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/portfolioData";

export default function Portfolio() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">

      {/* Header Animation */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="mb-4 text-5xl font-bold">Portfolio</h1>

        <p className="mb-10 max-w-2xl text-neutral-300">
          A selection of projects across Python, Django, Java development, Spring Boot, microservices, and cloud computing.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              y: -10,
              scale: 1.04,
              boxShadow: "0px 20px 40px rgba(0,0,0,0.4)"
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1
            }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>

    </main>
  );
}