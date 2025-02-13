import { ExpensesIncomeIcon } from "../ExpensesIncomeIcon/ExpencesIncomeIcon";
import css from "./ExpensesIncomeGroupIcons.module.css";

const dataToGroupIconsExpenses = [
  {
    name: "Products",
    iconName: "icon-icon-products",
    amount: "5000"
  },
  {
    name: "Alcohol",
    iconName: "icon-icon-alcohol",
    amount: "3000"
  },
  {
    name: "Entertainment",
    iconName: "icon-icon-entertainment",
    amount: "2400"
  },
  {
    name: "Health",
    iconName: "icon-icon-health",
    amount: "2200"
  },
  {
    name: "Transport",
    iconName: "icon-icon-transport",
    amount: "2000"
  },
  {
    name: "Housing",
    iconName: "icon-icon-housing",
    amount: "1800"
  },
  {
    name: "Technique",
    iconName: "icon-icon-technique",
    amount: "1500"
  },
  {
    name: "Communal, Communnication",
    iconName: "icon-icon-communal",
    amount: "900"
  },
  {
    name: "Sports, Hobbies",
    iconName: "icon-icon-sport",
    amount: "800"
  },
  {
    name: "Education",
    iconName: "icon-icon-education",
    amount: "800"
  },

  {
    name: "Other",
    iconName: "icon-icon-other",
    amount: "200"
  },
]

export const ExpensesIncomeGroupIcons = () => {

  return (
    <div className={css["reports-group-icons-main-container"]}>
      {dataToGroupIconsExpenses.map(({ name, iconName, amount }) => (
        <ExpensesIncomeIcon key={name} name={name} iconName={iconName} amount={amount} />
      ))}
    </div>
  );
};