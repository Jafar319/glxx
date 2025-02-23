
import { lazy, Suspense } from "react";

// import React from 'react'
const Divider = lazy(() => import("@components/common/Divider"));
// const Navbar = lazy(() => import("@components/sections/Navbar"));
const Hero = lazy(() => import("@components/sections/Hero"));
const Features = lazy(() => import("@components/sections/Features"));
const Testimonials = lazy(() => import("@components/sections/Testimonials"));
const Pricing = lazy(() => import("@components/sections/Pricing"));
const Footer = lazy(() => import("@components/sections/Footer"));
const GetStartedModal = lazy(
  () => import("@components/sections/GetStartedModal")
);
const CreateSiteModal = lazy(
  () => import("@components/sections/CreateSiteModal")
);
const PaymentModal = lazy(
  () => import("@components/sections/PaymentModal")
);

const LandingPage = () => {
  return (
    <div>  <Suspense fallback={<></>}>
    <Hero/>
    <Divider/>
    {/* features */}
    <Features />
    {/* testinomials */}
    <Testimonials/>
    {/* pricing and plans */}
    <Pricing/>
    <Divider />
    {/* footer */}
    <Footer />
    {/* auth modal */}
    <GetStartedModal />
    {/* config site modal */}
    <CreateSiteModal />
    {/* payment full page modal */}
    <PaymentModal /></Suspense></div>
  
  );
}

export default LandingPage;