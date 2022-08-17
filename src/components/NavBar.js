import React from 'react';

import colors from '../config/colors';

function NavBar(props) {
    return (
        <div style={Styles.container}>
            <div style={Styles.logo} className='border'>
                Astral-<span style={Styles.atlas}>Atlas</span>
            </div>
            <div style={Styles.nav} className='border' >
                
            </div>
            <button style={Styles.donate} className='border' >
                
            </button>
        </div>
    );
}

const Styles = {
    container: {
        // color: 'white',
        width: '100vw',
        height: '50px',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        // paddingLeft: '20%',
        // paddingRight: '20%',
    },
    logo: {
        // width: '50px',
        padding: '10px',
        height: '50px',
        fontWeight: 'Bold',
        fontSize: '30px'
    },
    atlas: {
        color: colors.secondary
    },
    nav: {
        // flex: 1,

    },
    donate: {
        width: '100px',
        height: '50px',
        // display: 'block',
        margin: 0
    },
}

export default NavBar;