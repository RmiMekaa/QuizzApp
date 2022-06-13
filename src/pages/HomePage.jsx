import React, { useState } from 'react'
import CustomQuizzes from '../components/CustomQuizzes';
import Options from '../components/Options';
import StartWindow from '../components/StartWindow';

export default function HomePage({ appState, setAppState }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className='homePage'>
      <Options {...{ appState, setAppState }} />
      <StartWindow {...{ appState, setAppState, setLoading, setError }} />
      <CustomQuizzes {...{ appState, setAppState }} />
    </section >
  )
}