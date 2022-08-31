import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaypal } from '@fortawesome/free-brands-svg-icons'

function DonateButton(props) {
    return (
        <button className='donateButton'>
            <span>Donate</span>
            <FontAwesomeIcon icon={faPaypal} />
        </button>
    );
}

export default DonateButton;