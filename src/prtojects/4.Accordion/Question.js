import React, { useState } from 'react';
import {  AiOutlinePlus ,AiOutlineMinus} from 'react-icons/ai';
const Question = ({title, info}) => {
  return (
    <article className="question">
      <header>
        <h4 className="title">{title}</h4>
        <button className="btn">
          <AiOutlinePlus />          
        </button>
      </header>
       <p>{info}</p>
    </article>
  );
};

export default Question;