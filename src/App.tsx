import React from 'react';
import Header from './components/header';
import Summary from './components/summary';
import Skills from './components/skills';
import Experience from './components/experience';
import Education from './components/education';
import Hobbies from './components/hobbies';
import ContactForm from './components/contactform';

const App: React.FC = () => {
  return (
    <div style={{ padding: '16px' }}>
      <Header />
      <Summary />
      <Skills />
      <Experience />
      <Education />
      <Hobbies />
      <ContactForm />
    </div>
  );
};

export default App;