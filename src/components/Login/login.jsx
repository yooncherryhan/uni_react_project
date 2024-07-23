import { Input } from "@nextui-org/react";
import React, { useState } from "react";
import { TEInput, TERipple } from "tw-elements-react";
import api, { Post } from "../../../utils/API/api";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const Login = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const [email, setEmail] = useState("");
  const [myName, setMyName] = useState("");
  const [phone, setPhone] = useState("");
  const [profile, setProfile] = useState("");
  const [password, setPassword] = useState("");
  const [showRegForm, setShowRegForm] = useState(false);
  const variant = "bordered";
  const Login = async () => {
    const info = {
      email: email,
      password: password,
    };

    await api
      .post("auth/login", info, {
        headers: { "Content-Type": "application/json" },
      })
      .then(function (res) {
        // console.log(res.data.data, 'res')

        if (res.data.data.user.role === "student") {
          Swal.fire({
            title: "Successful!",
            text: "Login As Student!",
            icon: "success",
            // showCancelButton: true,

            showConfirmButton: false,
            timer: 2000,
          });
          localStorage.setItem("data", res.data.data.id);
          navigate("/student");
        }
        if (res.data.data.user.role === "admin") {
          Swal.fire({
            title: "Successful!",
            text: "Login As Admin!",
            icon: "success",
            // showCancelButton: true,

            showConfirmButton: false,
            timer: 2000,
          });
          localStorage.setItem("data", res.data.data.id);
          navigate("/users");
        }
      })
      .catch(function (err) {
        Swal.fire({
          title: "Something Wrong!",
          text: "Try again, Please.",
          icon: "warning",
          // showCancelButton: true,

          showConfirmButton: false,
          timer: 2000,
        });
      });
  };

  const handleReg = async () => {
    const formData = new FormData();
    formData.append("name", myName);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("image", profile);
    formData.append("role", "student");
    formData.append("password", "123456");

    await Post("user", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    setShowRegForm(false);
  };
  return (
    <section className="h-screen py-5 bg-neutral-200 dark:bg-neutral-700">
      <div className="container ">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* <!-- Left column container--> */}
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    {/* <!--Logo--> */}
                    <div className="text-center py-5">
                      {/* <img
                                                className="mx-auto w-48"
                                                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                                alt="logo"
                                            /> */}
                      <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                        Please login to your account
                      </h4>
                    </div>
                    {showRegForm === true ? (
                      <form className="flex flex-col gap-3">
                        {/* <p className="mb-4">Please login to your account</p> */}
                        {/* <!--Username input--> */}
                        <Input
                          variant={variant}
                          className="bg-white"
                          type="text"
                          placeholder="Username"
                          onChange={(e) => setMyName(e.target.value)}
                        />

                        {/* <!--Password input--> */}
                        <Input
                          variant={variant}
                          className="bg-white"
                          type="text"
                          placeholder="Email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <Input
                          variant={variant}
                          className="bg-white"
                          type="phone"
                          placeholder="Phone no"
                          onChange={(e) => setPhone(e.target.value)}
                        />
                        <input
                          variant={variant}
                          className="bg-white border-1 border-slate-300 p-2"
                          type="file"
                          placeholder="Image"
                          onChange={(e) => setProfile(e.target.files[0])}
                        />

                        {/* <!--Submit button--> */}
                        <div className="mb-12 pb-1 pt-1 text-center">
                          <TERipple rippleColor="light" className="w-full">
                            <button
                              className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                              type="button"
                              style={{
                                background:
                                  "linear-gradient(to right, #a8c0ff, #3f2b96)",
                              }}
                              onClick={handleReg}
                            >
                              Register
                            </button>
                          </TERipple>
                        </div>
                      </form>
                    ) : (
                      <form className="flex flex-col gap-3">
                        {/* <p className="mb-4">Please login to your account</p> */}
                        {/* <!--Username input--> */}
                        <Input
                          variant={variant}
                          className="bg-white"
                          type="text"
                          placeholder="Email or Username"
                          onChange={(e) => setEmail(e.target.value)}
                        />

                        {/* <!--Password input--> */}
                        <Input
                          variant={variant}
                          className="bg-white"
                          type={isVisible ? "text" : "password"}
                          placeholder="Password"
                          endContent={
                            <button
                              className="focus:outline-none"
                              type="button"
                              onClick={toggleVisibility}
                            >
                              {isVisible ? (
                                <FontAwesomeIcon
                                  icon={faEye}
                                  className="text-lg text-default-400 pointer-events-none"
                                />
                              ) : (
                                <FontAwesomeIcon
                                  icon={faEyeSlash}
                                  className="text-lg text-default-400 pointer-events-none"
                                />
                              )}
                            </button>
                          }
                          onChange={(e) => setPassword(e.target.value)}
                        />

                        {/* <!--Submit button--> */}
                        <div className="mb-12 pb-1 pt-1 text-center">
                          <TERipple rippleColor="light" className="w-full">
                            <button
                              className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                              type="button"
                              style={{
                                background:
                                  "linear-gradient(to right, #a8c0ff, #3f2b96)",
                              }}
                              onClick={Login}
                            >
                              Log in
                            </button>
                          </TERipple>

                          {/* <!--Forgot password link--> */}
                          <a href="#!">Forgot password?</a>
                        </div>
                      </form>
                    )}
                    {showRegForm === false && (
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2">Don't have an account?</p>
                        <TERipple rippleColor="light">
                          <button
                            className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                            onClick={() => setShowRegForm(true)}
                          >
                            Register
                          </button>
                        </TERipple>
                      </div>
                    )}
                    {/* <!--Register button--> */}
                  </div>
                </div>

                {/* <!-- Right column container with background and description--> */}
                <div
                  className="hidden sm:flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{
                    background: "linear-gradient(to right, #a8c0ff, #3f2b96)",
                  }}
                >
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <h1 className="mb-6 text-xl font-semibold">WELCOME!</h1>{" "}
                    <p className="text-sm">
                      We’re excited to have you join our learning community.
                      Here, you can make learning English fun and easy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Login;
