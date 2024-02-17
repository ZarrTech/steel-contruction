import {
  PiDotsThreeOutlineVerticalDuotone,
  PiDotsThreeOutlineVerticalFill,
} from "react-icons/pi";

const ThreeDots = ({ toggle, setToggle }) => {
  return (
    <div className=" sm:hidden">
      {toggle ? (
        <PiDotsThreeOutlineVerticalFill
          size={20}
          color="#ffffff"
          onClick={() => {
            setToggle(false);
          }}
        />
      ) : (
        <PiDotsThreeOutlineVerticalDuotone
          size={20}
          color="#ffffff"
          onClick={() => {
            setToggle(true);
          }}
        />
      )}
    </div>
  );
};
export default ThreeDots;
