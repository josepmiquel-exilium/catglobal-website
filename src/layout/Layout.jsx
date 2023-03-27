import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

const Layout = ({ children }) => {
    return (
        <div className="layout bg-custom-black px-4">
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
