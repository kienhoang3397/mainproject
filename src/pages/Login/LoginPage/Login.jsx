import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Input } from "antd";
import { RiLockPasswordLine } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import styles from "./LoginPage.module.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { string, z } from "zod";

import Theme from "../../../common/components/Themes/Theme";
import Btn from "../../../common/components/Buttons/Button";
import { loginUser } from "../../../redux/slice/userApiSlice";

const schema = z.object({
  username: string()
    .min(6, "Username must be at least 6 characters.")
    .max(20, "Username cannot exceed 20 characters."),
  password: string().min(4, "Password must be at least 4 characters."),
});

function LoginPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const errorMessage = useSelector((state) => state.userApi?.errorMessage);
  const isLoading = useSelector((state) => state.userApi?.status === "pending");

  const {
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (name, value) => {
    setValue(name, value);
  };

const onSubmit = async (data) => {
  try {
   

    const newUser = {
      username: data.username,
      password: data.password,
    };

    dispatch(loginUser(newUser))
      .then(() => {
        setIsSubmitted(true);
          setTimeout(() => {
            navigate("/");
          }, 1500);
      })
      .catch((error) => {
        console.error("Error during login:", error);
        setError("Error during login. Please try again.");
      });

    reset();
    setTimeout(() => {
      setIsSubmitted(false);
      setError(null);
    }, 4000);
  } catch (validationError) {
    const errorMessage =
      (validationError.errors && validationError.errors[0]?.message) ||
      "Error during login. Please try again.";

    setError(errorMessage);
  }
};


  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setError(null);
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [error]);

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

      <section className={styles.imgLogin}>
        <img src="https://i.ibb.co/hFXwLcv/imgLogin.png" alt="" />
      </section>
      <section className={styles.formLogin}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.themeLarge}>
            <Theme fontsize={"large"} />
          </div>

          <div className={styles.themeSmall}>
            <Theme fontsize={"medium"} />
          </div>
          <p className={styles.textLogin}>Login</p>

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
            <p className={styles.question}>Don't have an account?</p>
            <Link to={"/register"} className={styles.signupNow}>
              Sign up now
            </Link>
          </section>
        </form>
      </section>
    </div>
  );
}

export default LoginPage;
