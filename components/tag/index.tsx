import React from 'react';

interface iTag {
    label: string
    color: string
}
const Tag: React.FC<iTag> = ({ label, color }) => {
    return (
        <span className={`inline-flex bg-${color}-600 text-white rounded-full h-6 px-3 justify-center items-center mx-1`}>{label}</span>
    );
}

export default Tag;