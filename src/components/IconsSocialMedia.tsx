import React from "react";

type IconsSocialMediaProps = {
    href: string;
    icon: string;
}

const IconsSocialMedia = (props: IconsSocialMediaProps) => {
    return (
        <a href={props.href} target="_blank" className="footer__social-link text-first-50 text-base transition duration-300 hover:text-first-100 hover:-translate-y-1 lg:text-2xl">
            <i className={props.icon}></i>
        </a>
    )

}

export default IconsSocialMedia;