import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1e1e2f;
  color: white;
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  color: #61dafb;
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 1.5rem;
  list-style: none;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;

  &:hover,
  &.active {
    color: #61dafb;
  }
`;

const Navbar = () => {
  const location = useLocation();

  return (
    <Nav>
      <Logo>StudySense AI</Logo>
      <NavLinks>
        <li>
          <NavLink to="/dashboard" className={location.pathname === '/dashboard' ? 'active' : ''}>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/study-planner" className={location.pathname === '/study-planner' ? 'active' : ''}>
            Planner
          </NavLink>
        </li>
        <li>
          <NavLink to="/topic-explainer" className={location.pathname === '/topic-explainer' ? 'active' : ''}>
            Explainer
          </NavLink>
        </li>
        <li>
          <NavLink to="/quiz" className={location.pathname === '/quiz' ? 'active' : ''}>
            Quiz
          </NavLink>
        </li>
        <li>
          <NavLink to="/motivation" className={location.pathname === '/motivation' ? 'active' : ''}>
            Motivation
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className={location.pathname === '/login' ? 'active' : ''}>
            Logout
          </NavLink>
        </li>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
