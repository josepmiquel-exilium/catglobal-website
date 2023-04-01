import { useState } from 'react';
import './StripeGroup.scss';

const StripeGroup = ({ label, children }) => {
    const [active, setActive] = useState(false);

    return (
        <div
            className={`stripegroup ${active ? 'stripegroup-active' : ''}`}
            onFocus={() => setActive(true)}
            onBlur={() => setActive(false)}
        >
            {children}
        </div>
    );
};

export default StripeGroup;
