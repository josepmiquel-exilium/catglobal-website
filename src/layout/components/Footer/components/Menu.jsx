import useIsPhone from 'hooks/useIsPhone';
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

const Menu = () => {
    const [showMenu, setShowMenu] = useState(false);
    const isPhone = useIsPhone();
    const liClass = `${isPhone ? 'text-custom-black' : 'text-white'} hover:text-custom-yellow`;

    return (
        <div className="menu">
            <AiOutlineMenu
                className={`absolute top-4 right-0 text-3xl z-[999] ${
                    showMenu && 'text-custom-black'
                }`}
                onClick={() => setShowMenu(!showMenu)}
            />
            {showMenu && (
                <ul className="flex flex-col gap-8 absolute bg-white h-[100vh] top-0 -right-4 px-8 py-24 w-[80%] z-[998]">
                    <li className={liClass}>What is Catglobal</li>
                    <li className="hover:text-custom-yellow">Services</li>
                    <li className="hover:text-custom-yellow">Help us</li>
                    <li className="hover:text-custom-yellow">Contact</li>
                </ul>
            )}
        </div>
    );
};

export default Menu;
