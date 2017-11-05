import React from 'react';

// Greeting.propTypes = {
//     name: PropTypes.string.isRequired
// };

export default function Greeting({name}) {
    return (
        <p>Hello {name ? name : 'Stranger'}</p>
        );
}