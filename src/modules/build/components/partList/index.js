import React from 'react'
import PartItem from '../partItem';


class PartList extends React.Component {

    getPartList = () =>{
        const { parts } = this.props
        if (parts.length) {
            return parts.map((part, index) => {
                const title =  `${part.manufacturer} ${part.model_name}`
                return (
                    <React.Fragment>
                        <PartItem key={index} id={index} title={title} builder={false} ></PartItem>
                        <hr/>
                    </React.Fragment>
                );
            });
        }
        return <span>NO luck</span>
    }

    render() {
        const { loading } = this.props;
        if(!loading){
            const partList = this.getPartList();
            return (
                <React.Fragment>
                    <div className="pa3">
                        {partList}
                    </div>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <div className="tc mt1">Loading</div>
                </React.Fragment>
            );
        }
    }
}


export default PartList;