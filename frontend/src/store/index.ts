import { create } from "zustand";
import { jwtDecode } from "jwt-decode";
import { DecodedJwt } from "types/auth.request";
import { subscribeWithSelector } from "zustand/middleware";

type ROOT_DATA = {
  isStarting: boolean;
  isSignUp: boolean;
  isIn: boolean;
  isConfigSite: boolean;
  isPayment: boolean;
  confirmPayment: boolean;
  man: DecodedJwt | null;
  tk: string;
};

const INIT_DATA: ROOT_DATA = {
  isStarting: false,
  isSignUp: false,
  isIn: false,
  isConfigSite: false,
  isPayment: false,
  confirmPayment: false,
  man: null,
  tk: "",
};

interface rootStore {
  data: ROOT_DATA;
  toggleStarted: () => void;
  toggleSignUp: () => void;
  toggleConfigSite: () => void;
  togglePayment: () => void;
  confirmPayment: () => void;
  handleClientLogin: (accessToken: string) => void;
  handleClientLogout: () => void;
  initializeStore: () => void;
}

const isTokenExpired = (token: string): boolean => {
  try {
    const decoded = jwtDecode<DecodedJwt>(token);
    return decoded.exp ? decoded.exp * 1000 < Date.now() : true;
  } catch (error) {
    return true; // Token is invalid or expired
  }
};

export const rootStore = create<rootStore>()(
  subscribeWithSelector((set) => ({
    data: INIT_DATA,

    initializeStore: () => {
      const inState = localStorage.getItem("in") === "true";
      const tk = localStorage.getItem("tk") || "";

      if (tk && isTokenExpired(tk)) {
        localStorage.setItem("in", "false");
        localStorage.removeItem("tk");
        set({ data: INIT_DATA });
        return;
      }

      set({
        data: {
          ...INIT_DATA,
          isIn: inState,
          tk: tk,
        },
      });
    },

    toggleStarted: () =>
      set((state) => ({
        data: { ...state.data, isStarting: !state.data.isStarting },
      })),

    toggleSignUp: () =>
      set((state) => ({
        data: { ...state.data, isSignUp: !state.data.isSignUp },
      })),

    toggleConfigSite: () =>
      set((state) => ({
        data: { ...state.data, isConfigSite: !state.data.isConfigSite },
      })),

    togglePayment: () =>
      set((state) => ({
        data: { ...state.data, isPayment: !state.data.isPayment },
      })),

    confirmPayment: () =>
      set((state) => ({
        data: { ...state.data, confirmPayment: true },
      })),

    handleClientLogin: (accessToken) => {
      localStorage.setItem("in", "true");
      localStorage.setItem("tk", accessToken);
      const decoded = jwtDecode<DecodedJwt>(accessToken);
      set((state) => ({
        data: {
          ...state.data,
          isIn: true,
          tk: accessToken,
          man: decoded,
        },
      }));
    },

    handleClientLogout: () => {
      localStorage.setItem("in", "false");
      localStorage.removeItem("tk");
      set({
        data: {
          ...INIT_DATA,
          isSignUp: false,
          isIn: false,
        },
      });
    },
  }))
);

// Listen for changes in localStorage and sync the store
const syncStore = () => {
  const handleStorageChange = (event: StorageEvent) => {
    if (event.key === "in" || event.key === "tk") {
      rootStore.getState().initializeStore();
    }
  };

  window.addEventListener("storage", handleStorageChange);
  return () => window.removeEventListener("storage", handleStorageChange);
};

// Initialize the store and start syncing
rootStore.getState().initializeStore();
syncStore();