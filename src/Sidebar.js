import React, { useState } from 'react'
import './Sidebar.css'
import searchIcon from './icons/search.svg'
const Sidebar = () => {
    const [results, setResults] = useState([{ query: "Africa/Abidjan", text: 'Abidjan' }])
    return (
        <div className="Main-sidebar">
            <div className="searchbar">
                <input className="search-input" type="text" placeholder="Another timezone" />
                <div className="search-button">
                    <img src={searchIcon} alt="search" className="search-icon" />
                </div>
            </div>
            <div className="bottom-sidebar">

                <div className="search-results">
                    {results.map(result => (<p>{result.text}</p>))}
                </div>
                <div className="divider" />
                <div className="timezones">
                    <h2>Timezones</h2>
                    {results.map(result => (<p>{result.text}</p>))}
                </div>
            </div>

        </div>
    )
}

export default Sidebar
