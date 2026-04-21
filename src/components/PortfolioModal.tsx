import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export interface PortfolioItemDetail {
  id: number;
  title: string;
  fullDescription: string;
  role: string;
  highlight: string;
  category: string;
  images?: string[];

  // NEW FIELDS
  techStack?: string[];
  links?: {
    demo?: string;
    github?: string;
  };
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
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0);
      contentRef.current?.scrollTo(0, 0);
      // const dialog = document.querySelector('[data-state="open"]');
      // if (dialog) {
      //   dialog.scrollTop = 0;
      // }
    }
  }, [isOpen, item?.id]);

  if (!item) return null;

  const hasMultipleImages = item.images && item.images.length > 1;
  const hasImages = item.images && item.images.length > 0;

  const nextImage = () => {
    if (item.images) {
      setCurrentImageIndex((prev) => (prev + 1) % item.images.length);
    }
  };

  const prevImage = () => {
    if (item.images) {
      setCurrentImageIndex(
        (prev) => (prev - 1 + item.images.length) % item.images.length
      );
    }

  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent  ref={contentRef} className="max-w-3xl w-[95vw] max-h-[90vh] overflow-y-auto p-0 bg-card border-border rounded-2xl">

        {/* IMAGE */}
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
              </>
            )}
          </div>
        )}

        {/* CONTENT */}
        <div className="p-6 md:p-8 space-y-6">

          <DialogHeader>
            <span className="inline-block w-fit px-3 py-1 bg-sage-light rounded-full text-xs mb-2 capitalize">
              {item.category}
            </span>

            <DialogTitle className="text-2xl md:text-3xl font-serif">
              {item.title}
            </DialogTitle>

            <p className="text-sm text-primary font-medium">
              {item.role}
            </p>
          </DialogHeader>

          <DialogDescription asChild>
            <div className="space-y-6">

              {/* DESCRIPTION */}
              <div>
                <h4 className="text-xs uppercase mb-2 text-muted-foreground">
                  Deskripsi
                </h4>
                <p className="leading-relaxed">
                  {item.fullDescription}
                </p>
              </div>

              {/* HIGHLIGHT */}
              <div className="pt-4 border-t">
                <h4 className="text-xs uppercase mb-2 text-muted-foreground">
                  Highlight
                </h4>
                <p className="font-medium">{item.highlight}</p>
              </div>

              {/* TECH STACK */}
              {item.techStack && (
                <div className="pt-4 border-t">
                  <h4 className="text-xs uppercase mb-2 text-muted-foreground">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-muted rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* IMPACT */}
              {item.impact && (
                <div className="pt-4 border-t">
                  <h4 className="text-xs uppercase mb-2 text-muted-foreground">
                    Impact
                  </h4>
                  <p>{item.impact}</p>
                </div>
              )}

              {/* CHALLENGES */}
              {item.challenges && (
                <div className="pt-4 border-t">
                  <h4 className="text-xs uppercase mb-2 text-muted-foreground">
                    Challenges
                  </h4>
                  <p>{item.challenges}</p>
                </div>
              )}

              {/* LINKS */}
              {item.links && (
                <div className="pt-4 border-t">
                  <h4 className="text-xs uppercase mb-2 text-muted-foreground">
                    Links
                  </h4>
                  <div className="flex gap-4">
                    {item.links.demo && (
                      <a href={item.links.demo} target="_blank" className="underline text-primary text-sm">
                        Live Demo
                      </a>
                    )}
                    {item.links.github && (
                      <a href={item.links.github} target="_blank" className="underline text-primary text-sm">
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              )}

            </div>
          </DialogDescription>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PortfolioModal;