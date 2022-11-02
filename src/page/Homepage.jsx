import React from 'react';
import {Link} from 'react-router-dom';
const Homepage = () => {
    return (
        <div>
            <h1>HomePage</h1>
            <Link to="/about">We go about Page!!</Link>
        </div>
    );
};

export default Homepage;