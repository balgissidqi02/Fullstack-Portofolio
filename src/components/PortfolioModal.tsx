import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState, useEffect } from "react";

export interface PortfolioItemDetail {
  id: number;
  title: string;
  fullDescription: string;
  role: string;
  highlight: string;
  category: string;
  images?: string[];
  techStack?: string[];
  links?: { demo?: string; github?: string };
  impact?: string;
  challenges?: string;
}

interface PortfolioModalProps {
  item: PortfolioItemDetail | null;
  isOpen: boolean;
  onClose: () => void;
}

const PortfolioModal = ({ item, isOpen, onClose }: PortfolioModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) setCurrentImageIndex(0);
  }, [isOpen, item?.id]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!item || !isOpen) return null;

  const hasImages = item.images && item.images.length > 0;
  const hasMultipleImages = item.images && item.images.length > 1;

  const nextImage = () => {
    if (item.images) setCurrentImageIndex((p) => (p + 1) % item.images!.length);
  };
  const prevImage = () => {
    if (item.images) setCurrentImageIndex((p) => (p - 1 + item.images!.length) % item.images!.length);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/40 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-card rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:opacity-80 transition-opacity"
        >
          <X className="w-4 h-4" />
        </button>

        {/* IMAGE CAROUSEL */}
        {hasImages && (
          <div className="relative w-full aspect-video bg-muted overflow-hidden rounded-t-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={item.images![currentImageIndex]}
                alt={item.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full object-contain"
              />
            </AnimatePresence>

            {hasMultipleImages && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center"
                >
                  <ChevronLeft />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center"
                >
                  <ChevronRight />
                </button>

                {/* Dots indicator */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {item.images!.map((_, i) => (
                    <span
                      key={i}
                      className={`w-2 h-2 rounded-full transition-colors ${i === currentImageIndex ? "bg-primary" : "bg-background/60"}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {/* CONTENT */}
        <div className="p-6 md:p-8 space-y-5">
          {/* Category */}
          <span className="inline-block px-3 py-1 bg-sage-light rounded-full text-xs capitalize">
            {item.category}
          </span>

          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-serif font-medium text-foreground">
            {item.title}
          </h3>

          {/* Role */}
          <p className="text-sm text-primary font-medium">{item.role}</p>

          {/* Description */}
          <div className="pt-4 border-t border-border">
            <h4 className="text-xs uppercase tracking-wider mb-2 text-muted-foreground font-sans">
              Deskripsi
            </h4>
            <p className="text-muted-foreground leading-relaxed font-sans">
              {item.fullDescription}
            </p>
          </div>

          {/* Highlight */}
          <div className="pt-4 border-t border-border">
            <h4 className="text-xs uppercase tracking-wider mb-2 text-muted-foreground font-sans">
              Highlight
            </h4>
            <p className="font-medium text-foreground font-sans">{item.highlight}</p>
          </div>

          {/* Tech Stack */}
          {item.techStack && item.techStack.length > 0 && (
            <div className="pt-4 border-t border-border">
              <h4 className="text-xs uppercase tracking-wider mb-2 text-muted-foreground font-sans">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {item.techStack.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-muted rounded-full text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Impact */}
          {item.impact && (
            <div className="pt-4 border-t border-border">
              <h4 className="text-xs uppercase tracking-wider mb-2 text-muted-foreground font-sans">
                Impact
              </h4>
              <p className="text-muted-foreground font-sans">{item.impact}</p>
            </div>
          )}

          {/* Challenges */}
          {item.challenges && (
            <div className="pt-4 border-t border-border">
              <h4 className="text-xs uppercase tracking-wider mb-2 text-muted-foreground font-sans">
                Challenges
              </h4>
              <p className="text-muted-foreground font-sans">{item.challenges}</p>
            </div>
          )}

          {/* Links */}
          {item.links && (
            <div className="pt-4 border-t border-border">
              <h4 className="text-xs uppercase tracking-wider mb-2 text-muted-foreground font-sans">
                Links
              </h4>
              <div className="flex gap-4">
                {item.links.demo && (
                  <a href={item.links.demo} target="_blank" rel="noopener noreferrer" className="underline text-primary text-sm">
                    Live Demo
                  </a>
                )}
                {item.links.github && (
                  <a href={item.links.github} target="_blank" rel="noopener noreferrer" className="underline text-primary text-sm">
                    GitHub
                  </a>
                )}
              </div>
            </div>
          )}

          {/* Back button */}
          <div className="pt-4">
            <button
              onClick={() => {
                onClose();
                setTimeout(() => {
                  document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }}
              className="px-6 py-2.5 rounded-full text-sm bg-foreground text-background hover:opacity-90 transition-opacity"
            >
              ← Back to Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;
