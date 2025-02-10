import './App.css'
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

const LayoutPages = lazy(() =>
  import("./pages/LayoutPages/LayoutPages").then((module) => ({
    default: module.LayoutPages,
  })),
);
const ReportsPage = lazy(() =>
  import("./pages/Reports/ReportsPage").then((module) => ({
    default: module.ReportsPage,
  })),
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutPages />} >
        <Route path="/reports" element={<ReportsPage />} />
      </Route>
    </Routes>
  );
};