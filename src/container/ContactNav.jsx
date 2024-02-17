import { contactInfo,icons } from "../data";
import { AiFillInstagram } from "react-icons/ai";



const ContactNav = () => {
  const handleScroll = (e) => {
    console.log(e.target.scrollUp)
  }
  
  return (
    <section onScroll={handleScroll}  className=" bg-bgsColor hidden sm:block p-8">
      <div className=" flex justify-between items-center ">
        <div className=" flex  items-center gap-4">
          {contactInfo.map((info, index) => {
            const { text } = info;
            const slicee = icons.slice(0, 3);
            const Icon = slicee[index];
            return (
              <div
                className=" flex justify-center items-center gap-3"
                key={index}
              >
                <div className=" text-icon-color hover: text-sec hover:text-slate-200 transition duration-100 ease-in">
                  <Icon size={20} />
                </div>
                <p className="mr-4 text-textColor text-smallFont/relaxed font-font hover:text-icon-color transition duration-100 ease-in">
                  {text}
                </p>
              </div>
            );
          })}
        </div>
        <div className=" text-icon-color">
          <AiFillInstagram size={20} />
        </div>
      </div>
    </section>
  );
};
export default ContactNav;
