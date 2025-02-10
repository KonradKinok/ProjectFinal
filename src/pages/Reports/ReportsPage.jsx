import scss from "./ReportsPage.module.scss";
import { useParams, useLocation, Outlet, NavLink } from "react-router-dom";
import { ReportsBackLink } from "../../components/ReportsBacklink/ReportsBackLink";
export const ReportsPage = () => {
  const location = useLocation();
  // const backLinkHref = location.state?.from ?? "/";
  const backLinkHref = location.state?.from;
  console.log(location);
  return (
    <div className={scss["container-page-reports"]}>
      <div>
        <div>
          <ReportsBackLink />

        </div>
      </div>
      <div>Expenses / Income</div>
      <div>Expenses Icons/ Income Icons</div>
      <div>Expenses Wykres/ Income Wykres</div>
    </div>
  );
}; 