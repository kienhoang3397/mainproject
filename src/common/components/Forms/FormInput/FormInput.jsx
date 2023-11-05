import React, { useState } from 'react';
import { LockOutlined, MailOutlined, PhoneOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';
import { ConfigProvider, Input, Space } from 'antd';
import styles from './FormInput.module.css';
import clsx from 'clsx';

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



function FormInput({ placeholder = 'PlaceHolder', title = 'Text' }) {
  return (
    <div className={styles.form}>
      <p className={styles.title}>{title}</p>
      <ConfigProvider theme={theme}>
        <Input
          className={styles.input}
          placeholder={placeholder}
        />
      </ConfigProvider>
    </div>
  );
}

export default FormInput;

export function FormInputDefault({placeholder}) {
  return (
    <div className={styles.form}>
     
      <ConfigProvider theme={theme}>
        <Input   placeholder={placeholder} className={styles.input} />
      </ConfigProvider>
    </div>
  );
}

export function FormInputPassword() {
  return (
    <div className={styles.form}>
      <p className={styles.title}>Password</p>
      <ConfigProvider theme={theme}>
        <Input.Password placeholder='Enter your password' className={styles.input} prefix={<LockOutlined className={styles.icon} />} />
      </ConfigProvider>
    </div>
  );
}

export function FormInputEmail({ dark, light }) {
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

        />
      </ConfigProvider>
    </div>
  );
}


export function FormInputUsername({ dark, light }) {
  const inputClasses = clsx(styles.input, {
    [styles.dark]: dark,
    [styles.light]: light,
  });



  return (
    <div className={styles.form}>
      <p className={styles.title}>Username</p>
      <ConfigProvider theme={theme}>
        <Input
          className={inputClasses}
          placeholder='Enter Your Username'
          prefix={<UserOutlined className={styles.icon} />}

        />
      </ConfigProvider>
    </div>
  );
}

export function FormInputPhoneNumber({ dark, light }) {
  const inputClasses = clsx(styles.input, {
    [styles.dark]: dark,
    [styles.light]: light,
  });



  return (
    <div className={styles.form}>
      <p className={styles.title}>Phone Number</p>
      <ConfigProvider theme={theme}>
        <Input
          className={inputClasses}
          placeholder='Enter Your PhoneNumber'
          prefix={<PhoneOutlined className={styles.icon} />}

        />
      </ConfigProvider>
    </div>
  );
}
export function FormInputSearch({ dark, light }) {
 
  

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

        />
      </ConfigProvider>
    </div>
  );
}