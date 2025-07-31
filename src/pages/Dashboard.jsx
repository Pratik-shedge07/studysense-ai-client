// src/pages/Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import ProgressChart from '../components/ProgressChart';
import MotivationQuote from '../components/MotivationQuote';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  max-width: 900px;
  margin: auto;
`;

const Section = styled.section`
  margin-top: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #2c3e50;
`;

const SubTitle = styled.h2`
  font-size: 1.5rem;
  color: #34495e;
  margin-bottom: 1rem;
`;

const QuickLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const DashboardLink = styled(Link)`
  background-color: #20232a;
  color: #fff;
  padding: 12px 16px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: 0.3s ease;

  &:hover {
    background-color: #3f51b5;
  }
`;

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <Container>
      <Title>Welcome back, {user?.username || 'Student'}! 🎓</Title>

      <Section>
        <SubTitle>Your Weekly Progress</SubTitle>
        <ProgressChart />
      </Section>

      <Section>
        <SubTitle>Today's Motivation</SubTitle>
        <MotivationQuote />
      </Section>

      <Section>
        <SubTitle>Quick Access</SubTitle>
        <QuickLinks>
          <DashboardLink to="/study-planner">📅 Study Planner</DashboardLink>
          <DashboardLink to="/topic-explainer">🧠 Topic Explainer</DashboardLink>
          <DashboardLink to="/quiz">❓ Quiz</DashboardLink>
        </QuickLinks>
      </Section>
    </Container>
  );
};

export default Dashboard;
