import React, { useState } from 'react'
import './Sidebar.css'
import searchIcon from './icons/search.svg'
const Sidebar = ({ changeTimezone, timezone, timezoneList }) => {
    const [results, setResults] = useState([])
    const [inputValue, setInputValue] = useState('')
    return (
        <div className="Main-sidebar">
            <div className="searchbar">
                <input onChange={(e) => {
                    // check if empty, set results to nothing
                    if (e.target.value === '') {
                        setResults([])
                    } else {
                        const results = timezoneList.filter(timezone => timezone.query.toLowerCase().includes(e.target.value.toLowerCase()))
                        setResults(results)
                    }
                    setInputValue(e.target.value)
                }} className="search-input" type="text" placeholder="Another timezone" />
                <div className="search-button">
                    <img src={searchIcon} alt="search" className="search-icon" />
                </div>
            </div>
            <div className="bottom-sidebar">
                {results.length > 0 && inputValue.length > 0 ? <>
                    <h2 className="bottom-title">Search Result</h2>

                    <div className="search-results">
                        {results.map(result => (<p className={`timezone-item ${timezone === result.query && 'timezone-item-active'}`} onClick={() => changeTimezone(result.query)}>{result.text}</p>))}
                    </div>
                    <div className="divider" />
                </> : inputValue.length > 0 ? <>
                    <h2 className="bottom-title">Not found</h2>

                    <div className="divider" />
                </> : null}
                <div className="timezones">
                    <h2 className="bottom-title">Timezones</h2>
                    {timezoneList.map(result => (<p className={`timezone-item ${timezone === result.query && 'timezone-item-active'}`} onClick={() => changeTimezone(result.query)} >{result.text}</p>))}
                </div>
            </div>

        </div>
    )
}

export default Sidebar
