import React, { useEffect, useState } from 'react';
import './Search.css';
import search from '../../../assets/magnifying-glass-solid.svg';

const Search = () => {
  const handleAlert = () => {
    alert('This Functionality is Under Development');
  };

  const filterList = [
    { filter: "Jeans" },
    { filter: "Shirt" },
    { filter: "Cream" },
    { filter: "Hand Bag" },
    { filter: "Man" },
    { filter: "Woman" },
    { filter: "Kids" },
    { filter: "Makeup" }
  ];

  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 400);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 400);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className='search'>
        <div className="field">
          <input
            type="text"
            placeholder='Search Here'
            className='Search box'
          />
          <button type="button">
            <img src={search} alt="Search" onClick={handleAlert}/>
          </button>
        </div>
      </div>
   { /**   <div className="filters">
        {filterList.map((item, index) => (
          <button key={index} onClick={handleAlert}>
            {item.filter}
          </button>
        ))}
      </div>*/}
    </>
  );
};

export default Search;
