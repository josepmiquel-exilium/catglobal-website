import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

const Menu = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className="menu">
            <AiOutlineMenu
                className="absolute top-4 right-0 text-3xl z-[999]"
                onClick={() => setShowMenu(!showMenu)}
            />
            {showMenu && (
                <ul className="flex flex-col gap-8 absolute bg-custom-black h-[100vh] top-0 -right-4 px-8 py-24 w-[80%] z-[998]">
                    <li className="hover:text-custom-yellow">What is Catglobal</li>
                    <li className="hover:text-custom-yellow">Technologies</li>
                    <li className="hover:text-custom-yellow">Help us</li>
                    <li className="hover:text-custom-yellow">Contact</li>
                </ul>
            )}
        </div>
    );
};

export default Menu;
