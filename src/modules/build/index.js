import React from 'react';
import { connect } from 'react-redux';

class Build extends React.Component {


    render() {
        return (
            <h1 className="tc">This is the Build page</h1>
        );
    }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(Build);