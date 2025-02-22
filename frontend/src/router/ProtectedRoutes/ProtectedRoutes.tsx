import React, { useEffect } from "react";
import { rootStore } from "@store/index";
import { useNavigate } from "react-router-dom";
import Loading from "@components/Loading";

const ProtectedRoutes = ({ children }: { children: React.ReactNode }) => {
  const { isIn } = rootStore((state) => state.data);
  const nav = useNavigate();

  // Check authentication and navigate if not authenticated
  useEffect(() => {
    if (!isIn) {
      nav("/"); // Redirect to home page if not authenticated
    }
  }, [isIn, nav]);

  // Only render children if authenticated
  return isIn ? children : <Loading/>;
};

export default ProtectedRoutes;