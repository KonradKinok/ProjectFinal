import './App.css'
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

const LayoutPages = lazy(() =>
  import("./pages/LayoutPages/LayoutPages").then((module) => ({
    default: module.LayoutPages,
  })),
);
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ReportExpensesPage = lazy(() => import('./pages/ReportExpensesPage/ReportExpensesPage'));
const ReportIncomePage = lazy(() => import('./pages/ReportIncomePage/ReportIncomePage'));
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutPages />} >
        <Route index element={<HomePage />} />
        <Route path='/transaction/expense-categories' element={<ReportExpensesPage />} />
        <Route path='/transaction/income-categories' element={<ReportIncomePage />} />
      </Route>
    </Routes>
  );
};