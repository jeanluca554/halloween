import { Disclosure } from '@headlessui/react';
import React from 'react';

type MenuItemProps = {
    text: string;
    section: string;
    currentSection: string;
}


const MenuItem = ({ text, section, currentSection }: MenuItemProps) => {
    return (
        <Disclosure.Button>
            <a
                href={`#${section}`}
                className={`
                    px-3 
                    py-2 
                    rounded-md 
                    block
                    text-base
                    text-left
                    transition
                    duration-700
                    ${currentSection === section
                        ?
                        'bg-gray-900 text-white font-medium '
                        :
                        'text-gray-500 hover:bg-gray-700 hover:text-white font-normal'
                    }`
                }>
                {text}
            </a>
        </Disclosure.Button>
    )
}

export default MenuItem;