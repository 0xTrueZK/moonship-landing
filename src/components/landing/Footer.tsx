import { Github, Linkedin, Twitter } from "lucide-react";

const socials = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
];

const Footer = () => {
  return (
    <footer className="border-t border-white/[0.06] py-10 px-4 md:px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
            <span className="font-display font-bold text-primary-foreground text-xs">MS</span>
          </div>
          <span className="font-display font-semibold text-foreground">Moonship</span>
        </div>

        {/* Copyright */}
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Moonship LLC. All rights reserved.
        </p>

        {/* Socials */}
        <div className="flex items-center gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-200"
            >
              <s.icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
