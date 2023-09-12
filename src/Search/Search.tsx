import React, { useState } from "react";
import './Search.css';
import searchIcon from '../images/searchIcon.svg';

const Search = () => {
    const [ searchInput, setSearchInput ] = useState('');
    const handleSubmission = (event: any) => {
        event.preventDeault()
        console.log('You have hit submit', searchInput)
    }

    return (
        <section className="search-container">
            <form>
                <label>
                    Enter your location:
                </label>
                <div>
                    <input type="text" 
                        name="location" 
                        value={searchInput}
                        onChange={event => setSearchInput(event.target.value)}
                    />
                    <button 
                        className='search-btn'
                        type="submit"
                        onClick={(e) => handleSubmission(e)}>
                        <img className="search-icon" src={searchIcon} alt="search icon"></img>
                    </button>
                </div>
            </form>
        </section>
    )
}

export { Search };