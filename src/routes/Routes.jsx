import { Routes as RouterWrapper, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Hero from "../pages/Hero";
import Working404 from "../pages/Working404";
import Menu from "../pages/Menu";
import MenuDetails from "../pages/MenuDetails";
import WhoAreWe from "../pages/WhoAreWe";

const Routes = () => {
  const location = useLocation();

  return (
    <div>
      <AnimatePresence initial={false} mode={"wait"}>
        <RouterWrapper location={location} key={location.pathname}>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<WhoAreWe />} />
          <Route path="/menu" element={<Menu />} />
          {/* <Route path="/menu/:id" element={<MenuDetails />} /> */}
          <Route path="*" element={<Working404 />} />
        </RouterWrapper>
      </AnimatePresence>
    </div>
  );
};

export default Routes;
