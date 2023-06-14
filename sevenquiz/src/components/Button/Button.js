import { render } from '@testing-library/react';
import React from "react";

class Button extends React.Component {
    handleClick = () => {
        alert("Button clicked!");
    };

    render() {
        return (
        <button
            className=" self-center rounded-md border-2 border-purple-600 hover:bg-purple-600 w-1/4 h-10"
            onClick={this.handleClick}>
            Iniciar
        </button>
        );
    }
}

export default Button;