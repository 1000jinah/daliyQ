import React, { useState } from 'react';

const QuestionPage = () => {
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [answerCounts, setAnswerCounts] = useState({ A: 0, B: 0, C: 0, D: 0 });

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
    setAnswerCounts((prevCounts) => ({
      ...prevCounts,
      [answer]: prevCounts[answer] + 1,
    }));
  };

  const calculatePercentage = (count) => {
    const totalAnswers = Object.values(answerCounts).reduce(
      (total, value) => total + value,
      0
    );
    if (totalAnswers === 0) return 0;
    return (count / totalAnswers) * 100;
  };

  return (
    <div>
      <h1>Daily Question</h1>
      <p>What is your answer?</p>
      <button onClick={() => handleAnswerSelection('A')}>
        A ({answerCounts.A})
      </button>
      <button onClick={() => handleAnswerSelection('B')}>
        B ({answerCounts.B})
      </button>
      <button onClick={() => handleAnswerSelection('C')}>
        C ({answerCounts.C})
      </button>
      <button onClick={() => handleAnswerSelection('D')}>
        D ({answerCounts.D})
      </button>

      <h2>Answer Statistics</h2>
      <p>Answer A: {calculatePercentage(answerCounts.A).toFixed(2)}%</p>
      <p>Answer B: {calculatePercentage(answerCounts.B).toFixed(2)}%</p>
      <p>Answer C: {calculatePercentage(answerCounts.C).toFixed(2)}%</p>
      <p>Answer D: {calculatePercentage(answerCounts.D).toFixed(2)}%</p>
    </div>
  );
};

export default QuestionPage;
