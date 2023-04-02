import { useState } from 'react';
import MyInput from 'shared/MyInput';
import './DonationsForm.scss';
import StripeContext from './StripeContext';
import { useDonationContext } from 'hooks/useDonationContext';

const DonationsForm = () => {
    const [step, setStep] = useState(0);

    const { donation, handleDonation } = useDonationContext();

    const handleSteps = (action) => {
        if (action === 'next') setStep((prevState) => prevState + 1);
        if (action === 'back') setStep((prevState) => prevState - 1);
    };

    const handleOnChange = ({ target }) => {
        handleDonation(target.name, target.value);
    };

    return (
        <div className="donationsform flex flex-col gap-4 w-full mt-4">
            {step === 0 && (
                <div className="donationsform__inputgroup flex flex-col gap-2">
                    <MyInput
                        label="Email"
                        type="email"
                        value={donation.email}
                        onChange={handleOnChange}
                        name="email"
                    />
                    <MyInput
                        label="Quantity €"
                        type="number"
                        value={donation.quantity}
                        onChange={handleOnChange}
                        name="quantity"
                    />
                </div>
            )}

            {step === 1 && <StripeContext />}

            {step > 0 && (
                <button
                    className="border-solid border border-custom-yellow bg-transparent text-custom-yellow px-4 py-2"
                    onClick={() => handleSteps('back')}
                >
                    Back
                </button>
            )}
            <button
                className="bg-custom-yellow text-black px-4 py-2"
                onClick={() => handleSteps('next')}
            >
                Next
            </button>
        </div>
    );
};

export default DonationsForm;
