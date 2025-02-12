import css from "./ExpensesDetailedReport.module.css";

export const ExpensesDetailedReport = () => {





  return (
    <div className={css["reports-calendar-month-container"]}>
      <p className={css["reports-calendar-month-text"]}>Current period:</p>
      <div className={css["reports-calendar-month-date-container"]}>
        {/* <img
          className={css["reports-calendar-month-arrow"]}
          src={vectorLeft}
          alt="left-arrow"
          onClick={handlePrevMonth}
        />
        <p className={css["reports-calendar-month-name"]}>{formattedDate}</p>
        <img
          className={`${css["reports-calendar-month-arrow"]} ${css["reports-calendar-month-right-arrow"]}`}
          src={vectorLeft}
          alt="right-arrow"
          onClick={handleNextMonth}
        /> */}
      </div>
    </div>
  );
};
