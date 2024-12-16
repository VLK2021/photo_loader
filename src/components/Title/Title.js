import React, {useEffect, useState} from 'react';

import css from './Title.module.css';


const Title = () => {
    const colors = ['red', 'blue', 'pink'];
    const [indexColor, setIndexColor] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndexColor(prev => (prev + 1) % colors.length);
        }, 1500)

        return () => clearInterval(interval);
    }, [colors.length]);

    const currentColor = colors[indexColor];


    return (
        <h1 className={css.wrap} style={{color: currentColor}}>
            Photo Downloader
        </h1>
    );
};

export {Title};