import SectionTitle from 'shared/SectionTitle';
import DonationsForm from './DonationsForm';

const Donations = () => {
    return (
        <div className="donations">
            <SectionTitle title={'Help us'} />

            <div className="donations__inner flex flex-col gap-4">
                <p>
                    Your donation will enable us to continue developing innovative projects that
                    empower diverse communities and advance social justice. With your support, we
                    can expand our reach and make a bigger impact on the world.
                </p>

                <p>
                    We believe that technology can be a powerful tool for positive change, but we
                    cannot do it alone. Your donation, no matter how small, will make a difference
                    and help us to create a better future for all.
                </p>

                <DonationsForm />
            </div>
        </div>
    );
};

export default Donations;
