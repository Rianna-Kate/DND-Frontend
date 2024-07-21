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
          <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTltM3k3OHoxNzZmcHJyc3p6aGQ5a3FpYjZxY3Bmd3VhYW5oMmp4dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/ltnwrUlKwDQPmaA2sI/giphy.gif" alt="Happy Computer" />
        </div>
        :
    <div>
    <div className={styles.mainLevel}>
    <img className={styles.art} src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTFleHgyN3lvNDlyZW10YnUwbno1aWtwZHFnM2EwbTNxdW9wdmQ0ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/kUzZPC32NH7qteJp3G/giphy.gif" alt="Happy Computer" />
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
