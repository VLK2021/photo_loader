import React from 'react';

import css from './GeneralPage.module.css';
import {General} from "../../components";


const GeneralPage = () => {
    return (
        <div className={css.wrap}>
            <General/>
        </div>
    );
};

export {GeneralPage};