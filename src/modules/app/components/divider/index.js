import React from 'react';
import './style.css'

function Divider({ direction, children }) {
    const classDiv = `${direction.toLowerCase()}IconDiv`
    return(
        <div className={classDiv}>
            {children}
        </div>
    );
}

export default Divider;