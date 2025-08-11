import { words } from "../constants";
import Button from "../components/Button";
import HeroExperience from "../components/HeroModels/HeroExperience";
import AnimatedCounter from "../components/AnimatedCounter";

const Hero = () => {
  return (
    <section
      id="Home"
      className="relative overflow-hidden pt-12 md:pt-32 pr-24 md:pr-32"
    >
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" />
      </div>
      <div className="Hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Turning
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>Into Solutions</h1>
              <h1>that Solve Problems</h1>
            </div>
            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none md:max-w-2xl max-w-sm md:leading-relaxed leading-normal">
              Hi there. I'm Alice Ton, a full stack and data analyst based in
              Adelaide, passionate about building modern web applications with
              the latest & modest tech.
            </p>
            <Button
              text="See My Work"
              className="md:w-80 md:h-16 w-60 h-12"
              targetId="Projects"
            />
          </div>
        </header>
        {/* RIGHT: Hero Experience */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
