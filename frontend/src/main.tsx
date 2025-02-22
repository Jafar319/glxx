import React from "react";
import ReactDOM from "react-dom/client";
import { SnackbarProvider } from "notistack";
import "./main.css";
import { Router, RouterProvider } from "react-router-dom";
import router from "./router/Router"
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SnackbarProvider autoHideDuration={3000}>
      <RouterProvider router={router}/>
    </SnackbarProvider>
  </React.StrictMode>
);
