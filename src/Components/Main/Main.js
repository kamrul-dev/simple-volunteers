import { useEffect, useState } from 'react';
import useVolunteers from '../../hooks/useVolunteers';
import Activity from '../Activity/Activity';
import './Main.css';

const Main = () => {
    // const [volunteers, setVolunteers] = useVolunteers();
    const [searchText, setSearchText] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => {
            const match = data.filter(d => d.title.includes(searchText));
            setSearchResult(match);
        })
    }, [searchText]);



    const handleSearchChange = (event) => {
        setSearchText(event.target.value);

    }

    // const handleSearchChange2 = (event) => {
    //     const searchText = event.target.value;
    //     //convert smaller case letter to match search
    //     const match = volunteers.filter(v => v.title.includes(searchText));
    //     setSearchResult(match);
    // }

    return (
        <div>
            <h2>Volunteer Acitivities: {searchResult.length}</h2>
            <div style={{ margin: '20px' }}>
                <input onChange={handleSearchChange} type="text" placeholder='Search' />
            </div>
            <div className="activity-container">
                {
                    searchResult.map(activity => <Activity
                        key={activity._id}
                        activity={activity}
                    ></Activity>)
                }
            </div>
        </div>
    );
};

export default Main;