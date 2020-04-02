import React from 'react';

import { PetsSearch } from './dog-search.interfaces';

import styles from './dog-search.module.scss';

export const DogSearch: React.FC<PetsSearch> = props => {
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const userInput = e.target.value.toLowerCase();

    props.renderPets(userInput);
  };

  return (
    <div className={styles.searchContainer}>
      <h2 className={styles.searchContainer__searchHeader}>Знайти</h2>
      <input
        type="text"
        className={styles.searchContainer__searchInput}
        placeholder="Мопс..."
        onChange={onInputChange}
      />
    </div>
  );
};
