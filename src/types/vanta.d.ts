declare module "vanta/dist/vanta.net.min.js" {
  interface NETOptions {
    el: HTMLElement | null;
    THREE: typeof import("three");
    color?: number;
    backgroundColor?: number;
    points?: number;
    maxDistance?: number;
    spacing?: number;
    showDots?: boolean;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
  }

  interface NETEffect {
    destroy: () => void;
    setOptions: (opts: Partial<NETOptions>) => void;
    resize: () => void;
  }

  export default function NET(options: NETOptions): NETEffect;
}
