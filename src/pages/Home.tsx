import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import SkillCard from "../components/SkillCard";
import ProjectPreviewCard from "../components/ProjectPreviewCard";
import { skills, projects } from "../data/portfolioData";

export default function Home() {
  return (
    <main>
      <HeroSection />

      <motion.section
        className="mx-auto max-w-6xl px-6 py-16"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="mb-8 text-3xl font-bold">What I do</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.03 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SkillCard {...skill} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="mx-auto max-w-6xl px-6 py-16"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="mb-8 text-3xl font-bold">Featured projects</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.03 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectPreviewCard title={project.title} />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  );
}