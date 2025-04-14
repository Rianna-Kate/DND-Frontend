import React, { useEffect, useState } from 'react';
import { SearchBar } from '../SearchBars/SearchBar';
import { SearchResultsList } from '../SearchBars/SearchResultsList';
import styles from "./SpellSearch.module.css";

export const SpellSearch = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1200)
  }, [])
  
  return (
    <section >
    {loading ? 
        <div className={styles.logo}>
          <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3lxNGNhYXV0MzBxcHVxanQ0dHo3dWd0MjVnbjY3YnlpMm4wMGxpZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/lMa32EDsr7NrDwg1no/giphy.gif" alt="Happy Computer" />
        </div>
        :
      <div>
      <div className={styles.main}>
      <img className={styles.art} src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDBiamVzNG9odjFhOGZra2NjYnBibzBiMHdvNzBoOGpocGJtdGQzNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/CBEan1raoUR7FbsjYZ/giphy.gif" alt="Happy Computer" />
        <h1 className={styles.start}>Search by Spell Name!</h1>
      </div>
      <div className={styles.searchBarContainer}>
        <div className={styles.searchBar}>
          <SearchBar setResults={setResults} />
        </div>
        <div className={styles.searchResultsList}>
          <SearchResultsList results={results} />
        </div>
      </div>
    </div>
    }
    </section>
  )
}
