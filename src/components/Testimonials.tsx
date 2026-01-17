import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar",
    role: "Director, Apollo Clinic",
    content:
      "Sunsign delivered exceptional quality signage for our new clinic. The 3D letters are stunning and have been standing strong for 3 years now. Highly professional team.",
  },
  {
    id: 2,
    name: "Priya Narayanan",
    role: "Owner, Fashion Trends",
    content:
      "They understood exactly what we needed. The LED glow sign has increased our visibility significantly. Great work at reasonable prices.",
  },
  {
    id: 3,
    name: "Suresh Babu",
    role: "Principal, DAV School",
    content:
      "From the main entrance board to classroom signage, they handled everything professionally. The quality speaks for itself.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto" ref={ref}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="divider-accent" />
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Testimonials
              </span>
              <div className="divider-accent" />
            </div>
            <h2 className="heading-lg">What Our Clients Say</h2>
          </motion.div>

          {/* Testimonial card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-card border border-border rounded-xl p-8 md:p-12 text-center">
              <Quote className="w-10 h-10 text-accent/30 mx-auto mb-6" />
              
              <div className="min-h-[120px] flex items-center justify-center">
                <p className="text-lg md:text-xl leading-relaxed text-foreground max-w-2xl">
                  "{testimonials[currentIndex].content}"
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <div className="font-display text-lg font-semibold">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {testimonials[currentIndex].role}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentIndex ? "w-6 bg-accent" : "bg-border"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;