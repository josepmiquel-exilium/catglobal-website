import { useContactContext } from 'hooks/useContactContext';
import { useMemo } from 'react';

const Footer = () => {
    const { sendEmail } = useContactContext();
    const year = useMemo(() => new Date().getFullYear(), []);

    return (
        <footer>
            <div className="footer bg-custom-black py-12 flex gap-4 justify-between">
                <div className="">
                    <h2
                        className="hover:text-custom-yellow hover:cursor-pointer"
                        onClick={sendEmail}
                    >
                        info@catglobal.be
                    </h2>
                </div>

                <div className="">
                    <h2>All rights reserved</h2>
                    <h2>Catglobal © {year}</h2>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
