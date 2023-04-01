import SectionTitle from 'shared/SectionTitle';
import ServiceCard from './ServiceCard';

const data = [
    {
        title: 'Software Development',
        description:
            'We specialize in developing software solutions that help communities solve complex problems and achieve their goals. From web to mobile applications, our team can turn your vision into a reality. We use the latest technologies to ensure that our software is efficient, scalable, and easy to maintain.',
    },
    {
        title: 'Strategy and Communication',
        description:
            'We offer a range of strategic consulting and communication services to help communities define and achieve their objectives. Our social commitment, combined with our strong communication skills, enables us to create campaigns that engage audiences.',
    },
    {
        title: 'Judicial and Legal Support',
        description:
            'We provide comprehensive legal and judicial support services to help our clients navigate complex legal systems and defend their rights. Our experienced legal professionals specialize in human rights, civil rights, and social justice issues, and can provide expert advice and representation at every stage of the legal process.',
    },
];

const Services = () => {
    return (
        <div className="services ">
            <SectionTitle title={'Our services'} />
            <div className="services__inner md:grid grid-cols-3">
                {data.map((e, key) => (
                    <ServiceCard title={e.title} description={e.description} key={key} />
                ))}
            </div>
        </div>
    );
};

export default Services;
