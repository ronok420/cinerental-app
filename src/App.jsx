// import { useState } from "react";
// import "./App.css";
// import MovieList from "./Component/Cine/MovieList";
// import Header from "./Component/Header";
// import Sidebar from "./Component/Sidebar";
// import { CartContext, ThemeContext } from "./context";
// // import { darkMode } from "../tailwind.config";

// function App() {
//   const [shopingCart, setShopingCart] = useState([]);
//   const [darkMode, setDarkMode] = useState(true);

//   return ( 
//     <div >
//       <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
//         <CartContext.Provider value={{ shopingCart, setShopingCart }}>
//           <div className={` h-full w-full ${darkMode ? "dark" : ""}`}>
//             <Header />
//             <main>
//               <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
//                 <Sidebar />
//                 <MovieList />
//               </div>
//             </main>
//           </div>
//         </CartContext.Provider>
//       </ThemeContext.Provider>
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import "./App.css";
import MovieList from "./Component/Cine/MovieList";
import Header from "./Component/Header";
import Sidebar from "./Component/Sidebar";
import { CartContext, ThemeContext } from "./context";

function App() {
  const [shopingCart, setShopingCart] = useState([]);
  const [darkMode, setDarkMode] = useState(true);


 

  return (
    <div className="min-h-screen">
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <CartContext.Provider value={{ shopingCart, setShopingCart }}>
          <div className="min-h-screen w-full">
            <Header />
          
            <main>
              <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                <Sidebar />
                <MovieList />
              </div>
            </main>
          </div>
        </CartContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
