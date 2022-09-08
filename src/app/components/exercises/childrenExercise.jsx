import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <ComponentList>
                <Component />
                <Component />
                <Component />
            </ComponentList>
        </CollapseWrapper>
    );
};

const ComponentList = ({ children }) => {
    // React.Children.toArray (в любом случае вернет array)
    return React.Children.toArray(children).map((child, index) => {
        const config = {
            ...child.props,
            orderNum: ++index
        };

        return React.cloneElement(child, config);
    });

    // React.Children.map (если undefined или null, вернёт undefined или null)
    // if (!children) return null;

    // return React.Children.map(children, (child, index) => {
    //     const config = {
    //         ...child.props,
    //         orderNum: ++index
    //     };

    //     return React.cloneElement(child, config);
    // });
};

ComponentList.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ])
};

const Component = ({ orderNum }) => {
    return <div>{orderNum}-й Компонент списка</div>;
};

Component.propTypes = {
    orderNum: PropTypes.number
};

export default ChildrenExercise;
