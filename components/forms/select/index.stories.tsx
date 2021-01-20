import React from 'react';
import Select from './index';

export default {
    title: 'Forms'
}

const options = [
    { label: 'Option 1', id: '01' },
    { label: 'Option 2', id: '02' },
    { label: 'Option 3', id: '03' },
    { label: 'Option 4', id: '04' },
    { label: 'Option 5', id: '05' },
];

export const select = () => <Select options={options} defaultItem="01"/>