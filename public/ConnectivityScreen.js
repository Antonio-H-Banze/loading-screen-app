import React, { useState, useEffect } from 'react';

function NoConnectionScreen() {
    const [isConnected, setIsConnected] = useState(navigator.onLine);

    useEffect(() => {
        function handleConnectivityChange() {
            setIsConnected(navigator.onLine);
        }
        window.addEventListener('online', handleConnectivityChange);
        window.addEventListener('offline', handleConnectivityChange);
        return () => {
            window.removeEventListener('online', handleConnectivityChange);
            window.removeEventListener('offline', handleConnectivityChange);
        };
    }, []);

    if (isConnected) {
        return null;
    }

    return (
        <div>
            <p>No internet connection</p>
        </div>
    );
}

export default NoConnectionScreen;
