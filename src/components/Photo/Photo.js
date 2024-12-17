import React from 'react';

import css from './Photo.module.css';


const Photo = ({obj}) => {
    const urlImg = obj.urls?.full;

    const download = async () => {
        try {
            const response = await fetch(urlImg);
            const blob = await response.blob();

            // Створюємо тимчасове посилання для завантаження
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `photo-${obj.id || 'unsplash'}.jpg`;

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(link.href);
        } catch (error) {
            console.error('Error downloading the photo:', error);
        }
    };


    return (
        <div className={css.wrap}>
            <img src={urlImg} alt={`Photo`}/>

            <button className={css.button} onClick={download}>download</button>
        </div>
    );
};

export {Photo};