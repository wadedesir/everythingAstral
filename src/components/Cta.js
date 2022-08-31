import React from 'react';

import CtaButton from './CtaButton';
import ctaImage from '../images/ctaO.png'

function Cta(props) {
    return (
        <section style={styles.container}>
            <div style={styles.cta} className=''>
                <h1 style={styles.title} className=''>
                    Have you ever wanted to... Fly?
                </h1>

                <h2 style={styles.subTitle} className=''>
                    Here we teach you how to do just that. Are you ready to explore your dreams like never before?
                </h2>

                <CtaButton />
            </div>
            <div style={styles.imageContainer} className=''>
                <img src={ctaImage} style={styles.image}/>
            </div>
        </section>
        
    );
}

const styles = {
    container: {
        display: 'flex',
        height: '100%',
        color: 'white',
        fontFamily: 'Maven Pro'
    },
    cta: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        padding: '10%',
        textAlign: 'center'

    },
    title: {
        fontWeight: 'bold',
        fontSize: '60px',
        lineHeight: '70px',
    },
    subTitle: {
        fontWeight: 'normal'
    },
    imageContainer: {
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%'
    }

}
export default Cta;