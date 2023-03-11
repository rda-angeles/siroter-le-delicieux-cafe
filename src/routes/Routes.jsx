import { Routes as RouterWrapper, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Hero from "../pages/Hero";
import Working404 from "../pages/Working404";

const Routes = () => {
  const location = useLocation();

  return (
    <div>
      <AnimatePresence initial={false} mode={"wait"}>
        <RouterWrapper location={location} key={location.pathname}>
          <Route path="/" element={<Hero />} />
          <Route path="*" element={<Working404 />} />
        </RouterWrapper>
      </AnimatePresence>
    </div>
  );
};

export default Routes;
