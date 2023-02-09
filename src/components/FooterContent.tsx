import React from "react";

type FooterContentProps = {
    title: string;
    link1: string;
    link2: string;
    link3: string;
}

const FooterContent = (props: FooterContentProps) => {
    return (
        <div>
            <h3 className="footer__title text-sm font-semibold mb-6">{props.title}</h3>

            <ul className="footer__links grid gap-y-3 lg:text-base">
                <li>
                    <a href="#" className="footer__link text-text-50 text-xs transition duration-300 hover:text-first-50">{props.link1}</a>
                </li>
                <li>
                    <a href="#" className="footer__link text-text-50 text-xs transition duration-300 hover:text-first-50">{props.link2}</a>
                </li>
                <li>
                    <a href="#" className="footer__link text-text-50 text-xs transition duration-300 hover:text-first-50">{props.link3}</a>
                </li>
            </ul>
        </div>
    )

}

export default FooterContent;