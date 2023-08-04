import React from 'react';

import './Dialog.css';

const Dialog = props => {
    return (
        <div className="Dialog__container">{props.children}</div>
    );
};

export default Dialog;