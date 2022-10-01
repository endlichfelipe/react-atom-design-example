import React from 'react';
import { Routes, Route } from "react-router-dom";
import Index from "./pages/main-page";

export default function ApplicationRoutes() {
  return (
    <Routes>
      <Route element={<Index />} path='/'/>
    </Routes>
  );
}
