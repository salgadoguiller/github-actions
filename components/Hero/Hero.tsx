
import PrimaryLink from "@/components/Common/PrimaryLink";
import ContactMe from "@/components/ContactMe/ContactMe";

import Graphics from "./Graphics";

const Hero = () => {
  return (
    <section id="home" className="relative z-10">
      <div className="h-screen w-screen py-48">
        <div className="flex h-full w-full flex-col items-center justify-between text-center">
          <article>
            <h1 className="mb-5 animate-fadeInUp text-3xl font-bold sm:text-4xl md:text-5xl">
              {'Hi there! I\'m '}
              <span className="text-primary">Guillermo Salgado</span>
            </h1>
            <p className="paragraph-color mb-12 animate-fadeInUp text-base font-medium animation-delay-[250ms] sm:text-lg md:text-xl">
              Senior Software Engineer
              {/* Senior Software Engineer | 8+ years of experience | JavaScrip, TypeScript, Python | Fullstack Engineer | Problem Solver */}
            </p>
          </article>
          <footer className="flex animate-fadeInUp flex-col gap-8 animation-delay-[500ms]">
            <ContactMe />
            <PrimaryLink text="Tell me more" href="/#about" />
          </footer>
        </div>
      </div>
      <Graphics />
    </section>
  );
};

export default Hero;
