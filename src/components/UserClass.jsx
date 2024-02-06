import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            count: 0
        }

    }

    render(){
        return (
            <>
            <h2>Count -- {this.state.count}</h2>
            <h3>{this.props.country}</h3>
            </>
        )
    }

}


export default UserClass;