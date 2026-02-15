import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Get In Touch</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
            Let's Build <span className="gradient-text">Together</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Input
                placeholder="Your Name"
                required
                className="bg-secondary/50 border-white/[0.06] focus:border-primary/40 placeholder:text-muted-foreground/60"
              />
              <Input
                type="email"
                placeholder="Email Address"
                required
                className="bg-secondary/50 border-white/[0.06] focus:border-primary/40 placeholder:text-muted-foreground/60"
              />
            </div>
            <Input
              placeholder="Subject"
              required
              className="bg-secondary/50 border-white/[0.06] focus:border-primary/40 placeholder:text-muted-foreground/60"
            />
            <Textarea
              placeholder="Tell us about your project..."
              rows={5}
              required
              className="bg-secondary/50 border-white/[0.06] focus:border-primary/40 placeholder:text-muted-foreground/60 resize-none"
            />
            <Button variant="hero" size="lg" type="submit" disabled={loading} className="w-full">
              {loading ? "Sending..." : "Send Message"}
              <Send size={18} />
            </Button>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center gap-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-foreground mb-1">Email Us</h4>
                <p className="text-muted-foreground text-sm">support@moonship.tech</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-foreground mb-1">Visit Us</h4>
                <p className="text-muted-foreground text-sm">Caldwell, New Jersey 07006</p>
              </div>
            </div>

            {/* Embedded map placeholder */}
            <div className="glass-card overflow-hidden rounded-xl h-48 mt-2">
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24168.0!2d-74.2768!3d40.8398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3009b81bc5b4f%3A0x3647e2e15f2e2e0!2sCaldwell%2C%20NJ%2007006!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg) saturate(0.3)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
