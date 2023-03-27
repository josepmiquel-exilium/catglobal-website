import { Route, Routes } from 'react-router-dom';

// Pages
import Home from './pages/Home/Home';
import Layout from './layout/Layout';

const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Layout>
    );
};

export default App;
