const scrollToElement = (section) => {
    document.querySelector(`#${section}`).scrollIntoView({ behavior: 'smooth' });
};

export default scrollToElement;
