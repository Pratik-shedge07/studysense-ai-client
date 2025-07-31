import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const QuoteBox = styled.div`
  background-color: #fff8dc;
  padding: 1.5rem;
  border-left: 5px solid #3f51b5;
  border-radius: 8px;
  font-style: italic;
  color: #2c3e50;
  font-size: 1.1rem;
`;

const quotes = [
  "Success doesn't come from what you do occasionally. It comes from what you do consistently.",
  "The secret to getting ahead is getting started.",
  "Don't watch the clock; do what it does. Keep going.",
  "Your future is created by what you do today, not tomorrow.",
  "Push yourself, because no one else is going to do it for you.",
  "Believe you can and you're halfway there.",
];

const MotivationQuote = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const random = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[random]);
  }, []);

  return <QuoteBox>"{quote}"</QuoteBox>;
};

export default MotivationQuote;
