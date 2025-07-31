// src/pages/Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import ProgressChart from '../components/ProgressChart';
import MotivationQuote from '../components/MotivationQuote';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="dashboard-container">
      <h1>Welcome back, {user?.username || 'Student'}! 🎓</h1>

      <section className="dashboard-section">
        <h2>Your Weekly Progress</h2>
        <ProgressChart />
      </section>

      <section className="dashboard-section">
        <h2>Today's Motivation</h2>
        <MotivationQuote />
      </section>

      <section className="dashboard-section quick-links">
        <h2>Quick Access</h2>
        <div className="dashboard-links">
          <Link to="/study-planner" className="dashboard-link">📅 Study Planner</Link>
          <Link to="/topic-explainer" className="dashboard-link">🧠 Topic Explainer</Link>
          <Link to="/quiz" className="dashboard-link">❓ Quiz</Link>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
