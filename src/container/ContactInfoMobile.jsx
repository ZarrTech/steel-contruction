import { contactInfo, icons } from "../data";
import { AiFillInstagram } from "react-icons/ai";

const ContactInfoMobile = ({ toggle, setToggle }) => {
  return (
    <div
      className={`absolute top-[4.8rem] right-0 bg-bgpColor p-7 sm:hidden overflow-hidden  ${
        toggle
          ? " translate-y-0 ease-in duration-500 z-30"
          : " -translate-y-[100px]  -z-30 ease-out duration-300"
      } shadow-2xl`}
    >
      <div>
        {contactInfo.map((info, index) => {
          const { text } = info;
          const slicee = icons.slice(0, 3);
          const Icon = slicee[index];
          return (
            <div className=" flex gap-2 mb-6" key={index}>
              <div className=" ">
                <Icon size={20} />
              </div>
              <p className="mr-4 text-textColor text-smallFont  font-font">
                {text}
              </p>
            </div>
          );
        })}
        <div className=" mt-4">
          <AiFillInstagram size={20} />
        </div>
      </div>
    </div>
  );
};
export default ContactInfoMobile;
