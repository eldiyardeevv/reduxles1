import React from "react";
import { Route, Routes } from "react-router-dom";
let PETH = [
  { link: "/", id: 1 },
  { link: "/", id: 2 },
  { link: "/", id: 3 },
];
const MainRoutes = () => {
  return (
    <>
      <Routes>
        {PETH.map((el) => (
          <Route path={el.link} element={el.element} key={el.id} />
        ))}
      </Routes>
    </>
  );
};

export default MainRoutes;
