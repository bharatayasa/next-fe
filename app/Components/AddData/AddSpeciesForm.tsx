// components/AddSpeciesForm.js
'use client';
import React, { useState } from 'react';
import axios from 'axios';

const AddSpeciesForm: React.FC = () => {
    const [formData, setFormData] = useState({
        faoCode: '',
        typeOfFish: '',
        scientificName: '',
        englishName: '',
        indonesianName: '',
        localName: '',
        typeOfWater: '',
        imageUrl: '',
        statusInIndonesia: '',
        fishUtilization: ''
    });

    const [message, setMessage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://test.api.sahabatlautlestari.com/species', formData);
            setMessage('Species added successfully!');
            setError(null);
        } catch (error) {
            console.error('Error adding species:', error);
            setError('Failed to add species.');
            setMessage(null);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="faoCode" placeholder="Fao Code" value={formData.faoCode} onChange={handleChange} />
                <input type="text" name="typeOfFish" placeholder="Type Of Fish" value={formData.typeOfFish} onChange={handleChange} />
                <input type="text" name="scientificName" placeholder="Scientific Name" value={formData.scientificName} onChange={handleChange} />
                <input type="text" name="englishName" placeholder="English Name" value={formData.englishName} onChange={handleChange} />
                <input type="text" name="indonesianName" placeholder="Indonesian Name" value={formData.indonesianName} onChange={handleChange} />
                <input type="text" name="localName" placeholder="Local Name" value={formData.localName} onChange={handleChange} />
                <input type="text" name="typeOfWater" placeholder="Type Of Water" value={formData.typeOfWater} onChange={handleChange} />
                <input type="text" name="imageUrl" placeholder="Image URL" value={formData.imageUrl} onChange={handleChange} />
                <input type="text" name="statusInIndonesia" placeholder="Status In Indonesia" value={formData.statusInIndonesia} onChange={handleChange} />
                <input type="text" name="fishUtilization" placeholder="Fish Utilization" value={formData.fishUtilization} onChange={handleChange} />
                <button type="submit">Add Species</button>
            </form>
            {message && <p>{message}</p>}
            {error && <p>{error}</p>}
        </div>
    );
};

export default AddSpeciesForm;
