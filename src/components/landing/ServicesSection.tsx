import { motion } from "framer-motion";
import { Cloud, Brain, Smartphone, Database, Lock, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Scalable cloud architecture on AWS, Azure, and GCP with CI/CD pipelines and infrastructure as code.",
    color: "text-neon-blue",
    glow: "group-hover:shadow-[0_0_30px_hsl(var(--neon-glow)/0.15)]",
  },
  {
    icon: Brain,
    title: "AI & ML Solutions",
    description: "Custom AI models, NLP pipelines, and intelligent automation that drive actionable insights.",
    color: "text-neon-purple",
    glow: "group-hover:shadow-[0_0_30px_hsl(var(--neon-purple)/0.15)]",
  },
  {
    icon: Smartphone,
    title: "Mobile & Web Apps",
    description: "Cross-platform mobile apps and progressive web applications built with modern frameworks.",
    color: "text-neon-teal",
    glow: "group-hover:shadow-[0_0_30px_hsl(var(--neon-teal)/0.15)]",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Real-time data pipelines, warehouse design, and analytics platforms for data-driven decisions.",
    color: "text-neon-blue",
    glow: "group-hover:shadow-[0_0_30px_hsl(var(--neon-glow)/0.15)]",
  },
  {
    icon: Lock,
    title: "Blockchain & AI",
    description: "Decentralized solutions, smart contracts, and AI-powered blockchain analytics for next-gen innovation.",
    color: "text-neon-purple",
    glow: "group-hover:shadow-[0_0_30px_hsl(var(--neon-purple)/0.15)]",
  },
  {
    icon: BarChart3,
    title: "Digital Strategy",
    description: "Technology roadmaps, digital transformation consulting, and IT governance advisory.",
    color: "text-neon-teal",
    glow: "group-hover:shadow-[0_0_30px_hsl(var(--neon-teal)/0.15)]",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding relative">
      {/* Subtle glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">What We Do</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
            Our <span className="gradient-text">Services</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`group glass-card p-8 hover:border-primary/20 transition-all duration-500 cursor-default ${service.glow}`}
            >
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <service.icon className={`w-7 h-7 ${service.color}`} />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
