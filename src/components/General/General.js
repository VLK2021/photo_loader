import React from 'react';

import css from './General.module.css';
import {Title} from "../Title/Title";


const General = () => {
    return (
        <div className={css.wrap}>
            <div className={css.header}>
                <Title/>
            </div>
        </div>
    );
};

export {General};