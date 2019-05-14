import React, {Fragment} from 'react';
import {Redirect} from 'react-router-dom';

class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    };

    handleSubmit = (event) => {
        event.preventDefault();
        if((this.state.username === 'Admin')&&(this.state.password === '12345')) {
            localStorage.setItem('isLogged', true);
            this.setState({ login : '', password : ''});
        }
        else {
            localStorage.setItem('isLogged', false);
            alert('Incorrect login or password')
        }
    };

    onChangeUsername = (event) => {
        const {target: {value}} = event;
        this.setState({username: value});
    };

    onChangePassword = (event) => {
        const { target: { value } } = event;
        this.setState({password: value});
    };

    render() {
        const {username, password} = this.state;
        return (
            <Fragment>
                {
                    !localStorage.getItem('isLogged') ?
                    (
                        <form id='login-form' onSubmit={this.handleSubmit}>
                            <div>
                                <input required type='text' name='username' value={username} placeholder='Login' onChange={this.onChangeUsername} />
                            </div>
                            <div>
                                <input required type='password' name='password' value={password} placeholder='Password' onChange={this.onChangePassword} />
                            </div>
                            <button type="submit">Log In</button>
                        </form>
                    ) : <Redirect to="/profile" />
                }
            </Fragment>
        );
    }
}

export default LoginPage;