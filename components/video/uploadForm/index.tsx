import React, { useState } from 'react';
import Card from '../../card';
import Textfield from '../../forms/input';
import Select from '../../forms/select';
import Tag from '../../tag'
import Preview from '../preview'

const categories = [
    { id: 'javascript', label: 'javascript' },
    { id: 'react', label: 'react' },
    { id: 'nodejs', label: 'nodejs' },
    { id: 'vuejs', label: 'vuejs' },
    { id: 'aws', label: 'aws' }
];

const selectedTags = [
    { id: 'javascript', label: 'javascript' },
    { id: 'react', label: 'react' }
];

const FormContainer: React.FC = ({ children }) => {
    return (
        <div className="w-4/5 m-auto">
            {children}
        </div>
    );
};

const TagsContainer: React.FC = ({ children }) => {
    return (
        <div className="flex">
            {children}
        </div>
    );
};

const VideoUploadForm: React.FC = () => {
    return (
        <Card color="gray">
            <FormContainer>
                <Textfield placeholder="Paste URL" />

                <Preview url="https://dummyimage.com/640x360/fff/aaa" />

                <Textfield placeholder="Name" />
                <Select options={categories} defaultItem="javascript"/>

                <TagsContainer>
                    {selectedTags && selectedTags.map(tag => <Tag label={tag.label} key={tag.id} color="gray"/>)}
                </TagsContainer>
            </FormContainer>
        </Card>
    );
};

export default VideoUploadForm;