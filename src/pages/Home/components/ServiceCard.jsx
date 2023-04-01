const ServiceCard = ({ title, description, logo }) => {
    return (
        <div className="servicecard flex flex-col gap-12 items-start border-[.5px] border-custom-darkgray border-solid px-8 py-6 justify-between">
            <h2 className="text-xl">{title}</h2>
            <p className="text-sm font-light">{description}</p>
            <button className="font-light border-b-2 border-solid border-custom-darkgray pb-2">
                Contact us
            </button>
        </div>
    );
};

export default ServiceCard;
