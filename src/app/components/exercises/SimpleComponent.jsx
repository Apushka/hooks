import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ isAuth, onLogin, onLogOut }) => {
    return (
        <button
            className="btn btn-primary"
            onClick={isAuth ? onLogOut : onLogin}
        >
            {isAuth ? "Выйти из системы" : "Войти"}
        </button>
    );
};

SimpleComponent.propTypes = {
    isAuth: PropTypes.bool,
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func
};

export default SimpleComponent;
