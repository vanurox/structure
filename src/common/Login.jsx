import React, { Component } from 'react';
import cookies from 'react-cookies';

class Login extends Component {
    login = () =>{
        cookies.save('role', 'admin');
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                From Login component.
                <button
                    onClick={this.login}
                >Login</button>
            </div>
        );
    }
}

export default Login;