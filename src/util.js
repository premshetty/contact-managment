import React, { useEffect, useState } from 'react'

export const useMobileChecker = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Add event listener to handle window resize
        window.addEventListener('resize', handleResize);

        // Initial check on component mount
        handleResize();

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return isMobile
}
