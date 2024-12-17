import React from 'react';
import {useForm} from "react-hook-form";

import css from './Form.module.css';
import {photoService} from "../../services";


const Form = (props) => {
    const {register, handleSubmit, reset} = useForm();
    const {setPhotos, setIsShow} = props;
    const page = 1;

    const submit = async (data) => {
        const query = data.query;
        const count = data.count;

        try {
            const response = await photoService.searchPhoto(page, query, count);
            setPhotos(response);

            if (response.status === 200) {
                setIsShow(true)
            }

            reset();
        } catch (error) {
            console.error("Error fetching photos:", error);
        }
    }

    return (
        <div className={css.wrap}>
            <form onSubmit={handleSubmit(submit)} className={css.form}>
                <div className={css.inputGroup}>
                    <input
                        type="text"
                        {...register('query')}
                        placeholder="Enter query"
                        className={css.input}
                    />

                    <input
                        type="number"
                        {...register('count')}
                        placeholder="Enter count(max 30)"
                        className={css.input}
                    />
                </div>

                <button className={css.button}>Get Photos</button>
            </form>
        </div>
    );
};

export {Form};