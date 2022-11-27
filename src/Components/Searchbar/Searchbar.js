import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import styles from './Searchbar.module.css';

export default function Searchbar({inputChange, handleSearch, inputValue}) {
  return (
    <div className={styles.Searchbar}>
        <SearchForm inputChange={inputChange} handleSearch={handleSearch} inputValue={inputValue}></SearchForm>      
    </div>
  )
}
