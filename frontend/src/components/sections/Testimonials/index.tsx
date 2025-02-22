import { useNavigate } from "react-router-dom";
import { rootStore } from "@store/index";
import { TESTIMONIALS } from "./constant";
import Icons from "./icons";

const Testimonials = () => {
  const navigate = useNavigate();
  const { isIn } = rootStore((state) => state.data);
  const toggleStarted = rootStore((state) => state.toggleStarted);

  // Handle link click
  const handleLinkClick = (path:string) => {
    if (isIn) {
      // If user is authenticated, navigate to the specified route
      navigate(path);
    } else {
      // If user is not authenticated, open the login modal
      toggleStarted();
    }
  };

  return (
    <div className="overflow-hidden bg-gradient-to-tl from-blue-600/50 to-violet-600/50 dark:from-blue-600/50 dark:to-violet-600/50">
      <div className="relative max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl w-3/4 lg:w-1/2 mb-6 sm:mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white font-semibold">
            Loved by business and individuals across the globe
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((testi, index) => (
            <div key={index} className="flex min-h-32 min-w-40">
              <div className="flex flex-col bg-white rounded-xl dark:bg-slate-900 w-full">
                <div className="p-4 bg-gray-100 md:px-7 dark:bg-slate-700 rounded-t-xl">
                  <div className="flex items-center">
                    <div className="grow ms-3">
                      <p className="text-center text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-200">
                        {testi.text}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex p-2 md:p-3 justify-center items-center h-full">
                  <button
                    className="get-started-btn with-base-gradient text-xs py-1 px-2 md:text-sm md:py-1 md:px-2"
                    onClick={() => handleLinkClick(testi.path)}
                  >
                    Explore
                    <Icons.GetStartedChevronRight />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid gap-6 grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-8">
          <div>
            <h4 className="text-lg sm:text-xl font-semibold text-white">
              Accuracy rate
            </h4>
            <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-gray-800 dark:text-yellow-500">
              99.95%
            </p>
            <p className="mt-1 text-gray-100 dark:text-gray-400">
              in fulfilling orders
            </p>
          </div>

          <div>
            <h4 className="text-lg sm:text-xl font-semibold text-white">
              Businesses
            </h4>
            <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-gray-800 dark:text-yellow-500">
              2,000+
            </p>
            <p className="mt-1 text-gray-100 dark:text-gray-400">
              partner with GoalGalaxy
            </p>
          </div>

          <div>
            <h4 className="text-lg sm:text-xl font-semibold text-white">
              Happy customer
            </h4>
            <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-gray-800 dark:text-yellow-500">
              85%
            </p>
            <p className="mt-1 text-gray-100 dark:text-gray-400">
              this year alone
            </p>
          </div>
        </div>

        <div
          className="absolute bottom-0 end-0 transform lg:translate-x-32"
          aria-hidden="true"
        >
          <Icons.DecoratingArrows />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;