import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Code2, Server, Database, GitBranch, Globe, Terminal, Container, GraduationCap, MapPin, Briefcase, Layout, Database as DbIcon, Wrench, Code } from "lucide-react";

const SKILLS_CATEGORIES = {
  Frontend: [
    { name: "HTML / CSS", level: 90, icon: Code2 },
    { name: "Tailwind CSS", level: 90, icon: Layout },
    { name: "React.js", level: 85, icon: Globe },
  ],
  Backend: [
    { name: "Node.js", level: 80, icon: Server },
    { name: "PHP", level: 80, icon: Server },
    { name: "MongoDB", level: 75, icon: DbIcon },
    { name: "MySQL", level: 75, icon: DbIcon },
  ],
  Languages: [
    { name: "JavaScript", level: 85, icon: Code },
    { name: "TypeScript", level: 85, icon: Code },
    { name: "Python", level: 70, icon: Terminal },
    { name: "Kotlin", level: 70, icon: Terminal },
  ],
  Tools: [
    { name: "Git & GitHub", level: 80, icon: GitBranch },
    { name: "Docker", level: 65, icon: Container },
    { name: "Linux", level: 65, icon: Terminal },
  ],
};

const INFO_CARDS = [
  { icon: GraduationCap, title: "Education", desc: "BICT (Hons) — University of Kelaniya" },
  { icon: Briefcase, title: "Focus", desc: "Full-Stack Development\nAI & Machine Learning" },
  { icon: MapPin, title: "Location", desc: "Walasmulla,\nSri Lanka" },
];

const CATEGORY_ACCENT = {
  Frontend: "from-violet-500/20 to-violet-500/5",
  Backend:  "from-cyan-500/20 to-cyan-500/5",
  Languages:"from-emerald-500/20 to-emerald-500/5",
  Tools:    "from-amber-500/20 to-amber-500/5",
};

const CATEGORY_DOT = {
  Frontend: "bg-violet-500",
  Backend:  "bg-cyan-500",
  Languages:"bg-emerald-500",
  Tools:    "bg-amber-500",
};

const CATEGORY_BAR = {
  Frontend: "from-violet-500 to-violet-400",
  Backend:  "from-cyan-500 to-cyan-400",
  Languages:"from-emerald-500 to-emerald-400",
  Tools:    "from-amber-500 to-amber-400",
};

const CATEGORY_ICON = {
  Frontend: "text-violet-400",
  Backend:  "text-cyan-400",
  Languages:"text-emerald-400",
  Tools:    "text-amber-400",
};

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="About" className="py-28 bg-card relative overflow-hidden">

      {/* Subtle decorative background blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

      <div ref={ref} className="section-container relative">

        {/* ── Section heading ── */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground">
            About <span className="text-primary">Me</span>
          </h2>

        </div>

        {/* ── Info cards ── */}
        <div
          className={`grid sm:grid-cols-3 gap-4 mb-16 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {INFO_CARDS.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="relative bg-background border border-border rounded-2xl p-6 text-center overflow-hidden
                         hover:border-primary/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5
                         transition-all duration-300 group"
            >
              {/* top-edge accent line */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3
                              group-hover:bg-primary/20 group-hover:scale-105 transition-all duration-300">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-heading font-semibold text-foreground text-sm mb-1 tracking-wide">{title}</h4>
              <p className="text-sm text-muted-foreground whitespace-pre-line leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* ── Main two-column layout ── */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* ── Bio column ── */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative bg-background border border-border rounded-3xl p-8 sm:p-9
                            hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">

              {/* Corner decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-[80px] rounded-tr-3xl
                              bg-gradient-to-bl from-primary/6 to-transparent pointer-events-none" />

              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 rounded-full bg-primary" />
                <h3 className="text-lg font-heading font-semibold text-foreground tracking-tight">
                  Who I Am
                </h3>
              </div>

              <p className="text-foreground font-medium leading-relaxed mb-5">
                Hi, I'm{" "}
                <span className="text-primary font-semibold">Malshi Gamage</span>
                {" "} an enthusiastic Software Development undergraduate at the University of Kelaniya,
                driven by a passion for building impactful digital solutions.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-4">
                I specialize in full-stack development, working with modern technologies such as
                React, Node.js, MongoDB, PHP, and MySQL. I enjoy transforming ideas into
                responsive, user-friendly applications with clean and efficient code.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                My interests extend into Artificial Intelligence and Machine Learning, where I aim
                to explore intelligent systems and innovative problem-solving approaches that create
                real-world value.
              </p>

              <div className="border-t border-border pt-5">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  With a strong academic foundation in Data Structures, Web Development, Database Systems,
                  Cyber Security, Networking, and Software Engineering, I continuously strive to grow
                  as a developer and contribute to meaningful projects.
                </p>
              </div>

              {/* Tag chips */}
              <div className="flex flex-wrap gap-2 mt-6">
                {["Full-Stack Dev", "AI / ML", "Clean Code", "Problem Solver"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1.5 rounded-full
                               bg-primary/8 text-primary/80 border border-primary/15
                               hover:bg-primary/15 transition-colors duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── Skills column ── */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="flex items-center gap-3 mb-7">
              <div className="w-1 h-8 rounded-full bg-primary" />
              <h3 className="text-lg font-heading font-semibold text-foreground tracking-tight">
                Technical Skills
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {Object.entries(SKILLS_CATEGORIES).map(([category, skills]) => (
                <div
                  key={category}
                  className={`relative bg-background border border-border rounded-2xl p-5
                              overflow-hidden hover:border-primary/30 hover:-translate-y-0.5
                              hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group`}
                >
                  {/* gradient tint per category */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${CATEGORY_ACCENT[category]} opacity-0
                                group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl`}
                  />

                  {/* Category label */}
                  <div className="relative flex items-center gap-2 mb-5">
                    <span className={`w-2 h-2 rounded-full ${CATEGORY_DOT[category]}`} />
                    <h4 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                      {category}
                    </h4>
                  </div>

                  <div className="relative space-y-4">
                    {skills.map((skill, i) => {
                      const Icon = skill.icon;
                      return (
                        <div key={skill.name}>
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <Icon className={`w-3.5 h-3.5 ${CATEGORY_ICON[category]}`} />
                              <span className="text-[13px] font-medium text-foreground">
                                {skill.name}
                              </span>
                            </div>
                            <span className="text-[11px] tabular-nums text-muted-foreground font-medium">
                              {skill.level}%
                            </span>
                          </div>

                          {/* Track */}
                          <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full bg-gradient-to-r ${CATEGORY_BAR[category]}`}
                              style={{
                                width: isVisible ? `${skill.level}%` : "0%",
                                transition: "width 1.1s cubic-bezier(0.4,0,0.2,1)",
                                transitionDelay: `${i * 100 + 350}ms`,
                              }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;