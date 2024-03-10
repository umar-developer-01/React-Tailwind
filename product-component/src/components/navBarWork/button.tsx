import React from 'react';

interface ButtonProps {
    isOpen: boolean;
    handleToggle: () => void;
}

const Button: React.FC<ButtonProps> = ({ isOpen, handleToggle }) => {
    return (
        <>
            <button onClick={handleToggle} type="button" className="text-gray-800 hover:text-white focus:text-white block">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 fill-current">
                    {isOpen && <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />}
                    {!isOpen && <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />}
                </svg>
            </button>
        </>
    );
};

export default Button;