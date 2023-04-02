import Logo from 'assets/images/logo-bg-white.png';
import Menu from '../Footer/components/Menu';

const Header = () => {
    return (
        <header>
            <div className="header bg-custom-black py-4 gap-12 flex justify-between relative">
                <div className="header__col flex items-center justify-start">
                    <img
                        src={Logo}
                        alt="Catglobal icon"
                        className="w-[75px] h-[75px] min-h-[75px] min-w-[75px]"
                    />
                </div>
                <div className="header__col flex items-center justify-center">
                    <Menu />
                </div>
                <div className="header__col flex items-center justify-end">
                    <button className="absolute top-16 right-0 text-white hover:text-custom-yellow">
                        Donate
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
