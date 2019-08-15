import React from 'react'
import { connect } from 'react-redux'
import PartList from './components/partList';
import Builder from './components/builder';
import './style.css'
import SectionHeader from '../app/components/sectionHeader';
import { getPartList } from './actions';


class Build extends React.Component {

    componentWillMount(){
        this.props.getPartList(this.props.selection)
    }

    render() {
        const { build, parts, isLoadingParts } = this.props
        return (
            <div className="builder-page">
                    <h1 className="tc">This is the Build page</h1>
                <div className="container">
                    <section className="builder-sidebar">
                        <SectionHeader title="Builder"></SectionHeader>
                        <Builder build={build}></Builder>
                    </section>
                    <section className="builder-part-list">
                        <SectionHeader title="Parts"></SectionHeader>
                        <PartList parts={parts} loading={isLoadingParts}></PartList>
                    </section>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    parts: state.build.parts,
    selection: state.build.selection,
    build: state.build.build,
    isLoadingParts: state.build.isLoadingParts
});


export default connect(
    mapStateToProps,
    { getPartList }
)(Build);