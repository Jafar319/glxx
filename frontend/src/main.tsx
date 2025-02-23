import React from "react";
import ReactDOM from "react-dom/client";
import { SnackbarProvider } from "notistack";
import "./main.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/Router"
const rootElement = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <SnackbarProvider autoHideDuration={3000}>
      <RouterProvider router={router}/>
    </SnackbarProvider>
  </React.StrictMode>
);
