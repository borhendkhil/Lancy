import React from 'react';
import './home.css';
import desktop from '../res/desk1.png'
import Navbar from './navbar';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };


  const data = [
    { title: 'Item 1', image: desktop },
    { title: 'Item 2', image: desktop },
    { title: 'Item 3', image: desktop },
    // add more items as needed
  ];
  

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

                <Carousel responsive={responsive} 
                showDots={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={5000}
                arrows={true}>
      {data.map((item, index) => (
        <div key={index}>
          <img src={item.image} alt={item.title} />
          <p>{item.title}</p>
        </div>
      ))}
    </Carousel>
                
            </div>
           
        </div>
    );
}
;
