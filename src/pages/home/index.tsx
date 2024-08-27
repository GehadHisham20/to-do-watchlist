import React from 'react';
import styles from './home.module.css';
import { useFetch } from 'hooks/useFetch';

import AddToWatchList from './addBtn';
import Spinner from 'components/spin/Spinner';

export interface TvShow {
  poster_path: string;
  name: string;
  id: string;
}

const Home: React.FC = () => {
  const { data, loading, error } = useFetch<TvShow[]>(
    `https://api.themoviedb.org/3/trending/tv/day?api_key=${
      import.meta.env.VITE_APP_API_KEY
    }`
  );
  return (
    <>
      {loading && <Spinner />}
      {error && <h3 style={{ textAlign: 'center' }}>Error Occured</h3>}
      {data && (
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.brdr}></div>
            <div className={styles.title}>
              <h2>Trending</h2>
              <h2>TV</h2>
              <h2>to Watch Now</h2>
              <p className="gray-color" style={{ marginTop: '1em' }}>
                Most watched TVs by days
              </p>
            </div>

            <div className={styles.brdr}></div>
          </div>

          {data.map((tvShow, index) => (
            <div className={styles.col} key={index}>
              <div className={styles.positionRelative}>
                <AddToWatchList data={tvShow} />

                <img
                  className={styles.w100}
                  src={`https://image.tmdb.org/t/p/original${tvShow.poster_path}`}
                  alt={tvShow.name}
                />
                <h5>{tvShow.name}</h5>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
