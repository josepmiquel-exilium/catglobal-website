import { useState } from 'react';
import { useContactContext } from 'hooks/useContactContext';
import { AiOutlineMenu, AiOutlineCloseCircle } from 'react-icons/ai';
import scrollToElement from 'utils/scrollToElement';

const Menu = () => {
    const [showMenu, setShowMenu] = useState(false);
    const { sendEmail } = useContactContext();

    const liClass = `text-2xl uppercase text-white hover:text-custom-yellow md:text-4xl`;
    const toogleButtonClass = `transition-all duration-300 absolute top-4 right-0 text-3xl z-[999] hover:text-custom-yellow hover:cursor-pointer`;

    const navigateTo = (section) => {
        setShowMenu(false);
        scrollToElement(section);
    };

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
                    <li className={liClass} onClick={() => navigateTo('superhero')}>
                        What is Catglobal
                    </li>
                    <li className={liClass} onClick={() => navigateTo('services')}>
                        Services
                    </li>
                    <li className={liClass} onClick={() => navigateTo('donations')}>
                        Help us
                    </li>
                    <li className={liClass} onClick={sendEmail}>
                        Contact
                    </li>
                </ul>
            )}
        </div>
    );
};

export default Menu;
