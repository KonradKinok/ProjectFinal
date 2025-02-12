import scss from "./ImportedMiddleMenu.module.scss";

export const ImportedMiddleMenu = () => {
    return (
        <div className={scss["imported-middle-menu-container"]}>
            <p>Balance</p>
            <p>55 0000.00 $</p>
            <p>Confirm</p>
        </div>
    );
};

