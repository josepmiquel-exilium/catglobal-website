import { Route, Routes } from 'react-router-dom';

// Pages
import Home from './pages/Home/Home';
import Layout from './layout/Layout';
import DonationContextProvider from 'contexts/DonationContext';

const App = () => {
    return (
        <DonationContextProvider>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Layout>
        </DonationContextProvider>
    );
};

export default App;
