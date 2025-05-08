import { useEffect, useRef, useState } from 'react';
// Using dynamic import instead of static import to avoid SSR issues
import type LocomotiveScroll from 'locomotive-scroll';

interface UseLocomotiveScrollOptions {
  ref: React.RefObject<HTMLElement>;
  smooth?: boolean;
  smoothMobile?: boolean;
  inertia?: number;
  getDirection?: boolean;
  scrollFromAnywhere?: boolean;
  touchMultiplier?: number;
  resetNativeScroll?: boolean;
  lerp?: number;
}

export default function useLocomotiveScroll({
  ref,
  smooth = true,
  smoothMobile = false,
  inertia = 0.1,
  getDirection = false,
  scrollFromAnywhere = false,
  touchMultiplier = 2,
  resetNativeScroll = true,
  lerp = 0.1,
}: UseLocomotiveScrollOptions) {
  const locomotiveScrollRef = useRef<LocomotiveScroll | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    import('locomotive-scroll').then((LocomotiveScrollModule) => {
      const LocomotiveScroll = LocomotiveScrollModule.default;

      locomotiveScrollRef.current = new LocomotiveScroll({
        el: ref.current as HTMLElement,
        smooth: window.innerWidth <= 768 ? smoothMobile : smooth,
        inertia,
        getDirection,
        scrollFromAnywhere,
        touchMultiplier,
        resetNativeScroll,
        smoothClass: 'is-smooth-scroll',
        lerp,
      });

      setIsReady(true);

      const handleResize = () => {
        locomotiveScrollRef.current?.update();
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        locomotiveScrollRef.current?.destroy();
      };
    });
  }, [
    ref,
    smooth,
    smoothMobile,
    inertia,
    getDirection,
    scrollFromAnywhere,
    touchMultiplier,
    resetNativeScroll,
    lerp,
  ]);

  const scrollTo = (target: string | HTMLElement, options = {}) => {
    if (locomotiveScrollRef.current) {
      locomotiveScrollRef.current.scrollTo(target, options);
    }
  };

  const update = () => {
    if (locomotiveScrollRef.current) {
      locomotiveScrollRef.current.update();
    }
  };

  return { locomotiveScroll: locomotiveScrollRef.current, scrollTo, update, isReady };
}