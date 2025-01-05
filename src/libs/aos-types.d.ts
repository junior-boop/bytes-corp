// aos.d.ts
declare namespace AOS {
    export interface Settings {
      // Paramètres globaux
      disable?: boolean | string | ((params?: any) => boolean);
      startEvent?: string;
      initClassName?: string;
      animatedClassName?: string;
      useClassNames?: boolean;
      disableMutationObserver?: boolean;
      debounceDelay?: number;
      throttleDelay?: number;
  
      // Paramètres par défaut pour les animations
      offset?: number;
      delay?: number;
      duration?: number;
      easing?: 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'ease-in-back' | 'ease-out-back' | 'ease-in-out-back' | 'ease-in-sine' | 'ease-out-sine' | 'ease-in-out-sine' | 'ease-in-quad' | 'ease-out-quad' | 'ease-in-out-quad' | 'ease-in-cubic' | 'ease-out-cubic' | 'ease-in-out-cubic' | 'ease-in-quart' | 'ease-out-quart' | 'ease-in-out-quart';
      once?: boolean;
      mirror?: boolean;
      anchorPlacement?: 'top-bottom' | 'top-center' | 'top-top' | 'center-bottom' | 'center-center' | 'center-top' | 'bottom-bottom' | 'bottom-center' | 'bottom-top';
    }
  
    export type Animation =
      | 'fade'
      | 'fade-up'
      | 'fade-down'
      | 'fade-left'
      | 'fade-right'
      | 'fade-up-right'
      | 'fade-up-left'
      | 'fade-down-right'
      | 'fade-down-left'
      | 'flip-up'
      | 'flip-down'
      | 'flip-left'
      | 'flip-right'
      | 'slide-up'
      | 'slide-down'
      | 'slide-left'
      | 'slide-right'
      | 'zoom-in'
      | 'zoom-in-up'
      | 'zoom-in-down'
      | 'zoom-in-left'
      | 'zoom-in-right'
      | 'zoom-out'
      | 'zoom-out-up'
      | 'zoom-out-down'
      | 'zoom-out-left'
      | 'zoom-out-right';
  
    export interface Attributes {
      'data-aos'?: Animation;
      'data-aos-offset'?: number;
      'data-aos-delay'?: number;
      'data-aos-duration'?: number;
      'data-aos-easing'?: Settings['easing'];
      'data-aos-mirror'?: boolean;
      'data-aos-once'?: boolean;
      'data-aos-anchor-placement'?: Settings['anchorPlacement'];
      'data-aos-anchor'?: string;
    }
  
    export interface Instance {
      init(settings?: Partial<Settings>): void;
      refresh(): void;
      refreshHard(): void;
    }
  }
  
  // Déclaration du module
  declare module 'aos' {
    const aos: AOS.Instance;
    export default aos;
  }
  
  // Déclaration globale (optionnelle, pour utilisation sans import)
  declare const AOS: AOS.Instance;