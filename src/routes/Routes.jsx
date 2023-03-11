import { Routes as RouterWrapper, Route } from "react-router-dom";

import Hero from "../pages/Hero";

const Routes = () => {
  return (
    <div>
      <RouterWrapper>
        <Route path="/" element={<Hero />} />
      </RouterWrapper>
    </div>
  );
};

export default Routes;
