import Logo from "./logo";
import NavigationMenu from "./nav-menu";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full border-b border-t-[6px] border-t-neutral-800 bg-white/30 backdrop-blur-md h-16">
      <div className="md:max-w-screen-md md:mx-auto py-3 px-4 md:px-0 flex items-center justify-between">
        <Logo />

        <NavigationMenu />
      </div>
    </div>
  );
};

export default Navbar;
