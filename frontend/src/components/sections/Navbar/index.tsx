import { rootStore } from "@store/index";
import Icons from "../Hero/icons";
import { log } from "console";

const Navbar = () => {
  const { isIn } = rootStore((state) => state.data);
  const toggleStarted = rootStore((state) => state.toggleStarted);
  const handleLogout = rootStore((state) => state.handleClientLogout);
  console.log();
  
  return (
    <nav
      className="fixed z-[99] filter top-0 left-0 right-0 py-4 md:py-5 
      px-4 md:px-10 max-w-[110rem] flex items-center justify-between 
      bg-white text-[#020303] dark:bg-[#02030330] dark:text-white rounded-md 
      bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20"
    >
      <a
        className="cursor-pointer font-bold text-xl md:text-3xl font-mono pl-4 md:pl-0"
        href="/"
      >
        GoalGalaxy
      </a>
      {isIn ? (
        <button
          className="get-started-btn with-base-gradient text-xs py-2 px-3 md:text-sm md:py-3 md:px-4"
          onClick={() => {
            
            handleLogout();
          }}
        >
          Logout
        </button>
      ) : (
        <button
          className="get-started-btn with-base-gradient text-xs py-2 px-3 md:text-sm md:py-3 md:px-4"
          onClick={() => toggleStarted()}
        >
          Get Started
          <Icons.GetStartedChevronRight />
        </button>
      )}
    </nav>
  );
};

export default Navbar;
