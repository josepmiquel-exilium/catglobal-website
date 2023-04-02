import { useContactContext } from 'hooks/useContactContext';

const ServiceCard = ({ title, description, logo }) => {
    const { sendEmail } = useContactContext();

    return (
        <div className="servicecard flex flex-col gap-12 items-start border-[.5px] border-custom-darkgray border-solid px-8 py-6 justify-between">
            <h2 className="text-xl">{title}</h2>
            <p className="text-sm font-light">{description}</p>
            <button
                className="group relative font-light border-b-2 border-solid border-custom-darkgray pb-2 hover:text-custom-yellow"
                onClick={sendEmail}
            >
                Contact us
                <span className="absolute bottom-[-2.5px] h-[3px] bg-custom-yellow left-0 w-0 group-hover:w-full" />
            </button>
        </div>
    );
};

export default ServiceCard;
