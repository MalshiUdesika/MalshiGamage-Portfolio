import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Code2, Server, Database, GitBranch, Globe, Terminal, Container, GraduationCap, MapPin, Briefcase } from "lucide-react";

const SKILLS = [
  { name: "HTML / CSS / Tailwind", level: 90, icon: Code2 },
  { name: "JavaScript / TypeScript", level: 85, icon: Terminal },
  { name: "React.js (MERN)", level: 85, icon: Globe },
  { name: "Node.js / PHP", level: 80, icon: Server },
  { name: "MongoDB / MySQL", level: 75, icon: Database },
  { name: "Python / Kotlin", level: 70, icon: Terminal },
  { name: "Git & GitHub", level: 80, icon: GitBranch },
  { name: "Docker / Linux", level: 65, icon: Container },
];

const INFO_CARDS = [
  { icon: GraduationCap, title: "Education", desc: "BICT (Hons) — University of Kelaniya" },
  { icon: Briefcase, title: "Focus", desc: "Full-Stack Development\nAI & Machine Learning" },
  { icon: MapPin, title: "Location", desc: "Walasmulla,\nSri Lanka" },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="About" className="py-24 bg-card">
      <div ref={ref} className="section-container">
        <h2
          className={`text-3xl sm:text-4xl font-heading font-bold text-center mb-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          About <span className="text-primary">Me</span>
        </h2>
        

        {/* Info cards row */}
        <div className={`grid sm:grid-cols-3 gap-4 mb-12 transition-all duration-700 delay-150 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {INFO_CARDS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-background border border-border rounded-2xl p-6 text-center hover:border-primary/40 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-heading font-semibold text-foreground mb-1">{title}</h4>
              <p className="text-sm text-muted-foreground whitespace-pre-line">{desc}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <h3 className="text-xl font-heading font-semibold mb-4 text-foreground">Who I Am</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Hi, I'm <span className="text-primary font-semibold">Malshi Gamage</span> —
              a motivated undergraduate pursuing BICT (Hons) in Software Development at the University of Kelaniya.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Skilled in full-stack development with React, Node.js, MongoDB, PHP, MySQL, and more.
              Passionate about AI, Machine Learning, and building innovative, user-centric solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Relevant coursework includes Data Structures, Web Development, Database Systems, Cyber Security, Networking, Software Engineering, and Mobile App Development.
            </p>
          </div>

          {/* Skills */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <h3 className="text-xl font-heading font-semibold mb-6 text-foreground">Technical Skills</h3>
            <div className="space-y-5">
              {SKILLS.map((skill, i) => {
                const Icon = skill.icon;
                return (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-bar-fill"
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${i * 100 + 400}ms`,
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
