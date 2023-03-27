import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

const Layout = ({ children }) => {
    return (
        <div className="layout bg-custom-black px-4 md:px-12 lg:px-24">
            <Header />
            <div className="layout__body py-12">{children}</div>
            <Footer />
        </div>
    );
};

export default Layout;
