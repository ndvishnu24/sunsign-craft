import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "Share your requirements. We visit your site, understand your brand, and discuss possibilities.",
  },
  {
    number: "02",
    title: "Design & Quote",
    description: "Our team creates custom designs and provides a detailed, transparent quote for approval.",
  },
  {
    number: "03",
    title: "Fabrication",
    description: "Once approved, we craft your signage in our workshop using premium materials and techniques.",
  },
  {
    number: "04",
    title: "Installation",
    description: "Professional installation by our trained team. We ensure perfect placement and finish.",
  },
];

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="section-padding section-alt">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="divider-accent" />
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              How We Work
            </span>
            <div className="divider-accent" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="heading-lg"
          >
            Simple, Transparent
            <br />
            <span className="text-accent">4-Step Process</span>
          </motion.h2>
        </div>

        {/* Timeline */}
        <div ref={ref} className="relative max-w-4xl mx-auto">
          {/* Vertical line - desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          {/* Steps */}
          <div className="space-y-8 md:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div
                    className={`inline-block p-6 bg-card border border-border rounded-lg ${
                      index % 2 === 0 ? "md:ml-auto" : ""
                    }`}
                  >
                    <div className="font-display text-accent text-sm font-semibold mb-2">
                      Step {step.number}
                    </div>
                    <h3 className="font-display text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-accent items-center justify-center z-10">
                  <span className="font-display text-sm font-bold text-accent-foreground">
                    {step.number}
                  </span>
                </div>

                {/* Mobile number indicator */}
                <div className="md:hidden flex items-center gap-4 mb-2">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                    <span className="font-display text-sm font-bold text-accent-foreground">
                      {step.number}
                    </span>
                  </div>
                  <div className="h-px flex-1 bg-border" />
                </div>

                {/* Spacer for other side */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;