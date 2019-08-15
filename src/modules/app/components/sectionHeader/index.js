import React from 'react'

function SectionHeader({ title }) {
    return (
        <React.Fragment>
            <div className="f3 lh-title fw6">
                { title }
            </div>
        </React.Fragment>
    );
}


export default SectionHeader;