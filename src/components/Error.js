import React from 'react';
import './styles.css'

const Error = ({message}) => {
    return ( <div>
        <p id='error'>{message}</p>
    </div> );
}
 
export default Error;