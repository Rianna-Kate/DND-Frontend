import React, { useEffect, useState } from 'react';
import { SearchResultsList } from '../SearchBars/SearchResultsList';
import styles from "./LevelSearch.module.css";
import { LevelSearchButton } from './LevelSearchButton';

export const LevelSearch = () => {
  const [results, setLevelResults] = useState([]);
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
        <div className={styles.logoLevel}>
          <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3lxNGNhYXV0MzBxcHVxanQ0dHo3dWd0MjVnbjY3YnlpMm4wMGxpZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/lMa32EDsr7NrDwg1no/giphy.gif" alt="Happy Computer" />
        </div>
        :
    <div>
    <div className={styles.mainLevel}>
    <img className={styles.art} src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzM1MmNtazJhaHc5azdjN2cxajZmaDhldW1peXNnODdwcDc1ZW9xdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/BRLfMn2qEN1Xwpoc4D/giphy.gif" alt="Happy Computer" />
        <h1 className={styles.startLevel}>
          Search by Level!
        </h1>
    </div>
    <div className={styles.nextLevel}>
      <div className={styles.searchBarLevel}>
        <LevelSearchButton setLevelResults={setLevelResults}/>
      </div>
      <div className={styles.searchResultsListLevel}>
        <SearchResultsList results={results}/>
      </div>
    </div>
    </div>
      }
    </section>
  )
}
