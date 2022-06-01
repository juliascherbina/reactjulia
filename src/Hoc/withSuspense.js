import { Navigate } from "react-router-dom"
import React from "react"
import { connect } from 'react-redux';



export const WithSuspense = (Component) => {
    return (props) => {
        return <React.Suspense fallback={<div>Завантаження...</div>}>
            <Component  {...props} />
        </React.Suspense>
    };
}
