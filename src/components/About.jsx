import { Heading } from "../container";
import { aboutImage } from "../assets/image";
import { headline, aboutIcons, aboutLists } from "../data";
const About = () => {
  
  return (
    <section>
      <div className=" p-10">
        <Heading text="about us" />

        <div className="flex flex-col sm:flex-row justify-center items-start mt-[3rem] gap-14">
          <div className="sm:flex flex-col sm:flex-1 items-center p-3">
            <p className=" text-2xl sm:w-[90%]">{headline}</p>
            {aboutLists.map((list, index) => {
              const Icon = aboutIcons[index]
              return (
                <div className=" flex sm:w-[80%]  mt-[5rem] gap-4" key={index}>
                  <div>
                    <Icon size={30} className="flex " />
                  </div>

                  <div>
                    <h1 className=" text-2xl font-bold text-icon-color">
                      {list.title}
                    </h1>
                    <p className=" text-2xl mt-5">{list.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className=" sm:flex-1">
            <img className=" w-full" src={aboutImage} alt="image" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default About