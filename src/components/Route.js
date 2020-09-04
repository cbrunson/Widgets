import React, { useState, useEffect } from 'react';

const Route = ({ path, children }) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const onLocationChange = () => {
            console.log('Location Change');
        };
        return () => {
            window.addEventListener('popstate', onLocationChange);
        };
    },[]);

    return currentPath === path ? children : null;
};

export default Route;