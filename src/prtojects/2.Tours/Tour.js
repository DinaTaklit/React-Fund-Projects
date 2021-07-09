import { useState } from 'react';

const Tour = ({id, name, info, image, price}) => {

  const [isShowMore, setIsShowMore] = useState(false)
  return (
    <article className="single-tour">
      <img src={image} alt={name}/>
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">{price}</h4>
        </div>
        <p>
            {isShowMore? info : `${info.substring(0,200)}...`}
            <button onClick={() => setIsShowMore(!isShowMore)}>{isShowMore? 'Show Less': 'Show More'}</button>
        </p>
        <button className="delete-btn">Not Interested</button>
      </footer>

    </article>
  )
};

export default Tour;