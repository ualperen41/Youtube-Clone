import { createContext, useContext, useState } from "react";
import Sidebar from "../component/layout/Sidebar";

// context yapısı kurulumu
export const SidebarContext = createContext();

// sağlayıcı componentı tanımla (hoc)
export const SidebarProvider = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <SidebarContext.Provider value={{ isCollapsed, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

// custom hook(Kendi hook un)
export const useSidebar = () => {
  // context yapısına abone ol
  const context = useContext(SidebarContext);

  // veriler gelmediyse hata fırlat
  if (!context) {
    throw new Error("Provider ile app'i sarmalayın");
  }
  return context;
};
