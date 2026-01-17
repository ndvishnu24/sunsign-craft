import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Wrench, Truck, Clock, Wallet } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Quality Materials",
    description: "We source only premium-grade materials for durability that lasts years.",
  },
  {
    icon: Wrench,
    title: "Custom Fabrication",
    description: "Every sign is crafted in-house to match your exact specifications.",
  },
  {
    icon: Truck,
    title: "Professional Installation",
    description: "Our trained team ensures perfect installation every time.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "We respect deadlines and deliver on the promised date.",
  },
  {
    icon: Wallet,
    title: "Honest Pricing",
    description: "Transparent quotes with no hidden charges or surprises.",
  },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left - Heading */}
          <div className="lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="divider-accent" />
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Why Us
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="heading-lg mb-6"
            >
              Why Businesses
              <br />
              <span className="text-accent">Trust Sunsign</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="body-lg max-w-md"
            >
              We've built our reputation on quality work and honest relationships. 
              Here's what sets us apart from the rest.
            </motion.p>
          </div>

          {/* Right - Reasons list */}
          <div ref={ref} className="space-y-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="flex gap-5 p-5 rounded-lg border border-border bg-card hover:border-accent/30 transition-colors duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <reason.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold mb-1">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;