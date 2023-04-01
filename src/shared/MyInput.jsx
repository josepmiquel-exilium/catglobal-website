import { useEffect, useRef } from 'react';
import './MyInput.scss';

const MyInput = ({ value, label, onChange, type, name }) => {
    const inputRef = useRef(null);

    useEffect(() => {
        if (value !== '') handleClass('add');
    });

    const handleClass = (action) => {
        const element = inputRef.current;

        if (action === 'add') element.classList.add('myinput__input-filled');
        if (action === 'remove' && value === '') element.classList.remove('myinput__input-filled');
        return;
    };

    return (
        <div className="myinput">
            <input
                className="myinput__input"
                name={name}
                onChange={onChange}
                ref={inputRef}
                required={true}
                type={type}
                value={value}
                onFocus={() => handleClass('add')}
                onBlur={() => handleClass('remove')}
            />
            <label className="myinput__label">{label}</label>
            <span className="myinput__highlight"></span>
        </div>
    );
};

export default MyInput;
