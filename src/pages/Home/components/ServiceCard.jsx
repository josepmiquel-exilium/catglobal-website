const ServiceCard = ({ title, description, logo }) => {
    return (
        <div className="servicecard flex flex-col gap-12 items-start border-[.5px] border-[#505050] border-solid px-8 py-6">
            <h2 className="text-xl">{title}</h2>
            <p className="text-sm font-light">{description}</p>
            <button className="font-light border-b-2 border-solid border-[#505050] pb-2">
                Contact us
            </button>
        </div>
    );
};

export default ServiceCard;
