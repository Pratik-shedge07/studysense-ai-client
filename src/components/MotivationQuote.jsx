import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 2rem;
  text-align: center;
`;

const QuoteBox = styled.div`
  background: #fefefe;
  border-left: 5px solid #3f51b5;
  padding: 2rem;
  border-radius: 12px;
  font-size: 1.2rem;
  font-style: italic;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
`;

const Author = styled.div`
  text-align: right;
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: 500;
  color: #555;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #3f51b5;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #2c3e94;
  }
`;

const quotes = [
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    text: "Don’t watch the clock; do what it does. Keep going.",
    author: "Sam Levenson"
  },
  {
    text: "Start where you are. Use what you have. Do what you can.",
    author: "Arthur Ashe"
  },
  {
    text: "Push yourself, because no one else is going to do it for you.",
    author: "Unknown"
  },
  {
    text: "The harder you work for something, the greater you’ll feel when you achieve it.",
    author: "Unknown"
  }
];

const Motivation = () => {
  const [quote, setQuote] = useState(quotes[0]);

  const getNewQuote = () => {
    const index = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[index]);
  };

  return (
    <Container>
      <h1>✨ Daily Motivation</h1>
      <QuoteBox>
        "{quote.text}"
        <Author>– {quote.author}</Author>
      </QuoteBox>
      <Button onClick={getNewQuote}>Show Another Quote</Button>
    </Container>
  );
};

export default Motivation;
