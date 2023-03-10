import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'
const ProtectedRoute = props => {
    
    const getId = localStorage.getItem("id")
    if (getId === null) {
        return <Redirect to="/login" />
    }
    return <Route {...props} />
    
}

export default ProtectedRoute