import { useState } from 'react';
import { AiOutlineMenu, AiOutlineCloseCircle } from 'react-icons/ai';

const Menu = () => {
    const [showMenu, setShowMenu] = useState(false);
    const liClass = `text-2xl uppercase text-white hover:text-custom-yellow md:text-4xl`;
    const toogleButtonClass = `transition-all duration-300 absolute top-4 right-0 text-3xl z-[999] hover:text-custom-yellow`;

    return (
        <div className="menu">
            {!showMenu ? (
                <AiOutlineMenu
                    className={toogleButtonClass}
                    onClick={() => setShowMenu(!showMenu)}
                />
            ) : (
                <AiOutlineCloseCircle
                    className={toogleButtonClass}
                    onClick={() => setShowMenu(!showMenu)}
                />
            )}
            {showMenu && (
                <ul
                    className={`flex flex-col gap-8 absolute bg-black h-[100vh] top-0 left-0 px-8 py-24 w-[100vw] z-[998] items-center justify-center transition-all duration-300`}
                >
                    <li className={liClass}>What is Catglobal</li>
                    <li className={liClass}>Services</li>
                    <li className={liClass}>Help us</li>
                    <li className={liClass}>Contact</li>
                </ul>
            )}
        </div>
    );
};

export default Menu;
