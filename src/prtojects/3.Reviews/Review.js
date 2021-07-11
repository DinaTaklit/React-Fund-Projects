import { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0)
  const {id, name, job, image, text} = people[index];

  const handleNext = () => {
    setIndex(prevIndex => {
      return prevIndex < people.length -1 ? prevIndex+1: 0
    })
  }
  const handlePrev = () => {
    setIndex(prevIndex =>{
      return prevIndex > 0 ? prevIndex-1: people.length-1
    })
    
  }
  const handleRandom = () => {
    const index =  Math.floor(Math.random() * people.length);
    setIndex(index);
  }

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={handlePrev}>
          <FaChevronLeft />         
        </button>
        <button className="next-btn" onClick={handleNext}>
          <FaChevronRight />     
        </button>
      </div>
      <button className="random-btn" onClick={handleRandom}>Surprise Me</button>
    </article>
  );
};

export default Review;
