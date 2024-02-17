import { useState } from "react";
import { ContactInfoMobile, MobileNav, ThreeDots } from '../container/index'
import { menu } from "../data";
export const Menu = () => (
  <>
    <p className=" hover:text-icon-color">
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#wgpt3">About</a>
    </p>
    <p>
      <a href="#possibility">Services</a>
    </p>
    <p>
      <a href="#features">Projects</a>
    </p>
    <p>
      <a href="#blog">Contacts</a>
    </p>
  </>
);


const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleHam, setToggleHam] = useState(false);
  const [navbar, setNavbar] = useState(false);

const changeScroll = () => {
  const scroll = window.scrollY
  scroll >= 59 ? setNavbar(true): setNavbar(false)
}

window.addEventListener('scroll', changeScroll)


  return (
    <section className="sm:bg-transparent bg-bgsColor">
      <div className=" flex justify-between p-5 sm:p-0 font-font text-smallFont">
        <div className=" flex items-center gap-7">
          {/* hamburger menu */}
          <div
            className={`${
              toggleHam ? "open" : "hamburger-menu"
            } flex sm:hidden `}
            onClick={() => {
              setToggleHam(!toggleHam);
            }}
          >
            <div className="hamburger"></div>
          </div>
          {/* logo */}
          <div className=" sm:hidden text-icon-color font-bold">HOS</div>
        </div>

        {/* desktop nav */}
        <div className={`${navbar?'nav activeNav': 'nav'}`}>
          <div className=" text-icon-color font-bold text-6xl">HOS</div>
          <div className=" flex gap-7 uppercase font-bold">
            {menu.map((menu) => {
              const { link, text } = menu;
              return (
                <div
                  key={text}
                  className=" text-smallFont font-extrabold hover:text-icon-color text-white duration-150 ease-in"
                >
                  <a href={link}>{text}</a>
                </div>
              );
            })}
          </div>
        </div>

        {/* three dot toggle for mobile contact info */}
        <ThreeDots toggle={toggle} setToggle={setToggle} />
      </div>
      {/* mobile nav */}
      <MobileNav toggleHam={toggleHam} setToggleHam={setToggleHam} />
      {/* contact info mobile */}
      <ContactInfoMobile toggle={toggle} setToggle={setToggle} />
    </section>
  );
};
export default Navbar;
