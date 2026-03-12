'use client';

import { useRef, useEffect, useState, type ReactNode } from 'react';

type AnimationType = 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right';

interface AnimatedEntryProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
}

const animationClasses: Record<AnimationType, string> = {
  'fade-up': 'animate-fade-up',
  'fade-in': 'animate-fade-in',
  'slide-left': 'animate-slide-in-left',
  'slide-right': 'animate-slide-in-right',
};

export default function AnimatedEntry({
  children,
  animation = 'fade-up',
  delay = 0,
  className = '',
}: AnimatedEntryProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? undefined : 0,
        animationDelay: inView ? `${delay}ms` : undefined,
      }}
      className={[inView ? animationClasses[animation] : 'opacity-0', className]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  );
}
