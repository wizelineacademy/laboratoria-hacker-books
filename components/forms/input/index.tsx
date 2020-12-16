import React from 'react';

interface iTextfield {
    placeholder: string
    withIcon?: boolean
    iconPosition?: 'left' | 'right'
}

const Textfield: React.FC<iTextfield> = ({ placeholder, withIcon, iconPosition }) => {
    return (
       <input type="text"
        placeholder={placeholder}
        className="border-2 border-gray-200 p-1 rounded-lg w-full my-1"
       />
    );
};

export default Textfield;