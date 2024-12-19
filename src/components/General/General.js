import React, {useState} from 'react';

import css from './General.module.css';
import {Title} from "../Title/Title";
import {Form} from "../Form/Form";
import {Photo} from "../Photo/Photo";
import {Pagination} from "../Pagination/Pagination";


const General = () => {
    const [photos, setPhotos] = useState([]);
    const [queryData, setQueryData] = useState({ query: "", count: 30 });
    const [page, setPage] = useState(1);
    const [isShow, setIsShow] = useState(false);


    console.log(photos);


    return (
        <div className={css.wrap}>
            <div className={css.header}>
                <Title/>
            </div>

            <div className={css.form}>
                <Form
                    setPhotos={setPhotos}
                    setIsShow={setIsShow}
                    page={page}
                    setQueryData={setQueryData}
                />
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

            {isShow && <Pagination
                page={page}
                setPage={setPage}
                queryData={queryData}
                setPhotos={setPhotos}
            />}

        </div>
    );
};

export {General};