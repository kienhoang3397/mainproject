import { LockOutlined, MailOutlined, PhoneOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';
import { ConfigProvider, Input } from 'antd';
import clsx from 'clsx';
import React, { useState } from 'react';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import styles from './FormInput.module.css';

const theme = {
  components: {
    Input: {
      activeBg: 'none',
      hoverBg: 'none',
      colorPrimary: 'none',
      colorPrimaryHover: 'none',
      colorText: 'none',
      fontSize: 16,
      colorBgContainer: 'transparent',
      colorTextPlaceholder: '#8B8E99',
    },
  },
};



function FormInput({ placeholder = 'PlaceHolder', title = 'Text', val, handleChange }) {
  return (
    <div className={styles.form}>
      <p className={styles.title}>{title}</p>
      <ConfigProvider theme={theme}>
        <Input
          className={styles.input}
          placeholder={placeholder}
          value={val}
          onChange={handleChange}
        />
      </ConfigProvider>
    </div>
  );
}


export default FormInput;

export function FormInputDefault({ title, placeholder, val, handleChange }) {
  return (
    <div className={styles.form}>
      <p className={styles.title}>{title}</p>
      <ConfigProvider theme={theme}>
        <Input
          placeholder={placeholder}
          className={styles.input}
          value={val}
          onChange={handleChange}
        />
      </ConfigProvider>
    </div>
  );
}


export function FormInputPassword({ title, val, handleChange }) {
  return (
    <div className={styles.form}>
      <p className={styles.title}>{title}</p>
      <ConfigProvider theme={theme}>
        <Input.Password
          placeholder='Enter your password'
          className={styles.input}
          prefix={<LockOutlined className={styles.icon} />}
          value={val}
          onChange={handleChange}
        />
      </ConfigProvider>
    </div>
  );
}


export function FormInputEmail({ dark, light, val, handleChange }) {
  const inputClasses = clsx(styles.input, {
    [styles.dark]: dark,
    [styles.light]: light,
  });

  return (
    <div className={styles.form}>
      <p className={styles.title}>Email</p>
      <ConfigProvider theme={theme}>
        <Input
          className={inputClasses}
          placeholder='Enter Your Mail'
          prefix={<MailOutlined className={styles.icon} />}
          value={val}
          onChange={handleChange}
        />
      </ConfigProvider>
    </div>
  );
}



export function FormInputUsername({ dark, light, val, handleChange }) {
  const inputClasses = clsx(styles.input, {
    [styles.dark]: dark,
    [styles.light]: light,
  });

  return (
    <div className={styles.form}>
      <p className={styles.title}>Username</p>
      <ConfigProvider theme={theme}>
        <Input
          value={val}
          onChange={handleChange}
          className={inputClasses}
          placeholder='Enter Your Username'
          prefix={<UserOutlined className={styles.icon} />}
        />
      </ConfigProvider>
    </div>
  );
}


export const FormInputt = ({ defaultValue, placeholder, fontFamily, dark, light, label, name, type, register, val, onChange, errorMessage, prefix }) => {
  const inputClasses = clsx(styles.input, {
    [styles.dark]: dark,
    [styles.light]: light,
  });

  const titleClasses = clsx(styles.title, {
    [styles.darkTitle]: dark, 
    [styles.light]: light,
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <div className={clsx(styles.form, { [styles.dark]: dark, [styles.light]: light })}>

      <label className={titleClasses}>
        <p className={titleClasses}>{label}</p>
        <div className={styles.inputContainer}>

          <span className={styles.icon}>{prefix}</span>
          <input
            defaultValue={defaultValue}
            className={inputClasses}
            name={name}
            type={isPasswordVisible ? 'text' : type}
            {...register(name, { required: true })}
            value={val}
            onChange={onChange}
            placeholder={placeholder}
          />
          {type === 'password' && (
            <button
              className={styles.toggleButton}
              onClick={togglePasswordVisibility}
            > {isPasswordVisible ? <FaEye /> : <FaEyeSlash />}</button>
          )}
          <div className={styles.error}>{errorMessage}</div>
        </div>
      </label>

    </div>
  );
};

export function FormInputtFrame({ dark, light, label, content }) {
  const containerClasses = clsx(styles.form, {
    [styles.dark]: dark,
    [styles.light]: light,
  });

  return (
    <div className={containerClasses}>
      <p className={styles.titleFrame}>{label}</p>
      <div className={styles.inputContainerFrame}>
        <div className={styles.input}>
          {content || 'Null'}
        </div>
      </div>
    </div>
  );
}






export function FormInputPhoneNumber({ dark, light, title, val, handleChange }) {
  const inputClasses = clsx(styles.input, {
    [styles.dark]: dark,
    [styles.light]: light,
  });

  return (
    <div className={styles.form}>
      <p className={styles.title}>{title}</p>
      <ConfigProvider theme={theme}>
        <Input
          className={inputClasses}
          placeholder='Enter Your PhoneNumber'
          prefix={<PhoneOutlined className={styles.icon} />}
          value={val}
          onChange={handleChange}
        />
      </ConfigProvider>
    </div>
  );
}

export function FormInputSearch({ dark, light, val, handleChange }) {
  const inputClasses = clsx(styles.input, {
    [styles.dark]: dark,
    [styles.light]: light,
  });

  return (
    <div className={styles.form}>
      <ConfigProvider theme={theme}>
        <Input
          className={inputClasses}
          placeholder='Search.....'
          suffix={<SearchOutlined className={styles.icon} />}
          value={val}
          onChange={handleChange}
        />
      </ConfigProvider>
    </div>
  );
}
