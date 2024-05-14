// StubIconPage.js

import React from 'react';
import foodlogo from './img-visa/foodlogo.png'

const StubIconPage = ({ onLogoClick }) => {
    return (
        <div style={styles.container}>
            <img
                src={foodlogo}// Replace with the path to your stub icon image
                alt="Stub Icon"
                style={styles.logo}
                onClick={onLogoClick}
            />
        </div>
    );
};

// Inline styles for the component
const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
    logo: {
        width: '200px', // Adjust the width as needed
        cursor: 'pointer',
    },
};

export default StubIconPage;
