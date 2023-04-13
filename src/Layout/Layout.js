import React from "react";
import NavBar from "./Navbar/NavBar";
import Footer from "./Footer/Footer";
import useLocalStorage from "use-local-storage";
import "../index.css";
import { BsToggleOn } from "react-icons/bs";

function Layout({ children }) {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <>
      <div className="bg-main text-white app" data-theme={theme}>
        <NavBar />
        <div className="flex justify-end">
          <BsToggleOn className="w-8 h-8 fixed" onClick={switchTheme} />
        </div>

        {children}
        <Footer />
      </div>
    </>
  );
}

export default Layout;
