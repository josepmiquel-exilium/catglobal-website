import { createContext, useState } from 'react';

export const DonationContext = createContext();

const DonationContextProvider = ({ children }) => {
    const [donation, setDonation] = useState({
        // name: '',
        email: '',
        type: 'recurrent',
        period: 'mensual',
        quantity: '',
        processing: false,
        done: false,
        error: false,
        description: 'Catglobal',
    });

    const handleDonation = (key, value) => {
        setDonation((prevState) => ({ ...prevState, [key]: value }));
    };

    return (
        <DonationContext.Provider
            value={{
                donation,
                handleDonation,
            }}
        >
            {children}
        </DonationContext.Provider>
    );
};

export default DonationContextProvider;
