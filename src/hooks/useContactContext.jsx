import { useContext } from 'react';
import { ContactContext } from 'contexts/ContactContext';

export const useContactContext = () => {
    return useContext(ContactContext);
};
