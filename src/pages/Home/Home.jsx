import Donations from './components/Donations';
import Services from './components/Services';
import SuperHero from './components/Superhero';

const Home = () => {
    return (
        <div className="home flex flex-col gap-12 md:gap-20">
            <section id="superhero">
                <SuperHero />
            </section>

            <section id="services">
                <Services />
            </section>

            <section id="donations">
                <Donations />
            </section>
        </div>
    );
};

export default Home;
