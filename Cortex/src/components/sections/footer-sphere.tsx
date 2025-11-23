import React from 'react';

const FooterSphere = () => {
  const accentColor = '#ff4d00'; // --color-accent-primary from globals.css

  const sphereStyle: React.CSSProperties = {
    background: `
      radial-gradient(circle at 50% 50%, hsla(24, 100%, 80%, 0.7) 0%, transparent 40%),
      radial-gradient(circle at 50% 50%, ${accentColor} 20%, transparent 65%)
    `,
    // This mask creates a halftone/dotted effect, approximating the visual from the screenshot.
    // Full replication is not possible without the original asset.
    maskImage: 'repeating-radial-gradient(circle at center, black 0, black 1px, transparent 1px, transparent 4px)',
    WebkitMaskImage: 'repeating-radial-gradient(circle at center, black 0, black 1px, transparent 1px, transparent 4px)',
    maskSize: '10px 10px',
    WebkitMaskSize: '10px 10px',
    // This creates an organic, blob-like shape instead of a perfect circle.
    borderRadius: '48% 52% 68% 32% / 42% 38% 62% 58%',
    // A subtle glow effect as seen in the design.
    boxShadow: `0 0 150px -20px ${accentColor}`,
  };

  return (
    <div className="bg-background py-24 md:py-48 flex items-center justify-center overflow-hidden">
      <div 
        className="w-[clamp(300px,60vw,700px)] aspect-square opacity-80"
        style={sphereStyle} 
      />
    </div>
  );
};

export default FooterSphere;