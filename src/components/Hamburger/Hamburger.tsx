import React, { useState } from 'react';
import { HamburgerMenuContainer, HamburgerMenuItem, HamburgerMenu, HamburgerButton} from './Hamburger.styled';

type MenuItem = {
    name: string;
    clickHandler: () => void;
};

export interface HamburgerInterface {
    icon: React.ReactNode;
    menuItems: Array<MenuItem>;
}

const Hamburger: React.FC<HamburgerInterface> = ({
    icon,
    menuItems
})=> {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <HamburgerMenu>
            <HamburgerButton className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu} data-testid='hamburgerButton'>
                {icon}
            </HamburgerButton>
            {isOpen && (
                <HamburgerMenuContainer>
                    {menuItems.map((item, index) => (
                        <HamburgerMenuItem  key={index} onClick={item.clickHandler}>
                            {item.name}
                        </HamburgerMenuItem>
                        
                    ))}
                </HamburgerMenuContainer>
            )}
        </HamburgerMenu>
    );
};

export default Hamburger;