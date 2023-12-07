import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import Btn from "../../../common/components/Buttons/Button";
import { Alert, Input, Select } from "antd";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import styles from "./RegPage.module.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { string, z } from "zod";
import {
  fetchAllUserApi,
  registerUserApi,
} from "../../../redux/slice/userApiSlice";
import Theme from "../../../common/components/Themes/Theme";

const { Option } = Select;

const schema = z.object({
  username: string()
    .min(6, "Username must be at least 6 characters.")
    .max(20, "Username cannot exceed 20 characters."),
  email: string()
    .email("Invalid email.")
    .min(1, "Email cannot be empty.")
    .max(50, "Email cannot exceed 50 characters."),
  password: string().min(4, "Password must be at least 4 characters."),
  phonenumber: string()
    .min(1, "Phone number cannot be empty.")
    .refine(
      (value) => /^\d+$/.test(value),
      "Phone number can only contain numeric digits."
    ),
});

function RegPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const errorMessage = useSelector((state) => state.userApi?.errorMessage);
  const [error, setError] = useState("");
  const allUser = useSelector((state) => state.userApi?.allUser);
  const isLoading = useSelector((state) => state.userApi?.status === "pending");

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    phonenumber: "",
  });

  const {
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (name, value) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
    setValue(name, value);
    console.log(userData);
  };

  const onSubmit = async (data) => {
    try {
      const isUsernameExists = allUser.some(
        (user) => user.username === data.username
      );
      const isEmailExists = allUser.some((user) => user.email === data.email);
      const isPhoneNumberExists = allUser.some(
        (user) => user.phonenumber === data.phonenumber
      );

      if (isUsernameExists || isEmailExists || isPhoneNumberExists) {
        setError(
          "Username, email, or phone number already exists. Please choose different ones."
        );
      } else {
        const newUser = {
          username: data.username,
          password: data.password,
          email: data.email,
          phonenumber: data.phonenumber,
        };

        dispatch(registerUserApi(newUser))
          .then(() => {
            setIsSubmitted(true);
          })
          .catch((error) => {
            console.error("Error updating product:", error);
            setError("Error adding product. Please try again.");
          });
        reset();
        setTimeout(() => {
          setIsSubmitted(false);
          setError(null);
        }, 4000);
      }
    } catch (err) {
      console.error("Validation error:", err.errors);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setError(null);
    }, 5000);
  }, [error]);

  useEffect(() => {
    dispatch(fetchAllUserApi());
  }, [dispatch]);

  return (
    <div className={styles.loginPageContainer}>
      {isSubmitted && (
        <Alert
          className={styles.alert}
          message="Congratulations, you have successfully registered"
          type="success"
          showIcon
        />
      )}

      {error && (
        <Alert className={styles.alert} message={error} type="error" showIcon />
      )}
      <section className={styles.formLogin}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.themeLarge}>
            <Theme fontsize={"large"} />
          </div>

          <div className={styles.themeSmall}>
            <Theme fontsize={"medium"} />
          </div>
          <p className={styles.textLogin}>Sign Up</p>

          <section className={styles.containerInput}>
            <label htmlFor="username" className={styles.label}>
              Username
            </label>
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <>
                  <Input
                    id="username"
                    className={styles.inputTextArea}
                    {...field}
                    placeholder="Enter your name"
                    prefix={<FiUser />}
                    onChange={(e) =>
                      handleInputChange("username", e.target.value)
                    }
                  />
                  {errors.username && (
                    <p className={styles.errorMessage}>
                      {errors.username.message}
                    </p>
                  )}
                </>
              )}
            />
          </section>

          <section className={styles.containerInput}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <>
                  <Input
                    id="email"
                    className={styles.inputTextArea}
                    {...field}
                    placeholder="example@email.com"
                    prefix={<MdOutlineEmail />}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                  />
                  {errors.email && (
                    <p className={styles.errorMessage}>
                      {errors.email.message}
                    </p>
                  )}
                </>
              )}
            />
          </section>

          <section className={styles.containerInput}>
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <>
                  <Input.Password
                    id="password"
                    className={styles.inputTextArea}
                    {...field}
                    placeholder="Enter your password"
                    prefix={<RiLockPasswordLine />}
                    type="password"
                    onChange={(e) =>
                      handleInputChange("password", e.target.value)
                    }
                  />
                  {errors.password && (
                    <p className={styles.errorMessage}>
                      {errors.password.message}
                    </p>
                  )}
                </>
              )}
            />
          </section>

          <section className={styles.containerInput}>
            <label htmlFor="phonenumber" className={styles.label}>
              Phone Number Optional
            </label>
            <Controller
              name="phonenumber"
              control={control}
              render={({ field }) => (
                <>
                  <Input
                    id="phonenumber"
                    className={styles.inputTextArea}
                    {...field}
                    placeholder="Enter your phone number"
                    prefix={<BsTelephone />}
                    onChange={(e) =>
                      handleInputChange("phonenumber", e.target.value)
                    }
                  />
                  {errors.phonenumber && (
                    <p className={styles.errorMessage}>
                      {errors.phonenumber.message}
                    </p>
                  )}
                </>
              )}
            />
          </section>

          {isLoading && <p>Loading...</p>}

          {errorMessage && (
            <Alert message={errorMessage} type="error" showIcon />
          )}

          <Btn
            defaultValue
            htmlType="submit"
            content="Sign Up"
            width="100%"
            height="40px"
            marginTop="15px"
          />
          <section className={styles.questionSignup}>
            <p className={styles.question}>Already have an account?</p>
            <Link to={"/login"} className={styles.signupNow}>
              Login Now
            </Link>
          </section>
        </form>
      </section>
    </div>
  );
}

export default RegPage;
