import React from "react";

type ButtonProps = {
    text: string;
}

const Button = (props: ButtonProps) => {
    return (
        <a
            href="#"
            className="button inline-block bg-white px-6 py-4 rounded-[4rem] text-first-50 font-semibold transition duration-300 hover:bg-first-50 hover:text-white"
        >
            {props.text}
        </a>
    )

}

export default Button;