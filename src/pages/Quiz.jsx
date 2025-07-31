import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 700px;
  margin: auto;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #3f51b5;
`;

const QuestionBox = styled.div`
  margin-top: 2rem;
  background: #f4f4f4;
  padding: 1.5rem;
  border-radius: 8px;
`;

const Option = styled.button`
  display: block;
  width: 100%;
  text-align: left;
  padding: 10px 15px;
  margin: 10px 0;
  background-color: ${(props) => (props.correct === true ? '#4caf50' : props.correct === false ? '#f44336' : '#fff')};
  border: 1px solid #ccc;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    background-color: #e0e0e0;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

const NextButton = styled.button`
  margin-top: 1rem;
  padding: 10px 20px;
  background-color: #3f51b5;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;

const Score = styled.h2`
  margin-top: 2rem;
  color: #2c3e50;
`;

const sampleQuestions = [
  {
    question: 'What is the time complexity of binary search?',
    options: ['O(n)', 'O(log n)', 'O(n log n)', 'O(1)'],
    answer: 'O(log n)',
  },
  {
    question: 'Which keyword is used to inherit a class in Java?',
    options: ['implement', 'inherits', 'extends', 'instanceof'],
    answer: 'extends',
  },
  {
    question: 'React is mainly used for building?',
    options: ['Database', 'Connectivity', 'User Interfaces', 'Servers'],
    answer: 'User Interfaces',
  },
];

const Quiz = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (option) => {
    setSelected(option);
    if (option === sampleQuestions[current].answer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (current + 1 < sampleQuestions.length) {
      setCurrent(current + 1);
      setSelected(null);
    } else {
      setShowScore(true);
    }
  };

  return (
    <Container>
      <Title>❓ Quick Quiz</Title>

      {!showScore ? (
        <QuestionBox>
          <h3>{sampleQuestions[current].question}</h3>
          {sampleQuestions[current].options.map((opt) => (
            <Option
              key={opt}
              onClick={() => handleAnswer(opt)}
              disabled={selected !== null}
              correct={selected ? opt === sampleQuestions[current].answer : null}
            >
              {opt}
            </Option>
          ))}

          {selected && <NextButton onClick={handleNext}>Next</NextButton>}
        </QuestionBox>
      ) : (
        <Score>
          🎉 You scored {score} / {sampleQuestions.length}
        </Score>
      )}
    </Container>
  );
};

export default Quiz;
