import { useReducedMotion } from '../../hooks/useReducedMotion';
import { AshokaChakra } from '../ui/AshokaChakra';

interface WavingFlagProps {
  className?: string;
  width?: string | number;
  height?: string | number;
}

export function WavingFlag({ className = '', width = 300, height = 200 }: WavingFlagProps) {
  const reduced = useReducedMotion();
  const filterId = "flag-wave-filter";

  return (
    <div className={`relative ${className}`} style={{ width, height, perspective: '1000px' }}>
      {/* SVG Filter Definition */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency={reduced ? "0.001 0.001" : "0.015 0.025"}
              numOctaves="3"
              result="noise"
            >
              {!reduced && (
                <animate
                  attributeName="baseFrequency"
                  values="0.015 0.025; 0.018 0.035; 0.015 0.025"
                  dur="4s"
                  repeatCount="indefinite"
                />
              )}
            </feTurbulence>
            
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale={reduced ? 0 : 25}
              xChannelSelector="R"
              yChannelSelector="G"
              result="displaced"
            />
            
            {/* Soft lighting effect based on the waves */}
            <feSpecularLighting
              in="noise"
              surfaceScale="2"
              specularConstant="1.5"
              specularExponent="20"
              lightingColor="#ffffff"
              result="light"
            >
              <feDistantLight azimuth="45" elevation="60" />
            </feSpecularLighting>
            <feComposite in="light" in2="displaced" operator="in" result="lightClipped" />
            <feBlend mode="screen" in="lightClipped" in2="displaced" result="final" />
          </filter>
        </defs>
      </svg>

      {/* Flag Container with Filter applied */}
      <div 
        className="w-full h-full rounded-md shadow-2xl relative overflow-hidden"
        style={{ 
          filter: `url(#${filterId})`,
          transform: reduced ? 'none' : 'rotateY(-15deg) rotateX(5deg)',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Saffron */}
        <div className="absolute top-0 left-0 right-0 h-1/3 bg-[#FF9933]" />
        
        {/* White */}
        <div className="absolute top-1/3 left-0 right-0 h-1/3 bg-white flex items-center justify-center">
          <AshokaChakra size={height as number * 0.28} color="#000080" spinning={!reduced} />
        </div>
        
        {/* Green */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-[#138808]" />

        {/* Fabric Texture Overlay */}
        <div 
          className="absolute inset-0 mix-blend-overlay opacity-30 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Ambient shadow gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-white/10 pointer-events-none" />
      </div>
    </div>
  );
}
