import { Input } from "@nextui-org/react";
import React, { useState } from "react";
import { TEInput, TERipple } from "tw-elements-react";
import api, { Post } from "../../../utils/API/api";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const Login = async () => {
        const info = {
            email: email,
            password: password
        }

        await api
            .post('auth/login', info, { headers: { 'Content-Type': 'application/json' } })
            .then(function (res) {
                Swal.fire({
                    title: "Successful!",
                    text: "You Created Treatment!",
                    icon: "success",
                    // showCancelButton: true,

                    showConfirmButton: false,
                    timer: 2000,
                });
                console.log(res.data.data, 'res')
                if (res.data.data.user.role === 'student') {
                    localStorage.setItem('data', res.data.data)
                    navigate('/')
                }
                if (res.data.data.user.role === 'admin') {
                    localStorage.setItem('data', res.data.data)
                    navigate('/admin')
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


    }
    return (
        <section className="h-screen bg-neutral-200 dark:bg-neutral-700">
            <div className="container h-screen">
                <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
                    <div className="w-full">
                        <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                            <div className="g-0 lg:flex lg:flex-wrap">
                                {/* <!-- Left column container--> */}
                                <div className="px-4 md:px-0 lg:w-6/12">
                                    <div className="md:mx-6 md:p-12">
                                        {/* <!--Logo--> */}
                                        <div className="text-center">
                                            {/* <img
                                                className="mx-auto w-48"
                                                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                                alt="logo"
                                            /> */}
                                            <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                                                Please login to your account
                                            </h4>
                                        </div>

                                        <form className='flex flex-col gap-3'>
                                            {/* <p className="mb-4">Please login to your account</p> */}
                                            {/* <!--Username input--> */}
                                            <Input
                                                type="text"
                                                placeholder="Email or Username"
                                                onChange={(e) => setEmail(e.target.value)}
                                            />

                                            {/* <!--Password input--> */}
                                            <Input
                                                type="password"
                                                placeholder="Password"
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

                                            {/* <!--Register button--> */}
                                            <div className="flex items-center justify-between pb-6">
                                                <p className="mb-0 mr-2">Don't have an account?</p>
                                                <TERipple rippleColor="light">
                                                    <button

                                                        className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"

                                                    >
                                                        Register
                                                    </button>
                                                </TERipple>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                {/* <!-- Right column container with background and description--> */}
                                <div
                                    className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                                    style={{
                                        background:
                                            "linear-gradient(to right, #a8c0ff, #3f2b96)",
                                    }}
                                >
                                    <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                                        <h4 className="mb-6 text-xl font-semibold">
                                            We are more than just a company
                                        </h4>
                                        <p className="text-sm">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
}
export default Login