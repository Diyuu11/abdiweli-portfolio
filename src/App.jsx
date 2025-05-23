import React from 'react';
import Navbar from './components/layout/Navbar';
import Header from './components/sections/Header';
import Profile from './components/sections/Profile';
import Education from './components/sections/Education';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Trainings from './components/sections/Trainings';
import References from './components/sections/References';
import Footer from './components/layout/Footer';

export default function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Profile />
      <Education />
      <Skills />
      <Experience />
      <Trainings />
      <References />
      <Footer />
    </div>
  );
}
