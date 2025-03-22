import { useState, useEffect } from "react";

interface ScrollspyOptions {
  offset?: number;
  threshold?: number;
}

export function useScrollspy(
  ids: string[],
  options: ScrollspyOptions = {}
): string | null {
  const { offset = 0, threshold = 0.5 } = options;
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (elements.length === 0) {
      return;
    }

    const handleScroll = () => {
      // Get all positions
      const positions = elements.map((element) => {
        const rect = element.getBoundingClientRect();
        return {
          id: element.id,
          top: rect.top + window.scrollY - offset,
          bottom: rect.bottom + window.scrollY - offset,
          height: rect.height,
        };
      });

      // Get window scroll position
      const scrollPosition = window.scrollY + window.innerHeight * threshold;

      // Find the element that's currently in view
      for (const position of positions) {
        if (
          scrollPosition >= position.top &&
          scrollPosition <= position.bottom
        ) {
          setActiveId(position.id);
          return;
        }
      }

      // If we're at the top of the page before first section
      if (scrollPosition < positions[0].top) {
        setActiveId(positions[0].id);
        return;
      }

      // If we're below the last section
      if (scrollPosition > positions[positions.length - 1].bottom) {
        setActiveId(positions[positions.length - 1].id);
        return;
      }

      // Default to no active section
      setActiveId(null);
    };

    // Call once to initialize
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ids, offset, threshold]);

  return activeId;
}
