import React from 'react'
import './style.css'

function PartSpec({ part }) {
    const formatSpecKey = (text) => {
        text = text.replace('_', " ")
        return text[0].toUpperCase() + text.slice(1)
    } 

    const formatSpec = (spec) => {
        if(typeof spec === 'boolean'){
            spec = spec ? 'Yes':'No';
        }
        return spec;
    }

    const getSpec = () => {
        return Object.keys(part).filter(spec => spec !== 'id').map(spec => {
            return (
                <React.Fragment>
                    <dt >{formatSpecKey(spec)}:</dt>
                    <dd>{formatSpec(part[spec])}</dd>
                </React.Fragment>
            );
        })
    }

    const getTitle = () => {
        return `${part.manufacturer} ${part.model_name}`
    }

    return (
        <React.Fragment>
            <h2>{getTitle()}</h2>
            <dl className="spec-listing">
                {getSpec()}
            </dl>
        </React.Fragment>
    );
}

export default PartSpec;