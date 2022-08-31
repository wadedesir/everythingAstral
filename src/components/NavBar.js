import React from 'react';

import DonateButton from './DonateButton';
import colors from '../config/colors';

function NavBar(props) {
    return (
        <div style={Styles.container}>
            <div style={Styles.logo}>
                Astral<span style={Styles.atlas}>Atlas</span>
            </div>
            <ul style={Styles.nav} className='nav' >
                <li>Home</li>
                <li>Guides</li>
                <li>Attractions</li>
                <li>Help</li>
            </ul>
            <DonateButton className='border'/>
        </div>
    );
}

const Styles = {
    container: {
        color: 'white',
        width: '95vw',
        margin: 'auto',
        height: '50px',
        backgroundColor: 'rgba(158,224,250, 0.2)',
        padding: '5px',
        marginTop: '15px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        fontFamily: 'Maven Pro'
    },
    logo: {
        padding: '10px',
        height: '50px',
        fontWeight: '900',
        fontSize: '32px'
    },
    atlas: {
        color: colors.quart
    },
    nav: {
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: '700',
        padding: 0,
        margin: 0,
        height: '100%',
    },
    donate: {
        width: '100px',
        height: '50px',
        // display: 'block',
        margin: 0
    },
}

export default NavBar;