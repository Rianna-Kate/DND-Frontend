import React, { useEffect, useState } from 'react';
import { SearchResultsList } from '../SearchBars/SearchResultsList';
import styles from "./ClassSearch.module.css";
import { ClassSearchButton } from './ClassSearchButton';

export const ClassSearch = () => {
  const [results, setSchoolResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1200)
  }, [])

  return (
    <section>
    {loading ? 
        <div className={styles.logo}>
          <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3lxNGNhYXV0MzBxcHVxanQ0dHo3dWd0MjVnbjY3YnlpMm4wMGxpZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/lMa32EDsr7NrDwg1no/giphy.gif" alt="Happy Computer" />
        </div>
        :
    <div>
    <div className={styles.main}>
    <img className={styles.art} src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHhvazFrM2FicHRjZDIzbDllZ3V6Y256Znp2bWl1OHF6dXY2MGNvNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/WmhxuP5qJnSxmoGR9b/giphy.gif" alt="Happy Computer" />
        <h1 className={styles.start}>
          Search by Class!
        </h1>
    </div>
    <div className={styles.searchBar}>
      <ClassSearchButton setSchoolResults={setSchoolResults}/>
    </div>
     <div className={styles.searchResultsList}>
      <SearchResultsList results={results}/>
    </div>
    </div>
    }
    </section>
  )
}
