import React, { useState } from 'react'
import NavBar from '../navbar'
import Footer from '../../Footer'
import { Input, Textarea } from '@nextui-org/react'
import emailjs from "emailjs-com";
import { ToastContainer, toast } from 'react-toastify';
import MessageData from './messageData';
import Swal from 'sweetalert2';
export default function Contact() {
    const [message, setMessage] = useState("");
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const sendEmail = () => {


        const templateParams = {
            to_name: "Kaung Set Hein",
            from_name: "Client",
            message: `${message} from ${name}(${email})`,
        };
        if (message && email && name) {
            emailjs
                .send(
                    "service_44wy4vp",
                    "template_ikwndyi",
                    templateParams,
                    "U564NjwQLLQB7I92O"
                )
                .then(
                    (response) => {
                        Swal.fire({
                            title: "Successful!",
                            text: `Sent Email`,
                            icon: "success",
                            // showCancelButton: true,

                            showConfirmButton: false,
                            timer: 2000,
                        });
                        setMessage(message ? '' : '')
                        setEmail(email ? '' : '')
                        setName(name ? '' : '')
                    },
                    (error) => {
                        console.error("Error sending email:", error);
                    }
                );
        } else {
            Swal.fire({
                title: "Something Wrong",
                text: `Try again!`,
                icon: "error",
                // showCancelButton: true,

                showConfirmButton: false,
                timer: 2000,
            });
        }



    };
    return (
        <div>

            <NavBar />
            <div className='container pt-[60px] 2xl:pt-[100px]'>

                <div class="responsive-container-block bigContainer">
                    <div class="responsive-container-block Container">

                        <section class="body-font relative ">

                            <div class=" mx-auto px-5 ">

                                <div class="mb-12 flex w-full flex-col text-center">
                                    <p class="text-blk heading">
                                        Contact Us
                                    </p>
                                    <p class="mx-auto text-base leading-relaxed lg:w-2/3">Feel free to reach out to us! Whether you have a question,
                                        feedback, or a collaboration proposal, we'd love to hear from you.
                                    </p>
                                </div>

                                <div class="mx-auto md:w-2/3 lg:w-1/2">
                                    <div class="-m-2 flex flex-wrap">

                                        {/* <!-- form --> */}
                                        <div class="w-1/2 p-2">
                                            <div class="relative">
                                                <input type="text" onChange={(e) => setName(e.target.value)} id="name" name="name" class="peer w-full rounded border border-gray-700 bg-opacity-40 py-1 px-3 text-base leading-8  placeholder-transparent outline-none transition-colors duration-200 ease-in-out " placeholder="Name" />
                                                <label for="name" class="absolute left-3 -top-6 bg-transparent text-sm leading-7  transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2  peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm ">Name<span className='text-red-700'>*</span></label>
                                            </div>
                                        </div>
                                        <div class="w-1/2 p-2">
                                            <div class="relative">
                                                <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} name="email" class="peer w-full rounded border border-gray-700 bg-opacity-40 py-1 px-3 text-base leading-8  placeholder-transparent outline-none transition-colors duration-200 ease-in-out " placeholder="Email" />
                                                <label for="email" class="absolute left-3 -top-6 bg-transparent text-sm leading-7  transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2  peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm ">Email<span className='text-red-700'>*</span></label>
                                            </div>
                                        </div>
                                        <div class="mt-4 w-full p-2">
                                            <div class="relative">
                                                <textarea id="message" name="message" onChange={(e) => setMessage(e.target.value)} class="peer h-32 w-full resize-none rounded border border-gray-700 bg-opacity-40 py-1 px-3 text-base leading-6  placeholder-transparent outline-none transition-colors duration-200 ease-in-out " placeholder="Message"></textarea>
                                                <label for="message" class="absolute left-3 -top-6 bg-transparent text-sm leading-7  transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2  peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm ">Message <span className='text-red-700'>*</span></label>
                                            </div>
                                        </div>
                                        <div class="w-full p-2">
                                            <button onClick={
                                                sendEmail

                                            } class="mx-auto flex rounded border-0 bg-indigo-500 py-2 px-8 text-lg text-white hover:bg-indigo-600 focus:outline-none">Send</button>
                                        </div>


                                        {/* <!-- footer --> */}
                                        <div class="mt-8 w-full border-t border-gray-800 p-2 pt-8 text-center">
                                            {/* <a class="text-indigo-400">example@email.com</a> */}
                                            <p class="my-5 leading-normal">49 Smith St. <br />Saint Cloud, MN 56301</p>
                                            <span class="inline-flex">
                                                <a class="text-gray-500">
                                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="h-5 w-5" viewBox="0 0 24 24">
                                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                                    </svg>
                                                </a>
                                                <a class="ml-4 text-gray-500">
                                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="h-5 w-5" viewBox="0 0 24 24">
                                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                                    </svg>
                                                </a>
                                                <a class="ml-4 text-gray-500">
                                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="h-5 w-5" viewBox="0 0 24 24">
                                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                                    </svg>
                                                </a>
                                                <a class="ml-4 text-gray-500">
                                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="h-5 w-5" viewBox="0 0 24 24">
                                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                    </svg>
                                                </a>
                                            </span>
                                        </div>

                                    </div>
                                </div>

                            </div>

                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
