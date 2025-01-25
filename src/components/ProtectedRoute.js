import React from 'react';
import { Navigate } from 'react-router-dom';
import { useToken } from '../stores/token';

const ProtectedRoute = ({ element }) => {
    const { token } = useToken();

    return token ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
