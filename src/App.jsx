import './App.css'
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

const LayoutPages = lazy(() =>
  import("./pages/LayoutPages/LayoutPages").then((module) => ({
    default: module.LayoutPages,
  })),
);
const ReportExpensesPage = lazy(() => import('./pages/ReportExpensesPage/ReportExpensesPage'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutPages />} >
        <Route index element={<HomePage />} />
        <Route path="/transaction/" element={<ReportExpensesPage />} />
      </Route>
    </Routes>
  );
};