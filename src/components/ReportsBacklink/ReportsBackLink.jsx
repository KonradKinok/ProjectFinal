import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import leftArrow from "../../assets/images/keyboard_backspace-24px1.svg";
import leftArrow1 from "../../../public/symbol-defs.svg";
import scss from "./ReportsBackLink.module.scss";

export const ReportsBackLink = ({ children }) => {
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/";

    return (
        <Link className={scss["link"]} to={backLinkHref}>
            <img src={leftArrow} alt="libraryIcon" />
            {children}
        </Link>
    );
};

ReportsBackLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};