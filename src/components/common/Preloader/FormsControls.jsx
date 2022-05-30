

import React from "react"
import { Field } from "redux-form"
import styles from './FormsControle.module.css'







export const TextArea = ({ input, meta: { touched, error }, ...props }) => {
    const hasError = touched && error
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div> <textarea {...input} {...props} />
            </div>
            {hasError && <span> {error}</span>}


        </div>
    )

}
export const Input = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div> <input {...input} {...props} />
            </div>
            {hasError && <span> {meta.error}</span>}


        </div>
    )

}

export const CreateField = (placeholder, name, component, validate, props = {}, text = '') => {
    return <div>
        <Field placeholder={placeholder}
            name={name}
            component={component}
            validate={validate}
            {...props}
        /> {text}
    </div>
}

