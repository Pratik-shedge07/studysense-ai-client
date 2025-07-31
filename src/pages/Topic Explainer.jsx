import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #3f51b5;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-top: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
`;

const Button = styled.button`
  margin-top: 1rem;
  background-color: #3f51b5;
  color: white;
  padding: 12px 24px;
  border: none;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #2c3e90;
  }
`;

const Result = styled.div`
  margin-top: 2rem;
  background-color: #f4f4f4;
  padding: 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
`;

const TopicExplainer = () => {
  const [topic, setTopic] = useState('');
  const [explanation, setExplanation] = useState('');
  const [loading, setLoading] = useState(false);

  const handleExplain = async () => {
    setLoading(true);

    // Simulated API call — replace with OpenAI or your backend later
    setTimeout(() => {
      setExplanation(
        `Here’s a simple explanation of "${topic}":\n\n` +
        `This topic is very important in your studies. Make sure to understand the basics first, then dive into advanced concepts.`
      );
      setLoading(false);
    }, 1500);
  };

  return (
    <Container>
      <Title>🧠 Topic Explainer</Title>
      <Input
        placeholder="Enter a topic (e.g., Operating System)"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <Button onClick={handleExplain} disabled={loading || !topic}>
        {loading ? 'Explaining...' : 'Explain Topic'}
      </Button>

      {explanation && <Result>{explanation}</Result>}
    </Container>
  );
};

export default TopicExplainer;
