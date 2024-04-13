import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardDraw from "./card-draw/CardDraw";

import Layout from "./Layout";

export default function RootRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<App />} /> */}
        <Route element={<Layout />}>
          <Route path="/" element={<CardDraw />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
