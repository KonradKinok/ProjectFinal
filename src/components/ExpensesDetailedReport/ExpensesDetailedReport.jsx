import css from "./ExpensesDetailedReport.module.css";
import { ExpensesIncomeSwitcher } from "../ExpensesIncomeSwitcher/ExpensesIncomeSwitcher";
export const ExpensesDetailedReport = () => {





  return (
    <div className={css["reports-detailed-main-container"]}>
      <ExpensesIncomeSwitcher />
      <div>Icons</div>
    </div>
  );
};
