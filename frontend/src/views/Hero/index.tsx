import { useEffect, useState } from "react";
import Beem_pulse from "../../components/Been-Pulse";

export default function HeroSection() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeStart = 0;
      const fadeEnd = 300;
      const newOpacity = 1 - Math.min(Math.max((scrollY - fadeStart) / (fadeEnd - fadeStart), 0), 1);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative min-h-screen">
      <Beem_pulse />
      <div className='text-white relative lg:absolute w-full flex lg:flex-row flex-col items-center justify-between px-[5%] top-[40%] lg:text-left text-center md:z-[110] md:px-[1%]'>
        <div className="md:max-w-[48%] sm:mb-22 -mt-[110px]">
          <p className="text-[#9797C2] font-sora font-light leading-[100%] tracking-[0.4em] 
              text-[14px] text-center 
              md:text-[15px] 
              lg:text-[16px] lg:text-left lg:ml-[76px]">
            INTRODUCING
          </p>

          <h1 className="font-akira font-normal leading-[140%] tracking-[0em] 
               text-[48px] text-center 
               md:text-[38px] 
               lg:text-[32px] lg:text-left 
               xl:text-[66.22px]
               bg-gradient-to-r from-[#EEF1F0] to-[#71757E] 
               bg-clip-text text-transparent
               lg:mt-0 mt-3 
               break-words lg:ml-[70px]">
            Eclypse
          </h1>
        </div>

        <div className='relative z-[120] lg:hidden block lg:mt-0 mt-20 '>
          <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L7 7L13 1" stroke="#F2F2F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <div className='lg:mt-0 mt-20 lg:mb-0 mb-20 max-w-full lg:max-w-[29%] text-center 
                md:text-[14px] md:max-w-[45%]
                lg:text-[15px] lg:text-left text-[14px] lg:mr-20'>
          <p className="md:mb-2">It's different. It's new.</p>

          <p className='text-[#999] lg:text-[#888] md:leading-[1.5]'>
            Don't shop. Vibe. Connect. Express.
            <br />
            Where discovery feels intuitive, and
            <br />
            style isn't worn, it's felt.
            <br />
            <span className="text-white">Eclypse</span> is an e-commerce platform
            <br />
            in alignment with you.
            <br />
            <span className="text-white mt-3 block">Stand out. Live the Eclypse.</span>
          </p>
        </div>
      </div>

      <button
        onClick={scrollToBottom}
        style={{ opacity }}
        className="hidden md:flex fixed bottom-6 right-6 w-12 h-12 bg-transparent rounded-full transition-opacity duration-500 z-[130] items-center justify-center"
        aria-label="Scroll to bottom"
      >
        <img
          src="/assets/svg/chevron-down.svg"
          alt="Scroll Down"
          className="w-9 h-9"
        />
      </button>
    </div>
  );
}
