import { useState, useEffect } from 'react';
import Login from '../../components/login';
import Navbar from '../../components/navbar';
import '@/styles/globals.css'

const App = ({ Component, pageProps }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedId = localStorage.getItem('pirateId');
        if (storedId) {
            setIsLoggedIn(true);
        }
    }, []);

    if (!isLoggedIn) {
        return <Login onLogin={() => setIsLoggedIn(true)} />;
    }

    return <>
        { isLoggedIn && <Navbar /> }
        <Component {...pageProps} />
    </>
}

export default App;
