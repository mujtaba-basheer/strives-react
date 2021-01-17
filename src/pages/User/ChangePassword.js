import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";

import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { changePassword } from "../../redux/actions/userActions";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import UserSidebar from "../../components/layout/UserSidebar";
import Alert from "../../components/Alert/Alert";

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    currentpass: "",
    password: "",
    password_repeat: "",
  });
  const [showMessage, setShowMessage] = useState(false);

  const history = useHistory();

  const { register, handleSubmit, errors, watch } = useForm();
  const password = useRef({});
  password.current = watch("password", "");

  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.userLogin);
  const { error: changeError, success: changeSuccess } = useSelector(
    (state) => state.userChangePassword
  );

  useEffect(() => {
    if (!userInfo) history.push("/login");
  }, [userInfo, history, dispatch]);

  /* function formEdit() {
    document.getElementsByClassName("header__btn--edit")[0].style.display =
      "none";
    document.getElementsByClassName("header__btn--save")[0].style.display =
      "block  ";
    setFormInputStatus("");
  } */

  /* function formEdit() {
    document.getElementsByClassName("header__btn--edit")[0].style.display =
      "none";
    document.getElementsByClassName("submit-button")[0].style.display = "block";
    setFormInputStatus("");
  }
 */
  const onSubmit = (data) => {
    dispatch(
      changePassword({
        currentPass: data.currentpass,
        newPassword: data.password,
      })
    );
    setShowMessage(true);
    setFormData({ currentpass: "", password: "", password_repeat: "" });
  };

  return (
    <>
      <Navbar />

      <section className="content container mt-1 mb-2">
        <div className="userprofile flex">
          <div className="myaccount__left">
            <Link className="backlink" to="/">
              {" "}
              Back to shopping
            </Link>
            <UserSidebar selected="ChangePassword" />
          </div>

          <div className="myaccount__right">
            <div className="header flex">
              <p className="header__text">Change Password</p>
              {/* <span className="header__btns">
                <button className="header__btn--edit" onClick={formEdit}>
                  Edit
                </button>
              </span> */}
            </div>

            {showMessage && (
              <div>
                {changeSuccess && <Alert type="success" text={changeSuccess} />}
                {changeError && <Alert type="danger" text={changeError} />}
              </div>
            )}

            <form className="userdetails" onSubmit={handleSubmit(onSubmit)}>
              {/* Current Password */}
              <div className="form-inputs">
                <label className="form-inputs__label" htmlFor="currentpass">
                  Current Password
                </label>
                <input
                  className="form-inputs__input"
                  defaultValue={formData.currentpass}
                  type="password"
                  placeholder="Current Password"
                  name="currentpass"
                  ref={register({
                    required: {
                      value: true,
                      messsage: "You must specify a password",
                    },
                    maxLength: {
                      value: 200,
                      message: "Password must have at least 8 characters",
                    },
                  })}
                />
                {errors.currentpass && (
                  <div class="alert error">{errors.currentpass.message}</div>
                )}
              </div>

              {/* New Password */}
              <div className="form-inputs">
                <label className="form-inputs__label" htmlFor="currentpass">
                  New Password
                </label>
                <input
                  className="form-inputs__input"
                  defaultValue={formData.password}
                  type="password"
                  placeholder="New Password"
                  name="password"
                  ref={register({
                    required: {
                      value: true,
                      messsage: "You must specify a password",
                    },
                    minLength: {
                      value: 8,
                      message: "Password must have at least 8 characters",
                    },
                  })}
                />
                {errors.password && (
                  <div class="alert error">{errors.password.message}</div>
                )}
              </div>

              {/* Confirm New Password */}
              <div className="form-inputs">
                <label className="form-inputs__label" htmlFor="currentpass">
                  Confirm New Password
                </label>
                <input
                  className="form-inputs__input"
                  defaultValue={formData.password_repeat}
                  type="password"
                  placeholder="Confirm New Password"
                  name="password_repeat"
                  ref={register({
                    validate: (value) =>
                      value === password.current ||
                      "The passwords do not match",
                  })}
                />
                {errors.password_repeat && (
                  <div class="alert error">
                    {errors.password_repeat.message}
                  </div>
                )}
              </div>

              <div className="form-footer flex">
                <button
                  style={{ cursor: "pointer" }}
                  type="submit"
                  id="save"
                  className="submit-button"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ChangePassword;
