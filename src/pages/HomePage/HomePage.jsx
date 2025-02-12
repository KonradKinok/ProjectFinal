import icon from "../../assets/svgs-sprite.svg";
import css from "./HomePage.module.css"

const HomePage = () => {
  return (
    <div className={css["home-container"]}>
      <h2>Home</h2>
      <div>
        <h3>Incomes</h3>
        <div>
          <svg width="24" height="24">
            <use href={`${icon}#icon-icon-additional-income`}></use>
          </svg>
        </div>

      </div>
      <div>
        <h3>Expenses</h3>
        <div>
          <svg width="24" height="24">
            <use href={`${icon}#icon-icon-alcohol`}></use>
          </svg>
          <svg width="24" height="24">
            <use href={`${icon}#icon-icon-communal`}></use>
          </svg>
          <svg width="24" height="24">
            <use href={`${icon}#icon-icon-education`}></use>
          </svg>
          <svg width="24" height="24">
            <use href={`${icon}#icon-icon-entertainment`}></use>
          </svg>
          <svg width="24" height="24">
            <use href={`${icon}#icon-icon-health`}></use>
          </svg>
          <svg width="24" height="24">
            <use href={`${icon}#icon-icon-housing`}></use>
          </svg>
          <svg width="24" height="24">
            <use href={`${icon}#icon-icon-other`}></use>
          </svg>
          <svg width="24" height="24">
            <use href={`${icon}#icon-icon-products`}></use>
          </svg>
          <svg width="24" height="24">
            <use href={`${icon}#icon-icon-salary`}></use>
          </svg>
          <svg width="24" height="24">
            <use href={`${icon}#icon-icon-sport`}></use>
          </svg>
          <svg width="24" height="24">
            <use href={`${icon}#icon-icon-technique`}></use>
          </svg>
          <svg width="24" height="24">
            <use href={`${icon}#icon-icon-transport`}></use>
          </svg>
        </div>
      </div>
      <div>
        <h3>Other</h3>
        <div className={css["child-container"]}>
          <svg width="24" height="24">
            <use href={`${icon}#icon-back-arrow`}></use>
          </svg>
          <svg width="24" height="24">
            <use href={`${icon}#icon-bar_chart`}></use>
          </svg>
          <svg width="24" height="24">
            <use href={`${icon}#icon-bin`}></use>
          </svg>
          <svg width="24" height="24">
            <use href={`${icon}#icon-calculator`}></use>
          </svg>
          <svg width="24" height="24">
            <use href={`${icon}#icon-close`}></use>
          </svg>
          <svg width="24" height="24">
            <use href={`${icon}#icon-down-arrow`}></use>
          </svg>
          <svg width="24" height="24">
            <use href={`${icon}#icon-calendar`}></use>
          </svg>
          <svg width="24" height="24">
            <use href={`${icon}#icon-google-symbol-1`}></use>
          </svg>

          <svg width="24" height="24">
            <use href={`${icon}#icon-logo`}></use>
          </svg>
          <svg width="24" height="24">
            <use href={`${icon}#icon-logout-1`}></use>
          </svg>
          <svg width="24" height="24">
            <use href={`${icon}#icon-next`}></use>
          </svg>
          <svg width="24" height="24">
            <use href={`${icon}#icon-previous`}></use>
          </svg>
          <svg width="24" height="24">
            <use href={`${icon}#icon-title`}></use>
          </svg>
          <svg width="24" height="24">
            <use href={`${icon}#icon-two-kapustas`}></use>
          </svg>
          <svg width="24" height="24">
            <use href={`${icon}#icon-upper-kapustas`}></use>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HomePage