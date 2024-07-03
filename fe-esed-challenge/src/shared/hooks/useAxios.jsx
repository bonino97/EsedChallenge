import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxios = (url) => {
    console.log('useAxios');
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(url);
                if (!data) throw new Error('An error occurred while fetching data');
                setData(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, error, loading };
};

export default useAxios;