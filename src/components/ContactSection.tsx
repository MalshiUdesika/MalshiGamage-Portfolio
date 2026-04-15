import { useState, type FormEvent } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Send, Linkedin, Github, Mail, MapPin, Phone, Facebook } from "lucide-react";
import confetti from "canvas-confetti";
import emailjs from "@emailjs/browser";


const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Invalid email";
    if (!form.message.trim()) errs.message = "Message is required";
    else if (form.message.length > 1000) errs.message = "Max 1000 characters";
    return errs;
  };

  const handleSubmit = (e: FormEvent) => {
  e.preventDefault();

  const errs = validate();
  if (Object.keys(errs).length) {
    setErrors(errs);
    return;
  }

  
  setErrors({});
  setSubmitted(false);
 
  setLoading(true);
  // 🔥 EmailJS integration
  emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,   // from Email Services
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,  // from Email Templates
    {
      name: form.name,
      email: form.email,
      message: form.message,
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY    // from API Keys
  ).then(
    () => {
      setSubmitted(true);
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
      setForm({ name: "", email: "", message: "" });
      setErrors({});
      setLoading(false)
      
    },
    (error) => {
      console.error(error);
      alert("Failed to send message. Try again.");
      setLoading(false);
    }
  );
};

  return (
    <section id="Contact" className="py-24 bg-card">
      <div ref={ref} className="section-container">
        <h2
          className={`text-3xl sm:text-4xl font-heading font-bold text-center mb-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className={`text-center text-muted-foreground mb-12 transition-all duration-700 delay-100 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          Let's build something great together.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            {submitted ? (
              <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8 text-center">
                <div className="text-4xl mb-4">🎉</div>
                <h3 className="font-heading text-xl font-semibold mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1.5">Name</label>
                  <input
                    id="name"
                    type="text"
                    maxLength={100}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-ring/20 outline-none transition-all text-foreground"
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1.5">Email</label>
                  <input
                    id="email"
                    type="email"
                    maxLength={255}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-ring/20 outline-none transition-all text-foreground"
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1.5">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    maxLength={1000}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-ring/20 outline-none transition-all resize-none text-foreground"
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
                </div>
                <Button type="submit" size="lg" className="w-full" disabled={loading}>
                  {loading ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>

          {/* Info + Map */}
          <div className={`space-y-6 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Walasmulla, Sri Lanka</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">malshigamage15@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">+94 764248949</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              {[
                { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/malshi-gamage-15492932a/" },
                { icon: Github, label: "GitHub", href: "https://github.com/MalshiUdesika" },
                { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/share/1B68pfBRw9/?mibextid=wwXIfr" },
                { icon: Mail, label: "Email", href: "mailto:malshigamage15@gmail.com" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel={label !== "Email" ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="w-11 h-11 rounded-xl bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
