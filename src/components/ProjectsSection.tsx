import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ExternalLink, Github, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import eventManage from "@/assets/EventManage.png"

const FILTERS = ["All", "Web"];

const PROJECTS = [
  {
    title: "Recycle Hub",
    category: "Web",
    stack: ["React", "Node.js", "JavaScript", "Tailwind CSS", "Supabase"],
    desc: "A community-driven web platform promoting sustainable waste management. Features waste sorting guidance, recycling center locator, donation place, and a secondhand marketplace. Implemented recycling center locator and donation features with responsive UI.",
    color: "from-primary to-teal",
    type: "Group Project",
  },
  {
    title: "Learning Institute Management System",
    category: "Web",
    stack: ["JavaScript", "PHP", "MySQL", "CSS"],
    desc: "A web-based system for managing student records and course information. Developed backend logic using PHP and integrated MySQL database with dynamic front-end interfaces for improved usability.",
    color: "from-teal to-accent",
    type: "Group Project",
  },
  {
    title: "Campus Event Management System",
    category: "Web",
    stack: ["JavaScript", "PHP", "MySQL", "Bootstrap", "CSS"],
    desc: "A full-stack event management platform with CRUD operations for event scheduling and participant registration. Integrated database connectivity for real-time data management.",
    color: "from-accent to-primary",
    type: "Individual Project",
  },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<(typeof PROJECTS)[0] | null>(null);

  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="Projects" className="py-24 bg-background">
      <div ref={ref} className="section-container">
        <h2
          className={`text-3xl sm:text-4xl font-heading font-bold text-center mb-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          My <span className="text-primary">Projects</span>
        </h2>
        

        {/* Filter tabs */}
        <div className="flex justify-center gap-2 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === f
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <div
              key={project.title}
              onClick={() => setSelectedProject(project)}
              className={`group cursor-pointer bg-card border border-border rounded-2xl overflow-hidden card-hover transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100 + 200}ms` }}
            >
              <div className={`h-40 bg-gradient-to-br ${project.color} flex flex-col items-center justify-center gap-2`}>
                <span className="font-heading text-2xl font-bold text-primary-foreground/80">{project.title[0]}</span>
                <span className="text-xs text-primary-foreground/60 font-medium">{project.type}</span>
              </div>
              <div className="p-5">
                <h3 className="font-heading font-semibold text-lg mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.stack.map((t) => (
                    <span key={t} className="px-2 py-0.5 text-xs rounded-full bg-secondary text-secondary-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">{project.desc}</p>
                <div className="flex gap-3 mt-4">
                  <a href="https://github.com/MalshiUdesika" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-primary hover:underline font-medium">
                    GitHub <Github className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 backdrop-blur-sm p-4" onClick={() => setSelectedProject(null)}>
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-background border border-border rounded-2xl max-w-lg w-full p-6 animate-scale-in shadow-2xl"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-heading text-2xl font-bold">{selectedProject.title}</h3>
                <p className="text-sm text-muted-foreground">{selectedProject.type}</p>
              </div>
              <button onClick={() => setSelectedProject(null)} className="p-1 rounded-lg hover:bg-muted">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.stack.map((t) => (
                <span key={t} className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium">
                  {t}
                </span>
              ))}
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">{selectedProject.desc}</p>
            <div className="flex gap-3">
              <Button variant="outline" size="sm" asChild>
                <a href="https://github.com/MalshiUdesika" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-1" /> GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
