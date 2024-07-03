import { useState } from 'react';
import Card from '../Card/Card';
import useAxios from '../../hooks/useAxios';
import './List.css';

const URL = 'http://localhost:3000';

const List = () => {
    const { data, error, loading } = useAxios(URL);
    const [search, setSearch] = useState('');

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {(error && error?.message) || 'An Error Ocurred'}</div>;
    if (!data) return <div>No data found</div>

    const onRefresh = () => {
        // ToDo
    }

    const onSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    }

    const filteredData = data?.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <section className="section">
            <div className='menu'>
                {/* Implement Search Field Input */}
                <input className='input' type='text' placeholder='Search' value={search}
                    onChange={onSearch} />
                {/* Implement Refresh Button */}
                <button className='button' onClick={onRefresh}>Refresh</button>
            </div>
            <div className="list">
                {filteredData.map((item, index) => (
                    <Card key={index} data={item} />
                ))}
            </div>
        </section>
    )
}

export default List