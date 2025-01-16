import React from 'react'
import Navbar from '../components/Navbar';
import "./Portfolio.css"
import PortfolioImages from '../components/PortfolioImages';
import Footer from '../components/Footer';

function Portfolio() {
  return (
    <>
        <Navbar />
        <div className="portfolio-header">
            <img 
            src='images/homebg.jpg'
            alt='portfolio'
            className='portfolio-img'
            />
            <div className='portfolio-text'>
                <h1>Portfolio</h1>
            </div>
        </div>
        <PortfolioImages />
        <Footer />
    </>
  )
}

export default Portfolio;