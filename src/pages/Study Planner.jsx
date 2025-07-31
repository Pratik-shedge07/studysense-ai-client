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
  padding: 10px;
  margin-top: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
`;

const Button = styled.button`
  margin-top: 1rem;
  background-color: #3f51b5;
  color: white;
  padding: 10px 20px;
  border: none;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #2c3e90;
  }
`;

const PlanBox = styled.div`
  margin-top: 2rem;
  background-color: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
`;

const Day = styled.div`
  margin-bottom: 1rem;
`;

const StudyPlanner = () => {
  const [subjects, setSubjects] = useState('');
  const [hours, setHours] = useState('');
  const [plan, setPlan] = useState([]);

  const generatePlan = () => {
    const subjectList = subjects.split(',').map((s) => s.trim()).filter(Boolean);
    const totalHours = parseInt(hours);
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const planPerDay = {};

    subjectList.forEach((subj, i) => {
      const day = days[i % days.length];
      if (!planPerDay[day]) planPerDay[day] = [];
      planPerDay[day].push(subj);
    });

    const dailyHours = Math.floor(totalHours / 7);
    const finalPlan = days.map((day) => ({
      day,
      subjects: planPerDay[day] || [],
      hours: dailyHours,
    }));

    setPlan(finalPlan);
  };

  return (
    <Container>
      <Title>📅 Weekly Study Planner</Title>
      <Input
        placeholder="Enter subjects (comma separated e.g. OS, DBMS, Java)"
        value={subjects}
        onChange={(e) => setSubjects(e.target.value)}
      />
      <Input
        placeholder="Available study hours per week (e.g. 14)"
        value={hours}
        onChange={(e) => setHours(e.target.value)}
        type="number"
        min={1}
      />
      <Button onClick={generatePlan} disabled={!subjects || !hours}>Generate Plan</Button>

      {plan.length > 0 && (
        <PlanBox>
          {plan.map((day) => (
            <Day key={day.day}>
              <strong>{day.day}:</strong> {day.subjects.join(', ') || 'Rest'} – {day.hours} hrs
            </Day>
          ))}
        </PlanBox>
      )}
    </Container>
  );
};

export default StudyPlanner;
