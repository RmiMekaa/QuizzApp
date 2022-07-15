import React, { useState } from 'react'
import CustomQuizzes from '../components/homePage/CustomQuizzes';
import OptionsContainer from '../components/homePage/OptionsContainer';
import StartWindow from '../components/homePage/StartWindow';

export default function HomePage({ appState, setAppState }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className='homePage'>
      <OptionsContainer {...{ appState, setAppState }} />
      <StartWindow {...{ appState, setAppState, setLoading, setError }} />
      <CustomQuizzes {...{ appState, setAppState }} />
    </section >
  )

}
