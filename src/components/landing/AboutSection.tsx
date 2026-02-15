import { motion } from "framer-motion";
import { Shield, Zap, Users } from "lucide-react";

const stats = [
  { icon: Shield, value: "200+", label: "Projects Delivered" },
  { icon: Users, value: "50+", label: "Enterprise Clients" },
  { icon: Zap, value: "99.9%", label: "Uptime Guaranteed" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">About Us</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              Engineering Excellence,{" "}
              <span className="gradient-text">Delivered</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Moonship LLC is a premier IT consulting firm specializing in cloud infrastructure, artificial intelligence, and custom software development. We partner with forward-thinking companies to accelerate their digital transformation journey.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our team of certified engineers and strategists bring deep expertise across AWS, Azure, GCP, and cutting-edge AI/ML platforms to deliver solutions that scale.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
                className="glass-card p-6 text-center group hover:border-primary/20 transition-colors duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="font-display text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
