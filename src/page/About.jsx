import React from 'react';
import {useNavigate} from 'react-router-dom';
const About = () => {
    const navigate = useNavigate();
    const goToHomepage = () => {
        navigate('/');
    };
    return (
        <div>
            My About Page
            <button onClick={goToHomepage}>We Go Home!</button>
        </div>
    );
};

export default About;