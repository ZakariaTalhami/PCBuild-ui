import React from 'react';

function getStyle(radius) {
    var rad = radius ? radius: 50;
    return {
        borderRadius: rad+"px"
    };
}

function RoundIcon({ src, radius }) {
    // import icon from src;
    return(
        <React.Fragment>
            <img src={src} style={getStyle(radius)} alt="asdsa"></img>
        </React.Fragment>
    );
}


export default RoundIcon;