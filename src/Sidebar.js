import React from 'react'
import './Sidebar.css'
import searchIcon from './icons/search.svg'
const Sidebar = () => {
    return (
        <div className="Main-sidebar">
            <div className="searchbar">
                <input className="search-input" type="text" placeholder="Another timezone" />
                <div className="search-button">
                    <img src={searchIcon} alt="search" className="search-icon" />
                </div>
            </div>
        </div>
    )
}

export default Sidebar
