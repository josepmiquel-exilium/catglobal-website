import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import StripeElements from './StripeElements';

const STRIPE_PK_KEY_TEST = process.env.REACT_APP_STRIPE_PK_KEY_TEST;

const stripePromise = loadStripe(STRIPE_PK_KEY_TEST, { locale: 'auto' });

const StripeContext = () => {
    return (
        <Elements stripe={stripePromise}>
            <StripeElements />
        </Elements>
    );
};

export default StripeContext;
