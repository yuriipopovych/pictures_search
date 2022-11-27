import React from 'react';
import styles from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({key, src}) {
  return (
    <li className={styles.ImageGalleryItem} key={key}>
        <img src={src} alt="" className={styles.ImageGalleryItem_image} />
    </li>
  )
}
