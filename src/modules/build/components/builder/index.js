import React from 'react';
import PartItem from '../partItem';
import ReactTooltip from 'react-tooltip'
import PartSpec from '../partSpec';

class Builder extends React.Component {

    test(ev){
        console.log("clicked")
    }

    getPartList(build){
        return Object.keys(build).map(key => {
            const title = key[0].toUpperCase() + key.slice(1);
            const body = (build[key]) ? `${build[key].manufacturer} ${build[key].model_name}` : `Choose ${key}`
            var tooltip = []
            if(build[key]) {
                tooltip = (
                    <ReactTooltip id={key} effect='solid' place="right" type='error'>
                        <PartSpec part={build[key]}></PartSpec>  
                    </ReactTooltip>
                );
            }
            return (
                <React.Fragment>
                    <PartItem key={key} id={key} title={title} builder={true} body={body}></PartItem>
                        {tooltip}
                    <hr/>
                </React.Fragment>
            );
        });
    }

    render() {
        const { build, loading } = this.props;
        if(!loading){
            const buildParts = this.getPartList(build);
            return (
                <React.Fragment>
                    <div className="pa3">
                        {buildParts}
                    </div>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <div className="pa3">Loading</div>
                </React.Fragment>
            );
        }
    }
}

export default Builder;