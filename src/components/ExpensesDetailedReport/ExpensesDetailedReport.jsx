import css from "./ExpensesDetailedReport.module.css";
import { ExpensesIncomeSwitcher } from "./ExpensesIncomeSwitcher/ExpensesIncomeSwitcher";
import { ExpensesIncomeGroupIcons } from "./ExpensesIncomeGroupIcons/ExpensesIncomeGroupIcons";
export const ExpensesDetailedReport = () => {





  return (
    <div className={css["reports-detailed-main-container"]}>
      <ExpensesIncomeSwitcher />
      <div><ExpensesIncomeGroupIcons /></div>
    </div>
  );
};
