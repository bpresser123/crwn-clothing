import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sing-up.component';
import './sign-in-and-sign-up.styles.scss';

const signInAnsSignUp = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>
)

export default signInAnsSignUp;