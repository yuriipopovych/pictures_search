import React from 'react';
import styles from './LoadMore.module.css';

export default function LoadMore({loadMore}) {
  return (
      <>
      {/* <button onClick={loadMore}>Load More</button> */}
      <button class={styles.button} role="button" onClick={loadMore}>Load More</button>
      </>
  )
}
