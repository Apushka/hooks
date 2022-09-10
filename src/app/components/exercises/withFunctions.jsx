import React from "react";
import Card from "../common/Card";

const withFunctions = (Component) => (props) => {
    const isAuth = !!localStorage.getItem("auth");

    const onLogin = () => {
        localStorage.setItem("auth", "token");
    };

    const onLogOut = () => {
        localStorage.removeItem("auth");
    };

    return (
        <Card>
            <Component {...{ ...props, isAuth, onLogin, onLogOut }} />
        </Card>
    );
};

export default withFunctions;
