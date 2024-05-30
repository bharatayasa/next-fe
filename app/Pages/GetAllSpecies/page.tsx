'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';
import ViewUserButton from './ViewUserButton';
import AddSpeciesForm from '../../Components/AddData/AddSpeciesForm';

const baseUrl = "https://test.api.sahabatlautlestari.com/species/all";

interface Iposts {
    id: string;
    faoCode: string; 
    typeOfFish: string; 
    scientificName: string; 
    englishName: string; 
    indonesianName: string; 
    localName: string; 
    typeOfWater: string; 
    imageUrl: string; 
    statusInIndonesia: string; 
    fishUtilization: string;
}

const GetAllSpecies: React.FC = () => {
    const [posts, setPosts] = useState<Iposts[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(baseUrl);
                const data: Iposts[] = response.data;
                setPosts(data);
            } catch (error) {
                console.error("Error fetching data: ", error);
                setError("Failed to load data.");
            }
        };
        fetchPosts();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="overflow-x-auto flex justify-center items-center">
            <div className='container'>
                <AddSpeciesForm />
                <table className="table">
                    <thead>
                        <tr>
                            <th>FaoCode</th>
                            <th>TypeOfFish</th>
                            <th>ScientificName</th>
                            <th>EnglishName</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post) => (
                            <tr key={post.id} className="hover">
                                <th>{post.faoCode}</th>
                                <td>{post.typeOfFish}</td>
                                <td>{post.scientificName}</td>
                                <td>{post.englishName}</td>
                                <td>
                                    <ViewUserButton id={post.id} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default GetAllSpecies;
