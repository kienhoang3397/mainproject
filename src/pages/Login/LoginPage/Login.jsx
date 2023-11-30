import React, { useState } from 'react';
import Logo from '../../../common/components/Logos/Logo';
import styles from './LoginPage.module.css';
import { FormInputt } from '../../../common/components/Forms/FormInput/FormInput';
import Btn from '../../../common/components/Buttons/Button';
import { Link, useNavigate } from 'react-router-dom';
import { RiLockPasswordLine } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../../redux/slice/apiRequest';
import { useForm } from 'react-hook-form';
import { string, z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
    username: string().min(6, { message: 'Tên người dùng ít nhất phải có 6 ký tự.' }).max(20, { message: 'Tên người dùng không được quá 20 ký tự.' }),
    password: string().min(1, { message: 'Vui lòng nhập mật khẩu !' }),
});

function LoginPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
   
    const msg = useSelector((state) => state.auth?.login.msg);
    const [userData, setUserData] = useState({ username: '', password: '' });
    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        console.log(userData)
    };

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) });

    const handleSign = () => {
        loginUser(userData, dispatch, navigate);
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
    };

    return (
        <div className={styles.loginPageContainer}>
           
            <section className={styles.imgLogin}><img src="https://i.ibb.co/hFXwLcv/imgLogin.png" alt="" /></section>
            <section className={styles.formLogin}>
            
                <div className={styles.theme}><Logo greyLogo width={'44px'} height={'44px'} /> <p className={styles.text}>ex.iphones.</p></div>
                <p className={styles.textLogin}>Login</p>
                <form className={styles.form} onSubmit={handleSubmit(handleSign)}>
                    <FormInputt
                        placeholder={'Enter your name '}
                        label="Username"
                        name="username"
                        type="text"
                        register={register}
                        value={userData.username}
                        onChange={handleChange}
                        errorMessage={errors?.username?.message || msg}
                    />
                    <FormInputt
                        prefix={<RiLockPasswordLine />}
                        placeholder={'Enter your password '}
                        label="Password"
                        name="password"
                        type="password"
                        register={register}
                        value={userData.password}
                        onChange={handleChange}
                        errorMessage={errors?.password?.message || msg}
                    />
                    <Btn defaultValue handleBtn={handleSign} content={'Login'} />
                </form>
                <section className={styles.shapeForm}>
                    <div className={styles.shapeW}></div>
                    <p className={styles.shapeFormText}>OR</p>
                    <div className={styles.shapeW}></div>
                </section>
                <section className={styles.googleSignup}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                        <g clipPath="url(#clip0_47_7452)">
                            <path d="M16.15 8.18183C16.15 7.61456 16.0991 7.06911 16.0045 6.54547H8.46997V9.64002H12.7754C12.59 10.64 12.0263 11.4873 11.1791 12.0546V14.0618H13.7645C15.2772 12.6691 16.15 10.6182 16.15 8.18183Z" fill="#4285F4" />
                            <path d="M8.46989 16C10.6299 16 12.4408 15.2837 13.7644 14.0618L11.179 12.0546C10.4626 12.5346 9.54626 12.8182 8.46989 12.8182C6.38626 12.8182 4.62262 11.4109 3.99353 9.52002H1.3208V11.5927C2.63716 14.2073 5.34262 16 8.46989 16Z" fill="#34A853" />
                            <path d="M3.99361 9.52001C3.83361 9.04001 3.7427 8.52729 3.7427 8.00001C3.7427 7.47274 3.83361 6.96001 3.99361 6.48001V4.40729H1.32088C0.779062 5.48729 0.469971 6.70911 0.469971 8.00001C0.469971 9.29092 0.779062 10.5127 1.32088 11.5927L3.99361 9.52001Z" fill="#FBBC05" />
                            <path d="M8.46989 3.18182C9.64444 3.18182 10.699 3.58545 11.5281 4.37818L13.8226 2.08364C12.4372 0.792727 10.6263 0 8.46989 0C5.34262 0 2.63716 1.79273 1.3208 4.40727L3.99353 6.48C4.62262 4.58909 6.38626 3.18182 8.46989 3.18182Z" fill="#EA4335" />
                        </g>
                        <defs>
                            <clipPath id="clip0_47_7452">
                                <rect width="16" height="16" fill="white" transform="translate(0.469971)" />
                            </clipPath>
                        </defs>
                    </svg>
                    <p className={styles.googleSignupContent}>Continue with Google (Coming Soon ...)</p>
                </section>
                <section className={styles.questionSignup}>
                    <p className={styles.question}>Don't have an account?</p>
                    <Link to={'/register'} className={styles.signupNow}>Sign up now</Link>
                </section>
            </section>
            {isSubmitted && (
            <div className={styles.alertContainer}>
            {msg}
            </div>
          )}
        </div>
    );
}

export default LoginPage;
