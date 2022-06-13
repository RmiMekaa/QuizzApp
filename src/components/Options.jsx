import React from 'react'
import OptionsDropdown from './OptionsDropdown'
import { difficultyOptions, quantityOptions, categoryOptions } from '../data/options';

export default function Options({ appState, setAppState }) {
  const dropdowns = document.querySelectorAll("details");
  dropdowns.forEach((targetDetail) => {
    targetDetail.addEventListener("click", () => {
      dropdowns.forEach((detail) => {
        if (detail !== targetDetail) {
          detail.removeAttribute("open");
        }
      });
    });
  });

  return (
    <div className='options'>
      <OptionsDropdown
        options={categoryOptions}
        heading="Category"
        remotedState='selectedCategory'
        state={appState}
        updateState={setAppState}
      />
      <OptionsDropdown
        options={difficultyOptions}
        heading="Difficulty"
        remotedState='selectedDifficulty'
        state={appState}
        updateState={setAppState}
      />
      <OptionsDropdown
        options={quantityOptions}
        heading="Quantity"
        remotedState='selectedQuantity'
        state={appState}
        updateState={setAppState}
      />
    </div>
  )
}
