import React, { useState } from 'react';
import './index.css'
import data from './data';
import SingleQuestion from './Question';

function Index() {
  const [questions, setQuestions] = useState(data)
  return (
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
  )

}

export default Index;