import Services from './components/Services';
import SuperHero from './components/Superhero';

const Home = () => {
    return (
        <div className="home flex flex-col gap-12 md:gap-20">
            <section>
                <SuperHero />
            </section>

            <section>
                <Services />
            </section>
        </div>
    );
};

export default Home;
