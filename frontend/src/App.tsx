import { cn } from "@utils/index";
import { lazy, Suspense, useEffect } from "react";
import { rootStore } from "./store";

import "./App.css";
import { Outlet } from "react-router-dom";

// const Divider = lazy(() => import("@components/common/Divider"));
const Navbar = lazy(() => import("@components/sections/Navbar"));
// const Hero = lazy(() => import("@components/sections/Hero"));
// const Features = lazy(() => import("@components/sections/Features"));
// const Testimonials = lazy(() => import("@components/sections/Testimonials"));
// const Pricing = lazy(() => import("@components/sections/Pricing"));
// const Footer = lazy(() => import("@components/sections/Footer"));
// const GetStartedModal = lazy(
//   () => import("@components/sections/GetStartedModal")
// );
// const CreateSiteModal = lazy(
//   () => import("@components/sections/CreateSiteModal")
// );
// const PaymentModal = lazy(
//   () => import("@components/sections/PaymentModal")
// );

function App() {
  // store
  const isStarting = rootStore(({ data }) => data.isStarting);
  // const handleClientLogout = rootStore(({ handleClientLogout }) => handleClientLogout);
  
  // effects
  
  useEffect(() => {
    const rootBody = document.getElementById("root-body");
    if (rootBody) {
      if (isStarting) {
        rootBody.style.overflow = "hidden";
      } else {
        rootBody.style.overflow = "auto";
      }
    }
  }, [isStarting]);

  return (
    <main
      className={cn("dark:bg-[#020303] relative max-w-[110rem] mx-auto h-auto")}
    >
      <Suspense fallback={<></>}>
        {/* navbar */}
        <Navbar />
        <Outlet/>
        
      </Suspense>
    </main>
  );
}

export default App;
