import React, { createContext, useContext, useRef } from 'react';

interface SmoothScrollContextType {
  scrollRef: React.RefObject<HTMLElement>;
  locomotiveScroll: any;
  scrollTo: (target: string | HTMLElement, options?: any) => void;
  update: () => void;
  isReady: boolean;
}

const SmoothScrollContext = createContext<SmoothScrollContextType | null>(null);

interface SmoothScrollProviderProps {
  children: React.ReactNode;
  options?: {
    smooth?: boolean;
    smoothMobile?: boolean;
    inertia?: number;
    getDirection?: boolean;
    scrollFromAnywhere?: boolean;
    touchMultiplier?: number;
    resetNativeScroll?: boolean;
    lerp?: number;
  };
}

export const SmoothScrollProvider: React.FC<SmoothScrollProviderProps> = ({
  children,
  options = {
    smooth: false, // Disabled smooth scrolling
  },
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Simple stub implementations for compatibility
  const scrollTo = (target: string | HTMLElement, options?: any) => {
    if (typeof target === 'string') {
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (target instanceof HTMLElement) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const update = () => {};
  const isReady = true;
  const locomotiveScroll = null;

  return (
    <SmoothScrollContext.Provider
      value={{
        scrollRef: scrollRef as React.RefObject<HTMLElement>,
        locomotiveScroll,
        scrollTo,
        update,
        isReady,
      }}
    >
      <div
        ref={scrollRef}
        className="smooth-scroll-container"
      >
        {children}
      </div>
    </SmoothScrollContext.Provider>
  );
};

export const useSmoothScroll = () => {
  const context = useContext(SmoothScrollContext);
  if (!context) {
    throw new Error('useSmoothScroll must be used within a SmoothScrollProvider');
  }
  return context;
};

export default SmoothScrollContext;