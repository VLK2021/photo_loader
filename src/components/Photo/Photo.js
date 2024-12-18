import React, { useState } from 'react';
import css from './Photo.module.css';
import {Loader} from "../Loader/Loader";


const Photo = ({ obj }) => {
    const [isLoading, setIsLoading] = useState(true);
    const urlImg = obj.urls?.full;

    const handleImageLoad = () => {
        setIsLoading(false); // Змінюємо стан на false після завантаження фото
    };

    const download = async () => {
        try {
            const response = await fetch(urlImg);
            const blob = await response.blob();

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
            {isLoading && (
                <div className={css.loaderWrap}>
                    <Loader />
                </div>
            )}
            <img
                src={urlImg}
                alt={`Photo`}
                className={`${css.photo} ${isLoading ? css.hidden : ''}`}
                onLoad={handleImageLoad}
            />
            {!isLoading && (
                <button className={css.button} onClick={download}>
                    download
                </button>
            )}
        </div>
    );
};

export { Photo };
