import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import { review } from "../data";
import { ParallaxImage } from "../assets/image";
import { useState } from "react";

const [GrTrophy, PiBuildingsBold, IoChatbubblesOutline, GiHumanPyramid] =
  review;
const Box = ({ svg, number, text }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 sm:mb-0 mb-9">
      <div className=" text-[7rem]">{svg}</div>
      <p className=" text-6xl font-bold  text-icon-color">{number}</p>
      <p className=" text-3xl ">{text}</p>
    </div>
  );
};

const CS = () => {
const [scrollTrigger, setScrollTrigger] =useState(false)

  const parallax = {
    backgroundImage: `url(${ParallaxImage})`,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
  };
  return (
    <section style={parallax} className="sm:h-[400px] mt-7">
      <ScrollTrigger
        onEnter={() => setScrollTrigger(true)}
        onExit={() => setScrollTrigger(false)}
        className=" bg-black/70 h-full w-full"
      >
        {scrollTrigger && (
          <div className="h-full w-full flex flex-col sm:flex-row items-center gap-10 sm:0 justify-around p-7">
            <Box
              svg={<PiBuildingsBold />}
              number={<CountUp start={0} end={40} duration={8}></CountUp>}
              text="projects annually"
            />
            <Box
              svg={<GiHumanPyramid />}
              number={<CountUp start={0} end={150} duration={7}></CountUp>}
              text="happy client"
            />
            <Box
              svg={<IoChatbubblesOutline />}
              number={<CountUp start={0} end={93} duration={6}></CountUp>}
              text="positive reviews"
            />
            <Box
              svg={<GrTrophy />}
              number={<CountUp start={0} end={10} duration={7}></CountUp>}
              text="awards"
            />
          </div>
        )}
      </ScrollTrigger>
    </section>
  );
};
export default CS;
