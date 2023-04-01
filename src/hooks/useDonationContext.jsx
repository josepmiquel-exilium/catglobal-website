import { useContext } from 'react';
import { DonationContext } from 'contexts/DonationContext';

export const useDonationContext = () => {
    return useContext(DonationContext);
};
