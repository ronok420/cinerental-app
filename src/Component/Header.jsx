import React, { useContext, useState } from "react";
import logo from "../../src/assets/logo.svg";
import ring from "../../src/assets/ring.svg";
import cart from "../../src/assets/shopping-cart.svg";
import sun from "../../src/assets/icons/sun.svg";
import moon from "../../src/assets/icons/moon.svg";
import ShopingCart from "./Cine/ShopingCart";
import { CartContext, ThemeContext } from "../context";

const Header = () => {
  const {darkMode,setDarkMode} =useContext(ThemeContext);
  const [showCart, setShowCart] = useState(false);
  const handleShowCart = () => {
    setShowCart(true);
  };

  const CartData = useContext(CartContext);
  const {shopingCart}=CartData;
  console.log(shopingCart,"length");
  // Immediately toggle the dark class when darkMode state changes
  const toggleDarkMode = () => {
    setDarkMode((darkMode) => {
      const newMode = !darkMode;
      if (newMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return newMode;
    });
  };

  return (
    <>
      {showCart && <ShopingCart CartData={CartData} onClose={() => setShowCart(false)}  />}
      <header>
        <nav className="container flex items-center justify-between space-x-10 py-6">
          <a href="index.html">
            <img src={logo} width="139" height="26" alt="" />
          </a>

          <ul className="flex items-center space-x-5">
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={ring} width="24" height="24" alt="" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
                // onClick={()=>setDarkMode(!darkMode)}
               
                onClick={toggleDarkMode}
              >
                <img src={ darkMode ? sun : moon}
                 width="24" 
                 height="24" 
                 alt="" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img
                  src={cart}
                  width="24"
                  height="24"
                  alt=""
                  onClick={handleShowCart}
                />
                {
				shopingCart.length > 0 && (<span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">{shopingCart.length}</span>)
				}
				
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
