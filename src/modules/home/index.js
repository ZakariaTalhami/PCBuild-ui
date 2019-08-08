import React from 'react'
import { connect } from 'react-redux'

class Home extends React.Component {


    render() {
        return (
            <h1 className="tc">This is the home page</h1>
        );
    }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(Home);