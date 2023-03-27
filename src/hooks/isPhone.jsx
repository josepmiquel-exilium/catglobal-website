const { useMediaQuery } = require('react-responsive');

const useIsPhone = () => {
    const isPhone = useMediaQuery({ query: '(max-width: 576px)' });

    return isPhone;
};

export default useIsPhone;
