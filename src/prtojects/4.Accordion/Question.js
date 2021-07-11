import React, { useState } from 'react';
import {  AiOutlinePlus ,AiOutlineMinus} from 'react-icons/ai';
const Question = ({title, info}) => {
  const [showInfo, setShowInfo] = useState(false)
  return (
    <article className="question">
      <header>
        <h4 className="title">{title}</h4>
        <button className="btn" onClick={()=>setShowInfo(!showInfo)}>
          {showInfo?<AiOutlineMinus />:<AiOutlinePlus />}     
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;