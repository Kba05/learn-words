import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import { selectSignInInfo } from '../features/AppState/appStateReducer';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { ROUTES } from '../constants/constants';

export const RequireSignIn = ({ children }:{children:ReactJSXElement}) => {
    const location = useLocation();
    
    const signinInfo = useAppSelector(selectSignInInfo);
    const {success} = signinInfo

    if (!success) {
        return <Navigate to={ROUTES.LOGIN} state={{ from: location }}/>
    }
    return children;
}
