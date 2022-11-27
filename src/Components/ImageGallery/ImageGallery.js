import React from 'react';
import styles from './ImageGallery.module.css';
import ImageGalleryItem from './../ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery({pictures}) {
  return (
    <ul className={styles.ImageGallery}>
      
      {pictures.map(picture => 
        <ImageGalleryItem key={picture.id} src={picture.largeImageURL}></ImageGalleryItem>
        // <li key={picture.id}>
        //   <img src={picture.previewURL}></img>  
        // </li>
      )}
    </ul>
  )
}
