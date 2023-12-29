import React from 'react';
import './home.css';
import desktop from '../res/desk1.png'
import Navbar from './navbar';


export function Home() {

  
    return (
        <div className='home'>
              <Navbar/>
      
            <div className='mrb3-m3wj'>
                <p className='title1'>eddes eddes barcha jaw n7eb nmout ya bro</p>
                <p className='text' > barcha klem s8ir barcha klem s8irbarcha klem s8irbarcha klem s8irbarcha klem s8irbarcha klem s8irbarcha klem s8irbarcha klem s8irbarcha klem s8irbarcha klem s8ir</p>
                <p className='button'> Aide et Support</p>
            </div>
            <div className='lech'>
            <p className='title2'>Pourquoi nous choisir ?</p> 
            <p className='text2'>barcha klem s8ir barcha klem s8irbarcha klem s8irbarcha klem s8irbarcha klem s8irbarcha klem s8irbarcha klem s8irbarcha klem s8irbarcha klem s8irbarcha klem s8ir</p> 
            </div>
            <div className='pubProj'>
                <div className='khat-azra9'></div>
                <img className='img' src={desktop} />
                <div className='pub'>
                    <p className='title2'>Dénichez un talentueux freelance Tunisien sur notre plateforme</p>
                    <p className='text2'> barcha klem barcha klem barcha klem barcha klem barcha klem barcha klem barcha klem barcha klem barcha klem barcha klem barcha klem barcha klem barcha klem barcha klem barcha klem barcha klem barcha klem barcha klem </p>
                    <p className='text2'> chwayya klem chwayya klem chwayya klem chwayya </p>
                    <p className='button'> Publier un projet</p>
                </div>
            </div>
            <div className='categories'>
                <p className='title2'>De quoi avez-vous besoin ?</p>
                
            </div>
           
        </div>
    );
}
;
