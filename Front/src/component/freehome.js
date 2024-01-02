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
            <label><input type="checkbox" /> Marketing</label>
              <label><input type="checkbox" /> Design Graphique</label>
              <label><input type="checkbox" /> Montage Video</label>
              <label><input type="checkbox" /> Developpment Web</label>
              <label><input type="checkbox" /> Developpment Mobile</label>
            </div>
          )}
          
       
          <div className="job-offerings">
  <div className="job">
    <h2 className="job-title">Job Title 1</h2>
    <p className="job-category">Category 1</p>
    <p className="job-description">This is a description for Job 1.</p>
    <p className="job-client">Client 1</p>
    <div className='button'>Postuler</div>
  </div>
  <div className="job">
    <h2 className="job-title">Job Title 2</h2>
    <p className="job-category">Category 2</p>
    <p className="job-description">This is a description for Job 2.</p>
    <p className="job-client">Client 2</p>
    <div className='button'>Postuler</div>
  </div>
 
</div>
      </div>
    </div>
  );
}

export default FreeHome;
