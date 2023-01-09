import React, { useState, useEffect } from 'react';
import ConnectivityScreen from './ConnectivityScreen'
import DetailScreen from './DetailScreen'
import ListScreen from './ListScreen'
import ShareScreen from './ShareScreen'
function App() {
    const [serverHealth, setServerHealth] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function checkServerHealth() {
            try {
                const response = await fetch('http://localhost:3000/health');
                const data = await response.json();
                setServerHealth(data.health);
            } catch (err) {
                setServerHealth('unhealthy');
            }
            setIsLoading(false);
        }
        checkServerHealth();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (serverHealth === 'healthy') {
        return <ListScreen />;
    }

    return (
        <div>
            <p>Server is not healthy</p>
            <button onClick={checkServerHealth}>Retry</button>
        </div>
    );
}

export default App;
