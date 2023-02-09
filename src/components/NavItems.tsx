import React from "react";

type NavItemsProps = {
    currentSection: string;
    section: string;
    setIsOpen: (isOpen: boolean) => void;
    text: string;
}

const NavItems = ({ currentSection, setIsOpen, text, section }: NavItemsProps) => {
    return (
        <li className='nav__item' onClick={() => setIsOpen(false)} >
            <a href={`#${section}`} className={`nav__link font-second ${currentSection === section ? 'text-first-50' : 'text-white'} transition hover:text-first-50`}>
                {text}
            </a>
        </li>
    )
}

export default NavItems;