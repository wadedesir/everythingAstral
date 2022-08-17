import React from 'react';
import colors from '../config/colors'
import '../css/global.css'

function Layout({ children }) {
    return (
        <main style={Styles.container}>
            {children}
        </main>
    );
}

const Styles = {
    container: {
        backgroundColor: colors.primary,
        height: '100vh',
        width: '100vw'
    }
}

export default Layout;