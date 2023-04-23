import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import c2 from '../assets/img/gl/c2.jpg';

export default function ItemThumbnailsDemo() {
    const [setImages] = useState(null);

    const images=[
        {
            itemImageSrc: 'https://img.freepik.com/free-vector/technology-wire-mesh-network-connection-digital-background_1017-28407.jpg',
            thumbnailImageSrc: 'https://img.freepik.com/free-vector/technology-wire-mesh-network-connection-digital-background_1017-28407.jpg',
            alt: 'DevOps, Cloud, and Agile Foundations',
            title: 'DevOps, Cloud, and Agile Foundations'
        },

        {
            itemImageSrc: {c2},
            thumbnailImageSrc: {c2},
            alt: 'Front-End Web UI Frameworks and Tools:Bootstrap 4',
            title: 'Front-End Web UI Frameworks and Tools:Bootstrap 4'
        },

        {
            itemImageSrc: '../assets/img/gl/c3.jpg',
            thumbnailImageSrc: '../assets/img/gl/c3.jpg',
            alt: 'Front-End Web Development with React',
            title: 'Front-End Web Development with React'
        },

        {
            itemImageSrc: '../assets/img/gl/c4.jpg',
            thumbnailImageSrc: '../assets/img/gl/c4.jpg',
            alt: 'Introduction to DevOps',
            title: 'Introduction to DevOps'
        },

        {
            itemImageSrc: '../assets/img/gl/c5.jpg',
            thumbnailImageSrc: '../assets/img/gl/c5.jpg',
            alt: 'Introduction to Agile Development and Scrum',
            title: 'Introduction to Agile Development and Scrum'
        },

        {
            itemImageSrc: '../assets/img/gl/c6.jpg',
            thumbnailImageSrc: '../assets/img/gl/c6.jpg',
            alt: 'Introduction to Cloud Computing',
            title: 'Introduction to Cloud Computing'
        },

        {
            itemImageSrc: '../assets/img/gl/c7.jpg',
            thumbnailImageSrc: '../assets/img/gl/c7.jpg',
            alt: 'Advanced React',
            title: 'Advanced React'
        },
    ];
    const responsiveOptions = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
    }

    return (
        <div className="card"> 
            <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={3} circular style={{ maxWidth: '1200px', alignItems: 'center' }}
                showItemNavigators item={itemTemplate} thumbnail={thumbnailTemplate} />
        </div>
    )
}
        