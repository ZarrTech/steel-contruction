import { Menu } from "./Navbar";
const MobileNav = ({ toggleHam }) => {
  return (
    <nav
      className={`ham-menu ${
        toggleHam
          ? "translate-y-0 ease-in duration-500 -z-30"
          : "-translate-y-[300px] -z-30  transition ease-out duration-300"
      }`}
    >
      
      <div className="ham-menu-container font-font text-smallFont uppercase font-bold">
        <Menu />
      </div>
    </nav>
  );
};
export default MobileNav;
