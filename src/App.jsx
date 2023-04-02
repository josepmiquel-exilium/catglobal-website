import { Route, Routes } from 'react-router-dom';

// Pages
import Home from './pages/Home/Home';
import Layout from './layout/Layout';
import DonationContextProvider from 'contexts/DonationContext';
import ContactContextProvider from 'contexts/ContactContext';

const App = () => {
    return (
        <ContactContextProvider>
            <DonationContextProvider>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </Layout>
            </DonationContextProvider>
        </ContactContextProvider>
    );
};

export default App;
