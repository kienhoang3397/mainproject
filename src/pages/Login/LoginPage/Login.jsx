import React, { useEffect, useState } from 'react';
import Theme from '../../../common/components/Themes/Theme';
import Logo from '../../../common/components/Logos/Logo';
import styles from './LoginPage.module.css';
import { FormInputEmail, FormInputPassword, FormInputUsername } from '../../../common/components/Forms/FormInput/FormInput';
import Btn from '../../../common/components/Buttons/Button';
import { Link, Navigate, useNavigate, } from 'react-router-dom';

import { auth } from '../../../firebase';

import { useDispatch } from 'react-redux';
import { loginUser, loginUserr } from '../../../redux/slice/apiRequest';


function LoginPage() {
    const clientId  = "638983681675-pg59a2ik0pn0gcck4alfqah3toondsk3.apps.googleusercontent.com"

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [emailVal, setEmailVal] = useState('');
    const [passwordVal, setPasswordVal] = useState('');

    const handleChangeEmail = (event) => {
        const email = event.target.value;
        setEmailVal(email);

    };

    const handleChangePassword = (event) => {
        const password = event.target.value;
        setPasswordVal(password);
    };
    const handleSign = () => {

        const newUser = {
            username: emailVal,
            password: passwordVal,
        }
        loginUser(newUser, dispatch, navigate)

    }
  

    return (
        <div className={styles.loginPageContainer}>
            
            <section className={styles.imgLogin}><img src="https://i.ibb.co/hFXwLcv/imgLogin.png" alt="" /></section>
            <section className={styles.formLogin}>
                <Theme greyText width={'1000px'} height={'100px'} />
                <p className={styles.textLogin}>Login</p>
                <FormInputEmail val={emailVal} handleChange={handleChangeEmail} />
                <FormInputPassword val={passwordVal} handleChange={handleChangePassword} />
                <p className={styles.forgotPassword}>Forgot password?</p>
                <Btn defaultValue handleBtn={handleSign} content={'Login'} />
                <section className={styles.shapeForm}>
                    <div className={styles.shapeW}></div>
                    <p className={styles.shapeFormText}>OR</p>
                    <div className={styles.shapeW}></div>
                </section>
                <section className={styles.googleSignup}>
                <GoogleLogin
                    <p className={styles.googleSignupContent}>Continue with Google</p>
                </section>
                <section className={styles.questionSignup}>
                    <p className={styles.question}>Don't have an account?</p>
                    <p className={styles.signupNow}>Sign up now</p>
                </section>
            </section>
        </div>
    );
}

export default LoginPage;
