import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "../../components/Navigation/Navigation";
import scss from "./LayoutPages.module.scss";

export const LayoutPages = () => {
  return (
    <div className={scss["main-container"]}>
      <header className={scss["header"]}>
        <Navigation />
        <h1>Home</h1>
      </header>
      <main className={scss["main"]}>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
