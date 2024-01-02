import React, { useState } from 'react';
import Navbar from './navbar';
import './freehome.css';


function FreeHome() {
  const [showCategories, setShowCategories] = useState(false);

  return (
    <div>
      <Navbar Role={"Freelance"}/>
      <div className='page-content'>
        <div className="sidebar">
          <button className="categories-button" onClick={() => setShowCategories(!showCategories)}>
            Categories
          </button>
          </div>
          {showCategories && (
            <div className="categories-list">
              <label><input type="checkbox" /> Category 1</label>
              <label><input type="checkbox" /> Category 2</label>
              <label><input type="checkbox" /> Category 3</label>
            </div>
          )}
          
       
        <div className="posts-list">
            <div>Post 1</div>
            <div>Post 2</div>
            <div>Post 3</div>
          </div>
      </div>
    </div>
  );
}

export default FreeHome;
