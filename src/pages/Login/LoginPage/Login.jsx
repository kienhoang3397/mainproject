import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { RiLockPasswordLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { string, z } from "zod";
// Assuming Btn is exported from this path
// Assuming FormInput is exported from this path
import Logo from "../../../common/components/Logos/Logo";
import { loginUser } from "../../../redux/slice/apiRequest";
import styles from "./LoginPage.module.css";
import Theme from "../../../common/components/Themes/Theme";
import { FiUser } from "react-icons/fi";
import { Alert, Input } from "antd";
import { zodResolver } from "@hookform/resolvers/zod";
import Btn from "../../../common/components/Buttons/Button";

const schema = z.object({
  username: string()
    .min(6, { message: "Tên người dùng ít nhất phải có 6 ký tự." })
    .max(20, { message: "Tên người dùng không được quá 20 ký tự." }),
  password: string().min(1, { message: "Vui lòng nhập mật khẩu !" }),
});

function LoginPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Move the useSelector outside the handleSign function
  const loginState = useSelector((state) => state.auth?.login.msg);
  const msg = useSelector((state) => state.auth?.login.msg);

  const [userData, setUserData] = useState({ username: "", password: "" });

  const handleChange = (name, value) => {
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const handleSign = async () => {
    try {
      await loginUser(userData, dispatch, navigate);

      // Check for success message
      if (loginState?.msg) {
        setIsSubmitted(true);

        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        // If there is an error message, display it
        setError(msg || "An error occurred during login.");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setError(null);
    }, 5000);
  }, [error]);

  return (
    <div className={styles.loginPageContainer}>
      {isSubmitted && (
        <Alert
          className={styles.alert}
          message="Product Add Success"
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
        <div className={styles.themeLarge}>
          <Theme fontsize={"large"} />
        </div>

        <div className={styles.themeSmall}>
          <Theme fontsize={"medium"} />
        </div>
        <p className={styles.textLogin}>Login</p>
        <form className={styles.form} onSubmit={handleSubmit(handleSign)}>
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
                    onChange={(e) => handleChange("username", e.target.value)}
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
                  <Input
                    id="password"
                    className={styles.inputTextArea}
                    {...field}
                    type="password"
                    placeholder="Enter your password"
                    prefix={<RiLockPasswordLine />}
                    onChange={(e) => handleChange("password", e.target.value)}
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
          <Btn defaultValue handleBtn={handleSign} content={"Login"} />
        </form>

        <section className={styles.shapeForm}>
          <div className={styles.shapeW}></div>
          <p className={styles.shapeFormText}>OR</p>
          <div className={styles.shapeW}></div>
        </section>

        <section className={styles.questionSignup}>
          <p className={styles.question}>Don't have an account?</p>
          <Link to={"/register"} className={styles.signupNow}>
            Sign up now
          </Link>
        </section>
      </section>
    </div>
  );
}

export default LoginPage;
