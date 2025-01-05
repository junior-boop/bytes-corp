import { ScrollTrigger, ScrollTriggerVars } from "./gsap.scrollstrigger";
type GSAPTweenVars = {
    duration?: number;
    delay?: number;
    ease?: string;
    repeat?: number;
    yoyo?: boolean;
    paused?: boolean;
    overwrite?: boolean | "auto" | "all" | "none";
    onComplete?: () => void;
    onStart?: () => void;
    onUpdate?: () => void;
    onRepeat?: () => void;
  };
  
  // Types pour les transformations
  type GSAPTransformVars = {
    x?: number | string;
    y?: number | string;
    rotation?: number | string;
    scale?: number;
    scaleX?: number;
    scaleY?: number;
    skewX?: number;
    skewY?: number;
    transformOrigin?: string;
  };
  
  // Types pour les propriétés CSS
  type GSAPCSSVars = {
    opacity?: number;
    backgroundColor?: string;
    width?: number | string;
    height?: number | string;
    top?: number | string;
    left?: number | string;
    borderRadius?: number | string;
    boxShadow?: string;
  };

  type GSAPScrollTriggerVars = {
    scrollTrigger: ScrollTriggerVars;
  }
  
  // Types pour les propriétés SVG
  type GSAPSVGVars = {
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    strokeDasharray?: string | number;
    strokeDashoffset?: string | number;
  };
  
  // Union de tous les types de variables GSAP
  type GSAPVars = GSAPTweenVars & GSAPTransformVars & GSAPCSSVars & GSAPSVGVars & GSAPScrollTriggerVars ;
  
  // Interface pour Timeline
  interface GSAPTimeline {
    to(
      target: string | Element | Element[],
      vars: GSAPVars
    ): this;
    from(
      target: string | Element | Element[],
      vars: GSAPVars
    ): this;
    fromTo(
      target: string | Element | Element[],
      fromVars: GSAPVars,
      toVars: GSAPVars
    ): this;
    add(
      tween: GSAPTween | GSAPTimeline,
      position?: string | number
    ): this;
    pause(): this;
    play(): this;
    reverse(): this;
    restart(): this;
  }
  
  // Interface pour Tween
  interface GSAPTween {
    pause(): this;
    play(): this;
    reverse(): this;
    restart(): this;
    seek(time: number): this;
    progress(value: number): this;
    duration(value: number): this;
    delay(value: number): this;
    timeScale(value: number): this;
  }
  
  // Namespace GSAP principal
  namespace GSAP {
    export function to(
      target: string | Element | Element[],
      vars: GSAPVars
    ): GSAPTween;
  
    export function from(
      target: string | Element | Element[],
      vars: GSAPVars
    ): GSAPTween;
  
    export function fromTo(
      target: string | Element | Element[],
      fromVars: GSAPVars,
      toVars: GSAPVars
    ): GSAPTween;
  
    export function timeline(vars?: GSAPTweenVars): GSAPTimeline;
  
    export function registerPlugin(...args: any[]): void;
  }
  
  export default GSAP;