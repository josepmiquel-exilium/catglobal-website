import { Elements } from '@stripe/react-stripe-js';
import {
    useStripe,
    useElements,
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement,
} from '@stripe/react-stripe-js';
import StripeGroup from './StripeGroup';

const elementStyle = {
    base: {
        width: '300px',
        color: '#ffffff',
        fontSize: '1.25rem',
        fontFamily: '',
        ':focus': {
            '::placeholder': {
                color: '#fca311',
            },
        },
    },
    input: {
        padding: '1rem',
    },
};

const StripeElements = () => {
    const stripe = useStripe();
    const elements = useElements();

    return (
        <div className="stripeelements flex flex-col gap-4">
            <StripeGroup label={'Creditcard number'}>
                <CardNumberElement
                    className="stripeelements__element"
                    options={{
                        placeholder: 'Credit number',
                        style: elementStyle,
                    }}
                />
            </StripeGroup>

            <StripeGroup label={'Expiration date'}>
                <CardExpiryElement
                    className="stripeelements__element"
                    options={{
                        placeholder: 'Expiration date',
                        style: elementStyle,
                    }}
                />
            </StripeGroup>

            <StripeGroup label={'CVC number'}>
                <CardCvcElement
                    className="stripeelements__element"
                    options={{ placeholder: 'CVC', style: elementStyle }}
                />
            </StripeGroup>
        </div>
    );
};

export default StripeElements;
