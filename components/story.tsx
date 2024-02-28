import Image from "next/image";
import Team from "@/public/images/team.jpg";

export default function Story() {
  return (
    <section className="relative">
      <div className="px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="pb-12 md:pb-20">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60"></h2>
            </div>

            <div className="md:flex justify-between space-x-6 md:space-x-8 lg:space-x-14">
              <figure className="min-w-[240px]">
                {/* <Image
                  className="sticky top-8 mx-auto mb-12 md:mb-0 rounded-lg -rotate-[4deg]"
                  src={Team}
                  width={420}
                  height={280}
                  alt="Team"
                /> */}
              </figure>
              <div className="max-w-[548px] mx-auto">
                <div className="text-slate-400 space-y-6">
                  <p>
                    I founded SaaStudio with a vision to revolutionize the way
                    businesses approach their digital presence. Witnessing the
                    increasing demand for streamlined, innovative solutions in
                    the digital landscape, I recognized an opportunity to
                    leverage my expertise and passion for technology to help
                    businesses thrive online.
                  </p>
                  <p>
                    SaaStudio was born out of a desire to empower businesses of
                    all sizes to harness the power of digital tools and
                    strategies effectively, guiding them towards sustainable
                    growth and success in the ever-evolving digital ecosystem.
                  </p>
                  <p>
                    With a commitment to excellence, creativity, and customer
                    satisfaction, SaaStudio is dedicated to making a meaningful
                    impact on the digital world, one client at a time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
