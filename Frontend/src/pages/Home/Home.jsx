import React from 'react';
import HeroContainer from './Hero/HeroContainer';
import { Gallery } from './Gallery/Gallery';
import { PopularClasses } from './PopuarClasses/PopularClasses';
import PopularTeacher from './PopularTeacher/PopularTeacher';
import useAuth from '../../hooks/useAuth';

const Home = () => {
  const {user} = useAuth();
  return (
    <section>
      <HeroContainer/>
      <div className='max-w-screen-xl mx-auto'>
        <Gallery/>
        <PopularClasses/>
        <PopularTeacher/>
      </div>
    </section>
  )
}

export default Home;