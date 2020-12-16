import React from 'react';

interface SelectItem {
    label: string
    id: string
}

interface iSelect {
    options: Array<SelectItem>
    defaultItem: string
}

const Select: React.FC<iSelect> = ({ options, defaultItem }) => {
    return (
        <select className="border-2 border-gray-200 p-1 rounded-lg w-full my-1">
            {options && options.map(item => <option value={item.id} key={item.id}>{item.label}</option>)}
        </select>
    );
}

export default Select;