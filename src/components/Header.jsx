import { ContactNav, Navbar } from "../container";

const Menu = () => (
  <>
    <p>
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

const Header = () => {
  return (
    <section className=" flex flex-col sm:bg-transparent bg-primary-color">
      <ContactNav />
      <Navbar />
    </section>
  );
};
export default Header;
