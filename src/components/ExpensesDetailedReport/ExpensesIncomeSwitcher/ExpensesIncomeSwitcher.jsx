import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import icon from "../../../assets/svgs-sprite.svg";
import css from "./ExpensesIncomeSwitcher.module.css";

const TRANSACTION = Object.freeze({
  EXPENSES: "Expences",
  INCOME: "Income",
});

const ROUTES = Object.freeze({
  EXPENSES: "expense-categories",
  INCOME: "income-categories",
});

export const ExpensesIncomeSwitcher = () => {
  const location = useLocation();
  const lastSegmentPageUrl = location.pathname.split("/").filter(Boolean).pop();
  const [expensesIncomeText, setExpensesIncomeText] = useState(
    lastSegmentPageUrl === ROUTES.EXPENSES
      ? TRANSACTION.EXPENSES
      : TRANSACTION.INCOME
  );
  const navigate = useNavigate();

  useEffect(() => {
    setExpensesIncomeText(
      lastSegmentPageUrl === ROUTES.EXPENSES
        ? TRANSACTION.EXPENSES
        : TRANSACTION.INCOME
    );
  }, [lastSegmentPageUrl]);

  const toggleTransactionType = () => {
    const isExpenses = expensesIncomeText === TRANSACTION.EXPENSES;
    const newText = isExpenses ? TRANSACTION.INCOME : TRANSACTION.EXPENSES;
    const newRoute = isExpenses ? ROUTES.INCOME : ROUTES.EXPENSES;

    setExpensesIncomeText(newText);
    navigate(`/transaction/${newRoute}`);
  };

  return (
    <div className={css["reports-expenses-income-switcher-main-container"]}>
      <svg
        className={css["reports-expenses-income-switcher-arrow"]}
        width="7"
        height="12"
        onClick={toggleTransactionType}>
        <use href={`${icon}#icon-previous`}></use>
      </svg>
      <p className={css["reports-expenses-income-switcher-name"]}>
        {expensesIncomeText}
      </p>
      <svg
        className={css["reports-expenses-income-switcher-arrow"]}
        width="7"
        height="12"
        onClick={toggleTransactionType}>
        <use href={`${icon}#icon-next`}></use>
      </svg>
    </div>
  );
};

//PropTypes from ReportPage
ExpensesIncomeSwitcher.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  setDate: PropTypes.func.isRequired,
};
