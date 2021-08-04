import React, { useState } from 'react';
import './index.scss'
import data from './data';
import SingleQuestion from './Question';

function Index() {
  const [questions, setQuestions] = useState(data)
  return (
    <div className="accordion">
      <main>
        <div className="container">
          <h3>Questions and Answers about login </h3>
          <section className="info">
            {
              questions.map(question => {
                return (
                  <SingleQuestion key={question.id} {...question} />
                );
              })
            } 
          </section>
        </div>
      </main>
    </div>
  )

}

export default Index;