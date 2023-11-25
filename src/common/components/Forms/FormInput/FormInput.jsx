import React, { useState } from 'react';
import { LockOutlined, MailOutlined, PhoneOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';
import { ConfigProvider, Input, Space } from 'antd';
import styles from './FormInput.module.css';
import clsx from 'clsx';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

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
export const FormInputt = ({ placeholder, dark, light, label, name, type, register, value, onChange, errorMessage, prefix }) => {
  const inputClasses = clsx(styles.input, {
    [styles.dark]: dark,
    [styles.light]: light,
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <div className={styles.form}>

      <label className={styles.label} >
        <p className={styles.title} >{label}</p>
        <div className={styles.inputContainer}>

          <span className={styles.icon}>{prefix}</span>
          <input
            className={inputClasses}
            name={name}
            type={isPasswordVisible ? 'text' : type}
            {...register(name, { required: true })}
            value={value}
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
