import { useState, useEffect } from "react";
import { imageSlider } from "../data";
import { GrNext, GrPrevious } from "react-icons/gr";
import { motion } from "framer-motion";

const Hero = () => {
  const [currentState, setCurrentState] = useState(0);
  const imageSliderLength = imageSlider.length;

  // slide loop
  useEffect(() => {
    const timer = setTimeout(() => {
      currentState === 2
        ? setCurrentState(0)
        : setCurrentState(currentState + 1);
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentState]);

  // slide right
  const moveRight = () => {
    setCurrentState(
      currentState === imageSliderLength - 1 ? 0 : currentState + 1
    );
  };

  // slide left
  const moveLeft = () => {
    setCurrentState(
      currentState === imageSliderLength - 1 ? 0 : currentState - 1
    );
  };

  return (
    <section className="overflow-hidden max-w-[2000px] mx-auto h-[550px] w-full">
      <div className=" flex relative w-full h-full ">
        {/* overlay */}
        <div className="  inset-0 absolute w-full h-full bg-black/75 "></div>
        {imageSlider && imageSlider.length
          ? imageSlider.map((image, index) => {
              const { url, header, text } = image;
              return (
                <div
                  key={index}
                  className={`${
                    currentState === index
                      ? "w-full h-full"
                      : "hidden w-full h-full"
                  }relative`}
                >
                  <img
                    className={`slide  bg-cover w-full h-full`}
                    src={url}
                    alt=" background slide image "
                  />

                  <div className=" absolute flex flex-col justify-center inset-0 w-[80%] m-auto">
                    <motion.h1
                      initial={{ y: -50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        delay: 0.5,
                        type: "spring",
                        stiffness: 55,
                      }}
                      className=" text-[4.5rem] font-bold text-icon-color uppercase text-center"
                    >
                      {header}
                    </motion.h1>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.3, type: "tween" }}
                      className=" text-[2rem] text-center text-white/80 font-medium"
                    >
                      {text}
                    </motion.p>
                  </div>
                </div>
              );
            })
          : null}
      </div>

      <GrPrevious
        onClick={moveLeft}
        className=" z-50 block  text-white/40 absolute top-[50%] border border-white/40 left-3 rounded-full cursor-pointer p-1 translate-x-0 -translate-y-[-50%]  animate-pulse hover:text-white hover:animate-none"
        size={30}
      />
      <GrNext
        onClick={moveRight}
        className=" z-50 block text-white/40 border-white/40 border absolute top-[50%] right-3 rounded-full cursor-pointer p-1 translate-x-0 -translate-y-[-50%] animate-pulse hover:text-white hover:animate-none"
        size={30}
      />
    </section>
  );
};
export default Hero;
