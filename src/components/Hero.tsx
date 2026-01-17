import { motion } from "framer-motion";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-signage.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content - Asymmetrical text */}
          <div className="max-w-xl">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="divider-accent" />
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Madurai's Trusted Signage Partner
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-xl mb-6"
            >
              Custom Sign Boards &{" "}
              <span className="text-accent">3D Letter</span> Solutions
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="body-lg mb-8 max-w-md"
            >
              Premium signage crafted with precision. From concept to installation, 
              we build lasting impressions for businesses across Tamil Nadu.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="btn-accent inline-flex items-center gap-2 group"
              >
                Get Free Quote
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="tel:+919876543210"
                className="btn-outline inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 pt-8 border-t border-divider"
            >
              <div className="flex gap-8 md:gap-12">
                <div>
                  <div className="font-display text-3xl font-bold text-foreground">15+</div>
                  <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
                </div>
                <div className="divider-vertical" />
                <div>
                  <div className="font-display text-3xl font-bold text-foreground">500+</div>
                  <div className="text-sm text-muted-foreground mt-1">Projects Done</div>
                </div>
                <div className="divider-vertical hidden sm:block" />
                <div className="hidden sm:block">
                  <div className="font-display text-3xl font-bold text-foreground">100%</div>
                  <div className="text-sm text-muted-foreground mt-1">Client Satisfaction</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right visual - Industrial aesthetic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-lg overflow-hidden bg-secondary shadow-2xl">
              <img 
                src={heroImage} 
                alt="3D metal letters being crafted in our workshop" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 md:-left-8 bg-card shadow-lg rounded-lg p-4 border border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">WhatsApp</div>
                  <div className="text-sm font-semibold text-foreground">Quick Response</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;