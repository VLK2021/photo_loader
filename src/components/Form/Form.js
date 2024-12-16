import React from 'react';

import css from './Form.module.css';
import {useForm} from "react-hook-form";


const Form = () => {
    const {register, handleSubmit, reset} = useForm();

    const submit = (data) => {
        console.log(data);

        reset();
    }

    return (
        <div className={css.wrap}>
            <form onSubmit={handleSubmit(submit)} className={css.form}>
                <div className={css.inputGroup}>
                    <input
                        type="text"
                        {...register('name')}
                        placeholder="Enter your name"
                        className={css.input}
                    />
                </div>

                <div className={css.inputGroup}>
                    <input
                        type="text"
                        {...register('index')}
                        placeholder="Enter your index"
                        className={css.input}
                    />
                </div>

                <button className={css.button}>Get Photo</button>
            </form>
        </div>
    );
};

export {Form};