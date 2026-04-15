import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, FolderOpen, Mail } from "lucide-react";
import profileImg from "@/assets/profile.gif";

const HeroSection = () => {
  return (
    <section id="Home" className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rotate-45 translate-x-1/2 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rotate-12 -translate-x-1/3 translate-y-1/4" />

      <div className="section-container relative z-10 flex flex-col lg:flex-row items-center gap-8 py-24 lg:py-20">
        {/* Left: Text content */}
        <div className="flex-1 text-center lg:text-left">
          <p className="text-muted-foreground font-medium mb-3 animate-fade-up tracking-wider uppercase text-sm" style={{ animationDelay: "0.1s" }}>
            Hi I am
          </p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-2 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Malshi Gamage
          </h1>

          <div className="text-2xl sm:text-3xl lg:text-4xl text-primary mb-6 h-12 animate-fade-up font-bold" style={{ animationDelay: "0.35s" }}>
            <TypeAnimation
              sequence={[
                "Full-Stack Developer",
                2000,
                "AI Enthusiast",
                2000,
              ]}
              repeat={Infinity}
              speed={40}
            />
          </div>

          {/* Social icons */}
          <div className="flex gap-3 justify-center lg:justify-start mb-8 animate-fade-up" style={{ animationDelay: "0.5s" }}>
            {[
              { icon: Github, href: "https://github.com/MalshiUdesika", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/malshi-gamage-15492932a/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:malshigamage15@gmail.com", label: "Gmail" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={label !== "Gmail" ? "_blank" : undefined}
                rel={label !== "Gmail" ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-200"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "0.65s" }}>
            <Button size="lg" className="rounded-full px-8" onClick={() => document.getElementById("Projects")?.scrollIntoView({ behavior: "smooth" })}>
              Projects <FolderOpen className="ml-1 w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg" asChild className="rounded-full px-8 border-border text-foreground hover:border-primary hover:text-primary-foreground hover:bg-primary">
              <a href="/Malshi_Udesika_CV.pdf" download>
                Download CV <Download className="ml-1 w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>

        {/* Right: Profile picture */}
        <div className="flex-shrink-0 animate-fade-up relative" style={{ animationDelay: "0.4s" }}>
          <div className="relative animate-float">
            <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl bg-primary/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <img
              src={profileImg}
              alt="Malshi Gamage"
              className="relative z-10 w-72 sm:w-80 lg:w-96 h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => document.getElementById("About")?.scrollIntoView({ behavior: "smooth" })}
        aria-label="Scroll to about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
};

export default HeroSection;