import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  height: 100vh;
  background-color: #121212;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const ErrorCode = styled.h1`
  font-size: 6rem;
  margin-bottom: 1rem;
  color: #61dafb;
`;

const Message = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const BackButton = styled(Link)`
  padding: 0.75rem 1.5rem;
  background-color: #61dafb;
  color: #000;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    background-color: #21a1f1;
  }
`;

const NotFound = () => {
  return (
    <Wrapper>
      <ErrorCode>404</ErrorCode>
      <Message>Oops! The page you're looking for doesn't exist.</Message>
      <BackButton to="/dashboard">Go to Dashboard</BackButton>
    </Wrapper>
  );
};

export default NotFound;
