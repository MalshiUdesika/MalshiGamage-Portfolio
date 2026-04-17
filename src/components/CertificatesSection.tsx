import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ExternalLink } from "lucide-react";
import badgeMeetupApril from "@/assets/badge-meetup-april.png";
import badgeMeetupFebruary from "@/assets/badge-meetup-february.png";
import certificateBlockchain from "@/assets/certificate-blockchain.jpg";
import cisco from "@/assets/CISCO.png";
import skyrek from "@/assets/skyrek.jpeg";
import uom from "@/assets/University_of_Moratuwa_logo.png";
import blockChain from "@/assets/CoinCeylon.png";
import AIcourse from "@/assets/ibsc-logo.png";
import webDev from "@/assets/Information Technology and Distance.png";

/* ✅ Type definition */
type Cert = {
  title: string;
  issuer: string;
  date: string;
  link: string;
  logo: string;
};

const CERTS: Cert[] = [
  {
    title: "MERN Stack Development",
    issuer: "SKYREC Academy",
    date: "2025 – Present (Ongoing)",
    logo: skyrek,
    link: "#"
  },
  {
    title: "Diploma in Artificial Intelligence",
    issuer: "IBSC Campus",
    date: "2026 – Present (Ongoing)",
    logo: AIcourse,
    link: "#"
  },
  {
    title: "Linux Essentials",
    issuer: "Cisco Networking Academy",
    date: "March 2026",
    logo: cisco,
    link: "https://www.credly.com/badges/b0bf2ed4-7607-4ae0-aad8-69e17567807c/public_url"
  },
  {
    title: "Python for Beginners",
    issuer: "University of Moratuwa",
    date: "September 2025",
    logo: uom,
    link: "/images/certificate-python-beginners.pdf"
  },
  {
    title: "Programming with Web Development",
    issuer: "Technology & Distance Learning Hub, Walasmulla",
    date: "January 2023",
    logo: webDev,
    link: "/images/certificate-web-development.jpeg"
  }
];

const PARTICIPATION_CERTS: Cert[] = [
  {
    title: "Blockchain Technology & Building on Cardano",
    issuer: "CoinCeylon x Intersect Sri Lanka Hub / University of Kelaniya",
    date: "April 2025",
    logo: blockChain,
    link: certificateBlockchain
  }
];

const BADGES = [
  { title: "CertDirectory Meetup Attendee", date: "April 2026", image: badgeMeetupApril },
  { title: "CertDirectory Meetup Attendee", date: "February 2026", image: badgeMeetupFebruary }
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
          {CERTS.map((cert, i) => (
            <div
              key={cert.title}
              className={`group flex items-center gap-4 bg-background border border-border rounded-xl p-4 card-hover transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 80 + 200}ms` }}
            >
              {/* Logo only */}
              <div className="shrink-0 w-12 h-12 rounded-xl bg-muted flex items-center justify-center overflow-hidden">
                <img
                  src={cert.logo}
                  alt={cert.title}
                  className="w-8 h-8 object-contain"
                />
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <h3 className="font-heading font-semibold text-base leading-tight">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {cert.issuer}
                </p>
              </div>

              {/* Date */}
              <p className="hidden sm:block text-xs text-muted-foreground whitespace-nowrap">
                {cert.date}
              </p>

              {/* Link */}
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-1 text-sm text-primary font-medium no-underline hover:opacity-80 transition-opacity"
              >
                View <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>

        {/* Participation Certificates */}
        <h2
          className={`text-3xl sm:text-4xl font-heading font-bold text-center mb-4 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Participation <span className="text-primary">Badges</span>
        </h2>

        <div className="space-y-3 mb-8">
          {PARTICIPATION_CERTS.map((cert, i) => (
            <div
              key={cert.title}
              className={`group flex items-center gap-4 bg-background border border-border rounded-xl p-4 card-hover transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 80 + 500}ms` }}
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-muted flex items-center justify-center overflow-hidden">
                <img
                  src={cert.logo}
                  alt={cert.title}
                  className="w-8 h-8 object-contain"
                />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="font-heading font-semibold text-base leading-tight">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {cert.issuer}
                </p>
              </div>

              <p className="hidden sm:block text-xs text-muted-foreground whitespace-nowrap">
                {cert.date}
              </p>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-1 text-sm text-primary font-medium no-underline hover:opacity-80 transition-opacity"
              >
                View <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
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
              <img
                src={badge.image}
                alt={badge.title}
                className="w-28 h-28 object-contain"
              />
              <p className="text-xs text-muted-foreground text-center">
                {badge.date}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CertificatesSection;