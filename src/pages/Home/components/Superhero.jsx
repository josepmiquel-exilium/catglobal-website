import { useContactContext } from 'hooks/useContactContext';
import scrollToElement from 'utils/scrollToElement';
import MyParticles from './MyParticles';

const SuperHero = () => {
    const { sendEmail } = useContactContext();

    return (
        <div className="superhero flex flex-col gap-12 md:grid md:grid-cols-2 md:gap-20">
            <div className="superhero__col flex flex-col gap-8 md:gap-16">
                <div className="superhero__header flex flex-col gap-2">
                    <h2 className="font-[400] text-sm">WHAT IS CATGLOBAL?</h2>
                    <h3 className="font-bold text-5xl">Building bridges with digital solutions</h3>
                </div>
                <div className="superhero__body flex flex-col gap-8 md:border-l md:border-solid md:border-white md:pl-12 md:gap-12">
                    <div className="superhero__description flex flex-col gap-4">
                        <p className="font-light">
                            Welcome to <span className="font-bold text-xl">CATGLOBAL</span>,<br />
                            where tech meets culture, civil rights, and social minorities. We are a
                            team of passionate designers and developers committed to creating
                            innovative and impactful projects that empower diverse communities and
                            advance social justice.
                        </p>

                        <p className="font-light">
                            Our mission is to use technology as a tool for positive change, by
                            bridging the gap between cutting-edge digital solutions and the pressing
                            issues of our time. Whether it's developing apps, websites, or digital
                            campaigns, we approach every project with a human-centered mindset,
                            striving to create meaningful and inclusive experiences for our users.
                        </p>
                    </div>
                    <div className="superhero__actions flex gap-4">
                        <button
                            className="bg-custom-yellow py-2 px-4 text-custom-black font-bold hover:bg-white hover:text-custom-black"
                            onClick={() => scrollToElement('donations')}
                        >
                            Donate
                        </button>
                        <button
                            className="border border-solid border-white py-2 px-4 font-bold hover:border-custom-yellow hover:text-custom-yellow"
                            onClick={sendEmail}
                        >
                            Contact
                        </button>
                    </div>
                </div>
            </div>

            <div className="superhero__col">
                <MyParticles />
            </div>
        </div>
    );
};

export default SuperHero;
