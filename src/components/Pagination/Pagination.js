import React from 'react';

import css from './Pagination.module.css';
import {photoService} from "../../services";


const Pagination = (props) => {
    const {page, setPage, queryData, setPhotos} = props;

    const query = queryData.query;
    const count = queryData.count;

    const onPageChange = async (newPage) => {
        setPage(newPage);
        const response = await photoService.searchPhoto(newPage, query, count);
        setPhotos(response);
    };


    return (
        <div className={css.wrap}>
            <button onClick={() => onPageChange(page - 1)} disabled={page === 1}>
                Previous
            </button>
            <span>Page {page}</span>
            <button onClick={() => onPageChange(page + 1)}>Next</button>
        </div>
    );
};

export {Pagination};