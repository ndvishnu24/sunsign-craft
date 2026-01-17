import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const works = [
  {
    id: 1,
    title: "Apollo Hospital Signage",
    category: "Healthcare",
    description: "Complete exterior and interior signage solution",
  },
  {
    id: 2,
    title: "Kalyan Silks Showroom",
    category: "Retail",
    description: "3D metal letters with LED illumination",
  },
  {
    id: 3,
    title: "St. Mary's School",
    category: "Education",
    description: "Entrance gate signage and directional boards",
  },
  {
    id: 4,
    title: "Tech Park Branding",
    category: "Corporate",
    description: "Full building facade and lobby signage",
  },
  {
    id: 5,
    title: "Madurai Marriott",
    category: "Hospitality",
    description: "Premium brass letters and wayfinding",
  },
];

const WorksCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const scrollToIndex = (index: number) => {
    if (containerRef.current) {
      const itemWidth = containerRef.current.scrollWidth / works.length;
      containerRef.current.scrollTo({
        left: itemWidth * index,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const handlePrev = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : works.length - 1;
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex < works.length - 1 ? currentIndex + 1 : 0;
    scrollToIndex(newIndex);
  };

  return (
    <section id="works" className="section-padding section-alt overflow-hidden" ref={sectionRef}>
      <div className="container-custom">
        {/* Header with controls */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="divider-accent" />
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Portfolio
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="heading-lg"
            >
              Our Recent Works
            </motion.h2>
          </div>

          {/* Navigation arrows */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-3"
          >
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
              aria-label="Previous work"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
              aria-label="Next work"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Carousel container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 px-5 md:px-8 lg:px-12"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {works.map((work, index) => (
            <div
              key={work.id}
              className="flex-shrink-0 w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[35vw] xl:w-[30vw] snap-start"
            >
              <div className="group bg-card border border-border rounded-lg overflow-hidden card-hover">
                {/* Image placeholder */}
                <div className="aspect-[4/3] bg-secondary relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/20 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                      <span className="font-display text-2xl font-bold text-accent">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-background/90 backdrop-blur-sm text-xs font-medium rounded-full">
                      {work.category}
                    </span>
                  </div>
                </div>
                {/* Content */}
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                    {work.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{work.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {works.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? "w-6 bg-accent"
                  : "bg-border hover:bg-muted-foreground"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default WorksCarousel;