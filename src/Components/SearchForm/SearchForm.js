import React from 'react';
import styles from './SearchForm.module.css';

export default function SearchForm({inputChange, handleSearch, inputValue}) {
  return (
    <header className="searchbar">
        <form className={styles.SearchForm} onSubmit={handleSearch}>
            <button type="submit" className={styles.SearchForm_button}>
            <span className={styles.SearchForm_button_label}>Search</span>
            </button>

            <input
            className={styles.SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
          placeholder="Search images and photos"
          onChange={inputChange}
          value={inputValue}
            />
        </form>
    </header>
  )
}
