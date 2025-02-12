import scss from "./ReportsExpensesIncomeIcons.module.scss";

export const ReportsExpensesIncomeIcons = () => {
    return (
        <div className={scss["reports-expenses-income-row-main-container"]}>
            <div className={scss["reports-expenses-income-row-container"]}>
                <p className={scss[""]}>Expenses:</p>
                <p className={scss["reports-expenses-value"]}>
                    - 18 000.00 $
                </p>
            </div>
            <svg className={scss["reports-expenses-income-row-hr"]} width="2" height="36" viewBox="0 0 2 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 0V36" stroke="#E0E5EB" strokeWidth="2" />
            </svg>
            <div className={scss["reports-expenses-income-row-container"]}>
                <p className={scss[""]}>Income:</p>
                <p className={scss["reports-income-value"]}>
                    + 45 000.00 $
                </p>
            </div>
        </div>
    );
};
