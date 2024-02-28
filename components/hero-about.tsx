import Image from "next/image";
import Particles from "./particles";
import Illustration from "@/public/images/page-illustration.svg";
import AboutIllustration from "@/public/images/about-illustration.svg";
import Icon from "@/public/images/about-icon.svg";

export default function HeroAbout() {
  return (
    <section className="relative">
      {/* Radial gradient */}
      <div
        className="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-[800px] aspect-square"
        aria-hidden="true"
      >
        <div className="absolute inset-0 translate-z-0 bg-slate-500 rounded-full blur-[120px] opacity-30"></div>
        <div className="absolute w-64 h-64 translate-z-0 bg-slate-400 rounded-full blur-[80px] opacity-70"></div>
      </div>

      {/* Particles animation */}
      <Particles className="absolute inset-0 h-96 -z-10" quantity={10} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-10 md:pt-40">
          {/* Hero content */}
          <div className="text-center">
            <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-slate-500 to-slate-200 pb-3">
              The folks behind the product
            </div>
            <h1 className="h1 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-6">
              Turning security into innovation
            </h1>
            {/* Rings illustration */}
            <div className="inline-flex items-center justify-center relative">
              {/* Particles animation */}
              <div className="absolute inset-0 -z-10" aria-hidden="true">
                <canvas
                  data-particle-animation
                  data-particle-quantity="10"
                ></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
