import React from 'react';
import testLogo from '../assets/testLogo.png'; // Opdater stien til logoet efter behov

function Header() {
  return (
    <header style={headerStyle}>
      <img src={testLogo} alt="SpitzenKlasse Logo" style={logoStyle} />
      <h1 style={titleStyle}>SpitzenKlasse</h1>
    </header>
  );
}

const headerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  padding: '10px 20px',
  backgroundColor: '#0A84FF', // Eksempel på en baggrundsfarve, tilpas efter behov
  color: 'white'
};

const logoStyle = {
  height: '50px', // Tilpas efter størrelsen på dit logo
  marginRight: '15px',
  background: 'transparent', // Sørger for at baggrunden er gennemsigtig
  border: 'none' // Fjerner eventuelle kanter
};

const titleStyle = {
  margin: 0,
  padding: 0,
  fontSize: '24px' // Tilpas efter dine behov
};

export default Header;
