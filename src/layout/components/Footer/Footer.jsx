import { useMemo } from 'react';

const Footer = () => {
    const year = useMemo(() => new Date().getFullYear(), []);
    return (
        <footer>
            <div className="footer bg-custom-black py-12 flex flex-col gap-2">
                <h2>All rights reserved</h2>
                <h2>Catglobal © {year}</h2>
            </div>
        </footer>
    );
};

export default Footer;
