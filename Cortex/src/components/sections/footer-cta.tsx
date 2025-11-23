import Image from 'next/image';

const FooterCta = () => {
  // Using inline styles for complex background/mask properties
  // which are not easily representable with Tailwind classes.
  const dotPatternStyle: React.CSSProperties = {
    backgroundImage: 'radial-gradient(var(--color-accent-primary) 1.5px, transparent 1.5px)',
    backgroundSize: '6px 6px',
    // This creates a mask that is solid at the bottom and fades to transparent,
    // with a slight curve to mimic the original design's wave.
    maskImage: 'radial-gradient(ellipse 70% 100% at 50% 100%, black 50%, transparent 100%)',
    WebkitMaskImage: 'radial-gradient(ellipse 70% 100% at 50% 100%, black 50%, transparent 100%)',
  };

  return (
    <>
      <section className="relative bg-background overflow-hidden">
        <div className="container relative z-10 pt-[120px] pb-[120px] md:pt-[160px] md:pb-[140px] lg:pt-[200px] lg:pb-[160px]">
          <div className="max-w-4xl">
            <p className="text-label text-black opacity-65 mb-4 md:mb-6">
              [ABOUT US]
            </p>
            <h2 className="h1 text-black opacity-10">
              NO FLUFF,<br />
              JUST FACTS
            </h2>
          </div>
        </div>
        <div 
          className="absolute bottom-0 left-0 right-0 h-[382px]"
          style={dotPatternStyle}
        />
      </section>

      <section className="bg-secondary">
        <div className="container py-[70px] md:py-[100px]">
          <div className="flex justify-end">
            <a href="#" role="button" aria-label="Enroll" className="inline-flex overflow-hidden group">
              <div className="bg-black text-white h-[58px] flex items-center justify-center px-8 transition-colors group-hover:bg-accent-secondary">
                <span className="text-btn uppercase">
                  ENROLL
                </span>
              </div>
              <div className="bg-black w-[58px] h-[58px] flex items-center justify-center transition-colors group-hover:bg-accent-secondary">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a190a3d1-0e74-4981-86fa-6d6025c2ae8a-izum-study/assets/svgs/btn_dots_white-1.svg"
                  alt="dots icon"
                  width={24}
                  height={8}
                  className="w-auto h-auto transition-transform group-hover:scale-110"
                />
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default FooterCta;