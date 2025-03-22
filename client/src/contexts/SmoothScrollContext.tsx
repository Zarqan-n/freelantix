import React, { createContext, useContext, useRef } from 'react';
import useLocomotiveScroll from '@/hooks/use-locomotive-scroll';

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
    smooth: true,
    smoothMobile: false,
    inertia: 0.1,
    lerp: 0.1,
  },
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { locomotiveScroll, scrollTo, update, isReady } = useLocomotiveScroll({
    ref: scrollRef as React.RefObject<HTMLElement>,
    ...options,
  });

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
        data-scroll-container
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