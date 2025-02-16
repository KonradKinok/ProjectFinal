import { useState, useEffect } from "react";
import { MainPageButton } from "../../components/MainPageButton/MainPageButton";
import { ImportedMiddleMenu } from "../../components/ImportedMiddleMenu/ImportedMiddleMenu";
import { CurrentPeriodButton } from "../../components/CurrentPeriodButton/CurrentPeriodButton";
import { IncomeExpensesComparison } from "../../components/IncomeExpensesComparison/IncomeExpensesComparison";
import { ExpensesDetailedReport } from "../../components/ExpensesDetailedReport/ExpensesDetailedReport";
import css from "./ReportIncomePage.module.css";

const ReportIncomePage = () => {
  const [date, setDate] = useState(new Date());
  const [expenses, setExpenses] = useState(0);
  const [income, setIncome] = useState(0);

  useEffect(() => {

    const fetchTransactionData = async () => {
      try {

        const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;

        // const response = await fetch(`http://localhost:3001/transaction/period-data?date=${formattedDate}`, {
        const response = await fetch(`http://localhost:3001/transaction?date=${formattedDate}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer `,
          },
        });

        if (response.ok) {
          const data = await response.json();
          const transaction = data[0]; //to delete
          console.log({ data })
          setExpenses(transaction.expenses.total || 0);
          setIncome(transaction.incomes.total || 0);
        }
        else {
          const errorData = await response.json();
          console.error(errorData.message);
          setExpenses(0);
          setIncome(0);
        }

      } catch (error) {
        console.error("Error fetching transaction data:", error);
        setExpenses(0);
        setIncome(0);
      }
    };

    fetchTransactionData();
  }, [date]);


  return (
    <div className={css["reports-page-main-container"]}>

      <div className={css["reports-page-first-container"]}>
        <MainPageButton />
        <ImportedMiddleMenu />
        <CurrentPeriodButton date={date} setDate={setDate} />
      </div>

      <div className={css["reports-page-second-container"]}>
        <IncomeExpensesComparison expenses={expenses} income={income} />
      </div>
      <div>
        <ExpensesDetailedReport />
      </div>
      <div>Expenses Wykres/ Income Wykres</div>
    </div>
  );
};

export default ReportIncomePage;