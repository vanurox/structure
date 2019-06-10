import React, { Component } from 'react';
import cookies from 'react-cookies';

class Index extends Component {

    constructor(props){
        super(props);
        console.log(cookies.load('role'));
        if(cookies.load('role') !== "admin"){
            this.props.history.push('/');
        }
    }

    logout = () => {
        cookies.remove('role');
        this.props.history.push('/login');
    }
    render() {
        return (
            <div>
                From Admin     
                <button
                    onClick={this.logout}
                >Logout</button>
            </div>
        );
    }
}

export default Index;