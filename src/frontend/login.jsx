import { Button, Input, Typography } from 'antd';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { LoginDiv, StyledDiv } from './styles/styles';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoginSuccess, setIsLoginSuccess] = useState(false);
    const history = useHistory();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // You can add your own logic for handling the form submission here
        console.log('Email:', email);
        console.log('Password:', password);

        setIsLoginSuccess(true)
        setTimeout(() => {

            history.push('/events')
        }, 2000)
    };

    return (
        <React.Fragment>
            <LoginDiv>
                <StyledDiv>
                    <Typography.Text htmlFor="email">Email</Typography.Text>
                    <Input size='small' type='email' value={email} onChange={handleEmailChange} />
                </StyledDiv>

                <StyledDiv>
                    <Typography.Text htmlFor="password">Password</Typography.Text>
                    <Input size='small' type='password' value={password} onChange={handlePasswordChange} />

                </StyledDiv>
                <Button type='default' onClick={handleSubmit} disabled={isLoginSuccess}>Login</Button>
            </LoginDiv>

            {
                isLoginSuccess && <Typography>
                    Taking you to event listing page
                </Typography>
            }
        </React.Fragment>
    );
};

export default LoginForm;
