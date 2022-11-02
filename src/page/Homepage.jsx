import React from 'react';
import {Link,useNavigate} from 'react-router-dom';
const Homepage = () => {
    const navigate = useNavigate();
    const goProductPage = () => {
        navigate('/product?q=pants');
    };
    return (
        <div>
            <h1>HomePage</h1>
            <Link to="/about">We go about Page!!</Link>
            <button onClick={goProductPage}>Go to Product Page</button>
        </div>
    );
};

export default Homepage;