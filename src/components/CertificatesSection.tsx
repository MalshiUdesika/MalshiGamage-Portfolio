import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ExternalLink, Award, Code2, Brain, Terminal, FileCode, Globe, Medal, Link2 } from "lucide-react";
import badgeMeetupApril from "@/assets/badge-meetup-april.png";
import badgeMeetupFebruary from "@/assets/badge-meetup-february.png";
import certificateBlockchain from "@/assets/certificate-blockchain.jpg";

const CERTS = [
  { title: "MERN Stack Development", issuer: "SKYREC Academy", date: "2025 – Present (Ongoing)", icon: Code2, iconColor: "text-emerald-500", bgColor: "bg-emerald-500/10", link: "#" },
  { title: "Diploma in Artificial Intelligence", issuer: "IBSC Campus", date: "2026 – Present (Ongoing)", icon: Brain, iconColor: "text-violet-500", bgColor: "bg-violet-500/10", link: "#" },
  { title: "Linux Essentials", issuer: "Cisco Networking Academy", date: "March 2026", icon: Terminal, iconColor: "text-orange-500", bgColor: "bg-orange-500/10", link: "https://www.credly.com/badges/b0bf2ed4-7607-4ae0-aad8-69e17567807c/public_url" },
  { title: "Python for Beginners", issuer: "University of Moratuwa", date: "September 2025", icon: FileCode, iconColor: "text-sky-500", bgColor: "bg-sky-500/10", link: "/images/certificate-python-beginners.pdf" },
  { title: "Programming with Web Development", issuer: "Technology & Distance Learning Hub, Walasmulla", date: "January 2023", icon: Globe, iconColor: "text-rose-500", bgColor: "bg-rose-500/10", link: "/images/certificate-web-development.jpeg" },
];

const PARTICIPATION_CERTS = [
  { title: "Blockchain Technology & Building on Cardano", issuer: "CoinCeylon x Intersect Sri Lanka Hub / University of Kelaniya", date: "April 2025", icon: Link2, iconColor: "text-amber-500", bgColor: "bg-amber-500/10", link: certificateBlockchain },
];

const BADGES = [
  { title: "CertDirectory Meetup Attendee", date: "April 2026", image: badgeMeetupApril },
  { title: "CertDirectory Meetup Attendee", date: "February 2026", image: badgeMeetupFebruary },
];

const CertificatesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="Certificates" className="py-24 bg-card">
      <div ref={ref} className="section-container">
        {/* Certificates */}
        <h2
          className={`text-3xl sm:text-4xl font-heading font-bold text-center mb-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          My <span className="text-primary">Certificates</span>
        </h2>
        

        <div className="space-y-3 mb-16">
          {CERTS.map((cert, i) => {
            const Icon = cert.icon;
            return (
              <div
                key={cert.title}
                className={`group flex items-center gap-4 bg-background border border-border rounded-xl p-4 card-hover transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 80 + 200}ms` }}
              >
                <div className={`shrink-0 w-12 h-12 rounded-xl ${cert.bgColor} flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${cert.iconColor}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading font-semibold text-base leading-tight">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                </div>
                <p className="hidden sm:block text-xs text-muted-foreground whitespace-nowrap">{cert.date}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-1 text-sm text-primary font-medium no-underline hover:opacity-80 transition-opacity"
                >
                  View <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Participation Badges */}
        <h2
          className={`text-3xl sm:text-4xl font-heading font-bold text-center mb-4 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Participation <span className="text-primary">Badges</span>
        </h2>
        

        {/* Participation Certificates */}
        <div className="space-y-3 mb-8">
          {PARTICIPATION_CERTS.map((cert, i) => {
            const Icon = cert.icon;
            return (
              <div
                key={cert.title}
                className={`group flex items-center gap-4 bg-background border border-border rounded-xl p-4 card-hover transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 80 + 500}ms` }}
              >
                <div className={`shrink-0 w-12 h-12 rounded-xl ${cert.bgColor} flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${cert.iconColor}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading font-semibold text-base leading-tight">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                </div>
                <p className="hidden sm:block text-xs text-muted-foreground whitespace-nowrap">{cert.date}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-1 text-sm text-primary font-medium no-underline hover:opacity-80 transition-opacity"
                >
                  View <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-6">
          {BADGES.map((badge, i) => (
            <div
              key={`${badge.title}-${badge.date}`}
              className={`flex flex-col items-center gap-2 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 80 + 700}ms` }}
            >
              <img src={badge.image} alt={badge.title} className="w-28 h-28 object-contain" />
              <p className="text-xs text-muted-foreground text-center">{badge.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
