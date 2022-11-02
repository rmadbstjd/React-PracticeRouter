import React from 'react';
import Userpage from './Userpage';
import Loginpage from './Loginpage';
import {Navigate} from 'react-router-dom';
function PrivateRoute({auth}){
    console.log(auth);
    if(auth){
        
        return (
        
            <Userpage></Userpage>
        
        );
    }
    else {
        
        return(
            <Navigate to="/login"></Navigate> //login Page로 redirect
        )
    }
};

export default PrivateRoute;