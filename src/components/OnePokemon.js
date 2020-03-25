import React from 'react'
import {connect} from 'react-redux'
import axios from axios

class OnePokemon extends React.Component {
    render(){
        console.log(this.props)
        return(
            <div>
                <h1>Hello Pokemon</h1>
            </div>
        )
    }
}
const mapStateToProps = reduxState => {
    return reduxState
}

export default connect(mapStateToProps)(OnePokemon)