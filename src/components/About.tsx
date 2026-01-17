import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "In-house design & fabrication",
  "Quality raw materials only",
  "Professional installation team",
  "After-sales support",
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding section-alt">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Visual */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto lg:mx-0">
              {/* Abstract composition representing craft */}
              <div className="relative w-full h-full">
                <div className="absolute top-0 left-0 w-3/4 h-3/4 bg-primary rounded-lg" />
                <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-accent rounded-lg flex items-center justify-center">
                  <div className="text-center text-accent-foreground">
                    <div className="font-display text-5xl md:text-6xl font-bold">15</div>
                    <div className="text-sm font-medium mt-1">Years of Craft</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="divider-accent" />
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                About Us
              </span>
            </div>

            <h2 className="heading-lg mb-6">
              Crafting Signs That
              <br />
              <span className="text-accent">Stand the Test of Time</span>
            </h2>

            <div className="space-y-4 mb-8">
              <p className="body-lg">
                Sunsign Letters has been Madurai's trusted signage partner for over 15 years. 
                We're not just manufacturers—we're craftsmen dedicated to bringing your brand 
                vision to life.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From small retail shops to large hospitals and corporate offices, our 
                in-house fabrication ensures every sign meets the highest standards of 
                quality and durability.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-3">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;