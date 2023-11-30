import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getAllUser, updateUser } from '../../redux/slice/apiRequest';
import Btn from '../../common/components/Buttons/Button';
import { FormInputt, FormInputtFrame } from '../../common/components/Forms/FormInput/FormInput';
import { useForm } from 'react-hook-form';

import styles from './Profile.module.css';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Alert, AlertTitle, Stack } from '@mui/material';


// First form schema without currentPassword
const schemaWithoutCurrentPassword = yup.object().shape({
  username: yup.string(),
  phonenumber: yup.string().matches(/^\d{8}$/, 'Phone number must have exactly 8 digits'),
  email: yup.string().email('Invalid email format'),
});

// Second form schema with currentPassword
const schemaWithCurrentPassword = yup.object().shape({
  ...schemaWithoutCurrentPassword.fields, // Include fields from the first schema
  password: yup.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
  currentPassword: yup.string().required('Current Password is required'),
});

function Profile() {

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmittedPassword, setIsSubmittedPassword] = useState(false);
  const dispatch = useDispatch();

  const [imgSrc, setImgSrc] = useState("https://t4.ftcdn.net/jpg/02/19/17/07/360_F_219170739_FmBbreSQRvr23mLnpoenOzxIQbOwKnUP.jpg");
  const user = useSelector((state) => state.auth.login.currentUser?.user);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    username: user?.username || '',
    phonenumber: user?.phonenumber || '',
    email: user?.email || '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // First form
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schemaWithoutCurrentPassword),
  });

  const onSubmit = async (data) => {
    try {
      await schemaWithoutCurrentPassword.validate(data, { abortEarly: false });
      const newInfoUser = {
        username: data.username,
        phonenumber: data.phonenumber,
        email: data.email,
      };
      setIsSubmitted(true);
      updateUser(newInfoUser, user?._id, dispatch);
      setTimeout(() => {
        setIsSubmitted(false);
      }, 4000);
      console.log('Submitting Form 1', data);
    } catch (err) {
      console.error(err.errors);
      const validationErrors = err.errors.map((error) => `Validation Error - ${error.path}: ${error.message}`);
      setError(validationErrors.join('\n'));
      setTimeout(() => {
        setError(null);
      }, 5000);
    }
  };

  // Second form
  const { register: register2, handleSubmit: handleSubmit2, formState: { errors: errors2 } } = useForm({
    resolver: yupResolver(schemaWithCurrentPassword),
  });

  const onSubmit2 = async (data) => {
    try {
      await schemaWithCurrentPassword.validate(data, { abortEarly: false });

      if (data.currentPassword !== user?.password) {
        setError('Current Password does not match your actual password');
        setTimeout(() => {
          setError(null);
        }, 5000);
        return;
      }

      const newInfoUser = {
        password: data.password,
      };

      setIsSubmittedPassword(true);
      updateUser(newInfoUser, user?._id, dispatch);

      setTimeout(() => {
        setIsSubmittedPassword(false);
      }, 4000);

    } catch (err) {
      console.error(err.errors);
      const validationErrors = err.errors.map((error) => `Validation Error - ${error.path}: ${error.message}`);
      setError(validationErrors.join('\n'));
      setTimeout(() => {
        setError(null);
      }, 5000);
    }
  };
  const closeAlerts = () => {
    setIsSubmitted(false);
    setIsSubmittedPassword(false);
    setError(null);
  };

  const renderAlert = (severity, title, message, key) => (
    <Alert key={key} severity={severity} onClose={closeAlerts}>
      <AlertTitle>{title}</AlertTitle>
      {message}
    </Alert>
  );

  const nulll = () => { };

  return (
    <div className={styles.container}>
      <section className={styles.alert}>
        {isSubmitted && renderAlert("success", "Success", "Account updated successfully!", "success-alert")}
        {isSubmittedPassword && renderAlert("success", "Success", "Password updated successfully!", "password-success-alert")}
        {error && !isSubmitted && renderAlert("error", "Error", error, "error-alert")}

      </section>
      <section className={styles.fieldSettingHeading}>
        <p className={styles.settingHeading}>Account Setting</p>
      </section>
      <div className={styles.containerForm}>
        <section className={styles.accountSetting}>


          <main className={styles.main}>
            <div className={styles.imgMainField}>
              <img
                className={styles.imgMain}
                src={imgSrc}
                alt=""
              />
            </div>
            <div className={styles.content}>
              <form onSubmit={handleSubmit(onSubmit)} className={styles.inputField}>
                <FormInputtFrame
                  dark
                  register={register}
                  type={'username'}
                  label={'New username'}
                  content={user?.username}
                  name={'username'}
                />

                <div className={styles.contentContact}>
                  <FormInputt
                    dark
                    register={register}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    type={'phonenumber'}
                    label={'New phonenumber'}
                    placeholder={user?.phonenumber}
                    defaultValue={user?.phonenumber}
                    name={'phonenumber'}
                    errorMessage={errors?.phonenumber?.message}
                  />
                  <FormInputt
                    dark
                    register={register}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    type={'email'}
                    label={'New email'}
                    placeholder={user?.email}
                    defaultValue={user?.email}
                    name={'email'}
                    errorMessage={errors?.email?.message}
                  />
                </div>
                <Btn defaultValue content={'Save Changes'} type="submit" width={'150px'} height={'50px'}></Btn>
              </form>
            </div>
          </main>
        </section>

        <section className={styles.accountSetting}>
          <section className={styles.fieldSettingHeading}>
            <p className={styles.settingHeading}>Change Password</p>
          </section>

          <main className={styles.main}>
            <div className={styles.content}>
              <form onSubmit={handleSubmit2(onSubmit2)} className={styles.inputField}>
                <FormInputt
                  dark
                  register={register2}
                  onChange={handleChange}
                  name={'currentPassword'}
                  type={'password'}
                  label={'Current Password'}
                  errorMessage={errors2?.currentPassword?.message}
                />
                <FormInputt
                  dark
                  register={register2}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  type={'password'}
                  label={'New Password'}
                  placeholder={'8+ characters'}
                  name={'password'}
                  errorMessage={errors2?.password?.message}
                />
                <FormInputt
                  dark
                  register={register2}
                  onChange={handleChange}
                  name={'confirmPassword'}
                  type={'password'}
                  label={'Confirm Password'}
                  errorMessage={errors2?.confirmPassword?.message}
                />
                <Btn defaultValue content={'Change Password'} type="submit" width={'250px'} height={'50px'}></Btn>
              </form>
            </div>
          </main>
        </section>
      </div>

    </div>
  );
}

export default Profile;
