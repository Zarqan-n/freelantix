import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const fadeInUp = (element: HTMLElement, delay = 0, duration = 0.8) => {
  return gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 30,
    },
    {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease: 'power3.out',
    }
  );
};

export const fadeIn = (element: HTMLElement, delay = 0, duration = 0.8) => {
  return gsap.fromTo(
    element,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration,
      delay,
      ease: 'power2.out',
    }
  );
};

export const staggerFadeInUp = (elements: HTMLElement[], staggerAmount = 0.1, delay = 0, duration = 0.8) => {
  return gsap.fromTo(
    elements,
    {
      opacity: 0,
      y: 30,
    },
    {
      opacity: 1,
      y: 0,
      duration,
      delay,
      stagger: staggerAmount,
      ease: 'power3.out',
    }
  );
};

export const fadeInRight = (element: HTMLElement, delay = 0, duration = 0.8) => {
  return gsap.fromTo(
    element,
    {
      opacity: 0,
      x: -30,
    },
    {
      opacity: 1,
      x: 0,
      duration,
      delay,
      ease: 'power3.out',
    }
  );
};

export const fadeInLeft = (element: HTMLElement, delay = 0, duration = 0.8) => {
  return gsap.fromTo(
    element,
    {
      opacity: 0,
      x: 30,
    },
    {
      opacity: 1,
      x: 0,
      duration,
      delay,
      ease: 'power3.out',
    }
  );
};

export const createScrollTrigger = (
  element: HTMLElement,
  animation: gsap.core.Tween,
  trigger?: HTMLElement,
  start = 'top 80%',
  toggleActions = 'play none none none'
) => {
  return ScrollTrigger.create({
    trigger: trigger || element,
    start,
    toggleActions,
    animation,
  });
};

export const animateOnScroll = (
  element: HTMLElement,
  animation: 'fadeInUp' | 'fadeIn' | 'fadeInRight' | 'fadeInLeft',
  options = { delay: 0, duration: 0.8, start: 'top 80%' }
) => {
  const { delay, duration, start } = options;
  let tween;

  switch (animation) {
    case 'fadeInUp':
      tween = fadeInUp(element, delay, duration);
      break;
    case 'fadeIn':
      tween = fadeIn(element, delay, duration);
      break;
    case 'fadeInRight':
      tween = fadeInRight(element, delay, duration);
      break;
    case 'fadeInLeft':
      tween = fadeInLeft(element, delay, duration);
      break;
    default:
      tween = fadeInUp(element, delay, duration);
  }

  return createScrollTrigger(element, tween, undefined, start);
};

export const animateStaggerOnScroll = (
  elements: HTMLElement[],
  options = { stagger: 0.1, delay: 0, duration: 0.8, start: 'top 80%' }
) => {
  const { stagger, delay, duration, start } = options;
  const tween = staggerFadeInUp(elements, stagger, delay, duration);
  return createScrollTrigger(elements[0], tween, undefined, start);
};

export const createTextReveal = (element: HTMLElement, delay = 0) => {
  // Create wrapper for text animation
  const wrapper = document.createElement('span');
  wrapper.style.display = 'inline-block';
  wrapper.style.overflow = 'hidden';
  
  const inner = document.createElement('span');
  inner.style.display = 'inline-block';
  inner.style.transform = 'translateY(100%)';
  inner.innerHTML = element.innerHTML;
  
  element.innerHTML = '';
  wrapper.appendChild(inner);
  element.appendChild(wrapper);
  
  return gsap.to(inner, {
    y: 0,
    duration: 0.8,
    delay,
    ease: 'power3.out',
  });
};

export const createSplitTextReveal = (element: HTMLElement, staggerAmount = 0.05, delay = 0) => {
  const text = element.textContent || '';
  element.innerHTML = '';
  
  const chars = text.split('');
  
  chars.forEach(char => {
    const charSpan = document.createElement('span');
    charSpan.style.display = 'inline-block';
    charSpan.style.opacity = '0';
    charSpan.style.transform = 'translateY(20px)';
    charSpan.textContent = char === ' ' ? '\u00A0' : char;
    element.appendChild(charSpan);
  });
  
  return gsap.to(element.children, {
    opacity: 1,
    y: 0,
    stagger: staggerAmount,
    delay,
    duration: 0.6,
    ease: 'power3.out',
  });
};