import React from 'react';
import './SpeedQuiz.css';

const SpeedQuiz = ({form, children}) => {
  return (
    <main className="speed-quiz-main">
      <div>DIV</div>
      <section>
        {children}
      </section>
    </main>
  );
};

export default SpeedQuiz;