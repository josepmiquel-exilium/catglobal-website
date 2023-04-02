import { createContext } from 'react';

const email = process.env.REACT_APP_EMAIL_CONTACT;

export const ContactContext = createContext();

const ContactContextProvider = ({ children }) => {
    const sendEmail = () => {
        const subject = 'Regarding your website';
        const body = 'Dear CATGLOBAL team, ...';
        const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

        window.open(mailtoLink, '_blank');
    };

    return (
        <ContactContext.Provider
            value={{
                sendEmail,
            }}
        >
            {children}
        </ContactContext.Provider>
    );
};

export default ContactContextProvider;
