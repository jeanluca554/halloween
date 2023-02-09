import React from 'react';

type NavItemProps = {
    text: string;
    section: string;
    currentSection: string;
}


const NavItem = ({ text, section, currentSection }: NavItemProps) => {
    return (
        <>
            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
            <a
                href={`#${section}`}
                className={`
                    px-3 
                    py-2 
                    rounded-md 
                    font-poppins 
                    font-medium 
                    text-xl 
                    transition
                    duration-100
                    ${currentSection === section
                        ?
                        'text-orange-600 hover:text-orange-400'
                        :
                        'text-gray-800 hover:text-gray-500'
                    }`
                }>
                {text}
            </a>
        </>
    )
}

export default NavItem;