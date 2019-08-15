import React from 'react'
import { connect } from 'react-redux'
import RoundIcon from '../../../app/components/roundIcon';
import icon from './testImage'
import Divider from '../../../app/components/divider';
import './style.css'
import { switchPartSelection, addPart  } from '../../actions'

class PartItem extends React.Component {

    clickItem = () => {
        const { id, selection, builder, switchPartSelection, addPart } = this.props;
        if (builder) {
            if(id !== selection){
                switchPartSelection(id)
            }
        } else {
            addPart(id)
        }
    }

    render() {
        const { title, body, id} = this.props;
        return (
            <div className="item" onClick={this.clickItem} data-tip data-for={id}>
                <Divider direction='right'>
                    <div style={{width: "40px", height: "40px"}}>
                            <RoundIcon src={icon}></RoundIcon>
                    </div>
                </Divider>
                <div className="item-body">
                    <div className="item-title">
                        {title}
                    </div>
                    <div>
                        {body}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    selection: state.build.selection
});

export default connect(
    mapStateToProps,
    { switchPartSelection, addPart }
    )(PartItem);