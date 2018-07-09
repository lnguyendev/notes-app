import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: ''
        };
    }

    onSubmit(e) {
        e.preventDefault();

        let email = this.refs.email.value.trim();
        let password = this.refs.password.value.trim();

        this.props.loginWithPassword({email}, password, (error) => {
            if (error) {
                this.setState({
                    error: 'Unable to login. Check email and password.'
                });
            } else {
                this.setState({
                    error: ''
                });
            }
        });
    }

    render() {
        return (
            <div className="boxed-view">
                <div className="boxed-view-box">
                    <h1>Login</h1>
                    {this.state.error && <p>{this.state.error}</p>}
                    <form onSubmit={this.onSubmit.bind(this)} noValidate className="boxed-view-form">
                        <input type="email" ref="email" name="email" placeholder="Email" />
                        <input type="password" ref="password" name="password" placeholder="Password" />
                        <button className="button">Login</button>
                    </form>
                    <Link to="/signup">Create an account</Link>
                </div>
            </div>
        );
    }
};

Login.propTypes = {
    loginWithPassword: PropTypes.func.isRequired
};

export default createContainer(() => {
    return {
        loginWithPassword: Meteor.loginWithPassword
    };
}, Login);