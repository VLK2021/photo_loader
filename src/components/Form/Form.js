import React from 'react';
import {useForm} from "react-hook-form";

import css from './Form.module.css';
import {photoService} from "../../services";


const Form = (props) => {
    const {register, handleSubmit, reset} = useForm();
    const {setPhotos} = props;

    const submit = async (data) => {
        const query = data.query;
        const count = data.count;

        try {
            const response = await photoService.searchPhoto(query, count);
            console.log(response);

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
                        placeholder="Enter count"
                        className={css.input}
                    />
                </div>

                <button className={css.button}>Get Photos</button>
            </form>
        </div>
    );
};

export {Form};