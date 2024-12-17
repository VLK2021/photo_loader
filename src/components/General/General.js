import React, {useState} from 'react';

import css from './General.module.css';
import {Title} from "../Title/Title";
import {Form} from "../Form/Form";
import {Photo} from "../Photo/Photo";


const General = () => {
    const [photos, setPhotos] = useState([]);
    const [isShow, setIsShow] = useState(false);


    console.log(photos);


    return (
        <div className={css.wrap}>
            <div className={css.header}>
                <Title/>
            </div>

            <div className={css.form}>
                <Form setPhotos={setPhotos} setIsShow={setIsShow}/>
            </div>

            {isShow && (
                <div className={css.photos}>
                    {photos.data.results
                        .map(obj => <div key={obj.id} className={css.imgWrapper}>
                            <Photo obj={obj}/>
                        </div>)
                    }
                </div>
            )}

        </div>
    );
};

export {General};