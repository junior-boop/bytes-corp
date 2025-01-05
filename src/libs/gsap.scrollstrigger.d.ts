type ScrollTriggerCallback = (self: ScrollTrigger) => void;

interface ScrollTriggerVars {
  trigger?: string | Element;
  start?: string | number | ((self: ScrollTrigger) => string | number);
  end?: string | number | ((self: ScrollTrigger) => string | number);
  
  // Options de défilement
  scroller?: string | Element | Window;
  pin?: boolean | string | Element;
  pinSpacing?: boolean | "margin";
  pinReparent?: boolean;
  
  // Marqueurs et débug
  markers?: boolean | {
    startColor?: string;
    endColor?: string;
    fontSize?: string;
    indent?: number;
  };
  
  // Options d'animation
  toggleClass?: string | { targets?: string | Element | Element[], className?: string };
  toggleActions?: string; // "play pause resume reset restart complete reverse none"
  
  // Callbacks
  onEnter?: ScrollTriggerCallback;
  onLeave?: ScrollTriggerCallback;
  onEnterBack?: ScrollTriggerCallback;
  onLeaveBack?: ScrollTriggerCallback;
  onUpdate?: ScrollTriggerCallback;
  onToggle?: ScrollTriggerCallback;
  onRefresh?: ScrollTriggerCallback;
  
  // Options avancées
  anticipatePin?: number;
  fastScrollEnd?: boolean | number;
  preventOverlaps?: boolean | string;
  id?: string;
  
  // Comportement
  snap?: number | number[] | "labels" | ((value: number) => number);
  scrub?: boolean | number;
  
  // Animation
  animation?: GSAPTween | GSAPTimeline;
  
  // Position et taille
  containerAnimation?: GSAPTween | GSAPTimeline;
  horizontal?: boolean;
  endTrigger?: string | Element;
  
  // Réactivité
  invalidateOnRefresh?: boolean;
  refreshPriority?: number;
  
  // Toggles
  toggleActions?: string;
}

// Interface principale de ScrollTrigger
interface ScrollTrigger {
  // Propriétés
  readonly progress: number;
  readonly direction: number;
  readonly velocity: number;
  readonly isActive: boolean;
  
  // Méthodes
  kill(reset?: boolean): void;
  disable(reset?: boolean): void;
  enable(reset?: boolean): void;
  refresh(): void;
  
  // Getters/Setters
  scrollTop(value?: number): number;
  scrollLeft(value?: number): number;
  
  // Méthodes statiques
  static create(vars: ScrollTriggerVars): ScrollTrigger;
  static refresh(hard?: boolean): void;
  static update(reset?: boolean): void;
  static clearMatchMedia(query?: string): void;
  static killAll(reset?: boolean): void;
}

// Namespace pour ScrollTrigger
namespace ScrollTriggerNamespace {
  export function create(vars: ScrollTriggerVars): ScrollTrigger;
  export function refresh(hard?: boolean): void;
  export function update(reset?: boolean): void;
  export function clearMatchMedia(query?: string): void;
  export function killAll(reset?: boolean): void;
  
  // Configuration par défaut
  export const defaults: Partial<ScrollTriggerVars>;
  
  // Événements personnalisés
  export function addEventListener(type: string, callback: Function): void;
  export function removeEventListener(type: string, callback: Function): void;
}

// Exemple d'utilisation avec GSAP
namespace GSAP {
  export const ScrollTrigger: typeof ScrollTriggerNamespace;
}

export { ScrollTrigger, ScrollTriggerVars };