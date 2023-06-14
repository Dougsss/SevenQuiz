import { render } from '@testing-library/react';
import React from "react";

class Button extends React.Component {
    handleClick = () => {
        alert("Button clicked!");
    };

    render() {
        return (
        <button
            className=" self-center rounded-3xl border-2 border-purple-600 hover:bg-purple-600 w-1/4 sm:h-10 text-xs sm:text-base"
            onClick={this.handleClick}>
            Iniciar
        </button>
        );
    }
}

export default Button;