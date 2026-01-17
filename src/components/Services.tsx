import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    title: "Acrylic Sign Boards",
    description: "Crystal-clear acrylic boards with precision-cut letters. Perfect for modern retail and office spaces.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    title: "LED & Neon Signs",
    description: "Eye-catching illuminated signage that makes your brand visible 24/7. Energy-efficient LED solutions.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 18h6M10 22h4M12 2v1M4.93 4.93l.7.7M2 12h1M4.93 19.07l.7-.7M19.07 4.93l-.7.7M22 12h-1M19.07 19.07l-.7-.7" />
        <path d="M12 6a6 6 0 0 0-4 10.5V18h8v-1.5A6 6 0 0 0 12 6z" />
      </svg>
    ),
  },
  {
    title: "3D Metal Letters",
    description: "Premium stainless steel and aluminum letters with brushed or polished finish. Built to last decades.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3L2 12h3v9h6v-6h2v6h6v-9h3L12 3z" />
      </svg>
    ),
  },
  {
    title: "Glow Sign Boards",
    description: "Backlit and front-lit glow signs for high visibility. Ideal for hospitals, shops, and commercial spaces.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M6 8h12M6 12h8M6 16h10" />
      </svg>
    ),
  },
  {
    title: "ACP Sign Boards",
    description: "Durable aluminium composite panels with weather-resistant coating. Perfect for outdoor applications.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 15h18M8 21V15M16 21V15" />
      </svg>
    ),
  },
  {
    title: "Vinyl & Flex Printing",
    description: "High-quality vinyl branding and flex banners. From vehicle wraps to large format displays.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 6h16M4 12h16M4 18h16" />
        <circle cx="8" cy="6" r="1.5" fill="currentColor" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        <circle cx="16" cy="18" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-2xl mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="divider-accent" />
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Our Services
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="heading-lg"
          >
            Complete Signage Solutions
            <br />
            <span className="text-accent">Under One Roof</span>
          </motion.h2>
        </div>

        {/* Services Grid */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group p-6 md:p-8 bg-card border border-border rounded-lg card-hover"
            >
              <div className="w-14 h-14 mb-5 rounded-lg bg-secondary flex items-center justify-center text-foreground group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="heading-md mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;