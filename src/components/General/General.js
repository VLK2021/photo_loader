import React, {useState} from 'react';

import css from './General.module.css';
import {Title} from "../Title/Title";
import {Form} from "../Form/Form";


const General = () => {
    const [photos, setPhotos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    return (
        <div className={css.wrap}>
            <div className={css.header}>
                <Title/>
            </div>

            <div className={css.form}>
                <Form setPhotos={setPhotos}/>
            </div>

        </div>
    );
};

export {General};