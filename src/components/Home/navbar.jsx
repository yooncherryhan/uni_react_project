
import { useState } from "react";


import {
    Navbar,
    NavbarMenu,
    NavbarContent,
    NavbarItem,
    Image,
    NavbarMenuToggle,

} from "@nextui-org/react";


import { Link, useLocation } from "react-router-dom";

export default function App() {
    const location = useLocation()
    const ID = location.pathname.split('/')[2]
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <>
            <div className='fixed bg-white z-50  md:shadow-md lg:shadow-lg w-full  md:p-5 lg:p-6 2xl:p-10 '>
                <div className='flex sm:gap-10 gap-20  xl:gap-5 2xl:gap-[50px]  w-full  justify-between sm:justify-between lg:justify-around '>
                    <div className=''>
                        <Image

                            className={isMenuOpen ? "hidden" : "w-[200px] md:w-[200px] xl:w-[250px] 2xl:w-[300px] 2xl:h-[120px]"}
                        />
                    </div>
                    <div
                        className='hidden lg:flex justify-end 2xl:justify-end gap-3 xl:gap-5 2xl:gap-8 items-center w-full lg:w-[1024px] xl:w-[1280px] 2xl:w-[1536px] '
                        style={{
                            borderRadius: "200px",

                            padding: "12px",

                            color: "#224362",
                        }}
                    >
                        <span className='hover:-translate-y-1 hover:scale-105 duration-500'>
                            <Link
                                to='/'
                                className={
                                    location.pathname === "/"
                                        ? "font-semibold text-[18px] md:text-[14px] xl:text-[16px] 2xl:text-[20px]"
                                        : "text-[18px] md:text-[14px] xl:text-[16px] 2xl:text-[20px]"
                                }
                            >
                                Home
                            </Link>
                        </span>
                        <span className='hover:-translate-y-1 hover:scale-110 duration-500'>
                            <Link
                                to='/about'
                                className={
                                    location.pathname === "/about"
                                        ? "font-semibold text-[18px] md:text-[14px] xl:text-[16px] 2xl:text-[20px]"
                                        : "text-[18px] md:text-[14px] xl:text-[16px] 2xl:text-[20px]"
                                }
                            >
                                About
                            </Link>
                        </span>
                        <span className='hover:-translate-y-1 hover:scale-110 duration-500'>
                            <Link
                                to='/home-course'
                                className={
                                    location.pathname === "/home-course" ||
                                        location.pathname === "/home-course-detail" ||
                                        location.pathname === "/home-sub-detail"
                                        ? "font-semibold text-[18px] md:text-[14px] xl:text-[16px] 2xl:text-[20px]"
                                        : "text-[18px] xl:text-[16px]  md:text-[14px] 2xl:text-[20px]"
                                }
                            >
                                {" "}
                                Courses
                            </Link>
                        </span>
                        <span className='hover:-translate-y-1 hover:scale-110 duration-500'>
                            <Link
                                to='/events'
                                className={
                                    location.pathname === '/events' || location.pathname === `/events/${ID}`
                                        ? "font-semibold text-[18px] md:text-[14px] xl:text-[16px] 2xl:text-[20px]"
                                        : "text-[18px] xl:text-[16px] md:text-[14px]  2xl:text-[20px] "
                                }
                            >
                                Events
                            </Link>
                        </span>
                        <span className='hover:-translate-y-1 hover:scale-110 duration-500'>
                            <Link
                                to='/news-activities'
                                className={
                                    location.pathname === '/news-activities' || location.pathname === `/news-activities/${ID}`
                                        ? "font-semibold  md:text-[14px] xl:text-[16px] 2xl:text-[20px] ]"
                                        : "text-[14px] xl:text-[16px] md:text-[14px] 2xl:text-[20px] "
                                }
                            >
                                Activities
                            </Link>
                        </span>
                        <span className='hover:-translate-y-1 hover:scale-110 duration-500'>
                            <Link
                                to='/testimonial-page'
                                className={
                                    location.pathname === '/testimonial-page' || location.pathname === `/testimonial-page/${ID}`
                                        ? "font-semibold text-[18px] md:text-[14px] xl:text-[16px] 2xl:text-[20px]"
                                        : "text-[18px] xl:text-[16px] md:text-[14px] 2xl:text-[20px] "
                                }
                            >
                                Testimonial
                            </Link>
                        </span>

                        <span className='hover:-translate-y-1 hover:scale-110 duration-500'>
                            <Link
                                to='/booking'
                                className={
                                    location.pathname === "/booking"
                                        ? "font-semibold md:text-[14px] text-[18px] xl:text-[16px] 2xl:text-[20px]"
                                        : "text-[18px] xl:text-[16px] md:text-[14px]  2xl:text-[20px]"
                                }
                            >
                                Booking
                            </Link>
                        </span>

                        <span
                            className='hover:-translate-y-1 hover:scale-110 duration-500'
                        >
                            <Link
                                to='/contact'
                                className={
                                    location.pathname === "/contact"
                                        ? "font-semibold text-[18px] md:text-[14px] xl:text-[16px] 2xl:text-[20px]"
                                        : "text-[18px] xl:text-[16px] md:text-[14px] 2xl:text-[20px]"
                                }
                            >
                                Contact
                            </Link>

                        </span>
                        <span className='hover:-translate-y-1 md:text-[14px] hover:scale-110 duration-500 text-[18px] xl:text-[16px] 2xl:text-[20px] '>
                            <Link to='/login'>Login</Link>
                        </span>
                    </div>
                    <div className='flex justify-end  lg:hidden gap-10 pr-5'>
                        <Navbar onMenuOpenChange={setIsMenuOpen}>
                            <NavbarContent>
                                <NavbarMenuToggle
                                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                                    className='lg:hidden'
                                />
                            </NavbarContent>

                            <NavbarMenu className='bg-white top-14'>
                                <NavbarItem>
                                    <Link
                                        to='/'
                                        className={
                                            location.pathname === "/"
                                                ? "font-semibold text-lg"
                                                : "text-lg"
                                        }
                                    >
                                        Home
                                    </Link>
                                </NavbarItem>
                                <NavbarItem>
                                    <Link
                                        to='/home-course'
                                        className={
                                            location.pathname === "/home-course" ||
                                                location.pathname === "/home-course-detail" ||
                                                location.pathname === "/home-sub-detail"
                                                ? "font-semibold text-lg"
                                                : "text-lg"
                                        }
                                    >
                                        {" "}
                                        Courses
                                    </Link>
                                </NavbarItem>
                                <NavbarItem>
                                    <Link
                                        to='/events'
                                        className={
                                            location.pathname === '/events' || location.pathname === `/events/${ID}`
                                                ? "font-semibold text-lg"
                                                : "text-lg"
                                        }
                                    >
                                        Events
                                    </Link>
                                </NavbarItem>
                                <NavbarItem>
                                    <Link
                                        to='/news-activities'
                                        className={
                                            location.pathname === '/news-activities' || location.pathname === `/news-activities/${ID}`
                                                ? "font-semibold text-lg"
                                                : "text-lg"
                                        }
                                    >
                                        News & Activities
                                    </Link>
                                </NavbarItem>

                                <NavbarItem>
                                    <Link
                                        to='/testimonial-page'
                                        className={
                                            location.pathname === "/testimonial-page"
                                                ? "font-semibold text-lg"
                                                : "text-lg"
                                        }
                                    >
                                        Testimonials
                                    </Link>
                                </NavbarItem>
                                <NavbarItem>
                                    <Link
                                        to='/booking'
                                        className={
                                            location.pathname === "/booking"
                                                ? "font-semibold text-lg"
                                                : "text-lg"
                                        }
                                    >
                                        Booking
                                    </Link>
                                </NavbarItem>
                                <NavbarItem>
                                    <Link
                                        to='/about'
                                        className={
                                            location.pathname === "/about"
                                                ? "font-semibold text-lg"
                                                : "text-lg"
                                        }
                                    >
                                        About Us
                                    </Link>
                                </NavbarItem>

                                <NavbarItem

                                >
                                    <Link
                                        to='/contact'
                                        className={
                                            location.pathname === "/contact"
                                                ? "font-semibold text-lg"
                                                : "text-lg"
                                        }
                                    >
                                        Contact
                                    </Link>
                                </NavbarItem>
                                <NavbarItem>
                                    <Link to='/login'>Login</Link>
                                </NavbarItem>
                            </NavbarMenu>
                        </Navbar>

                    </div>
                </div>
            </div>
        </>
    );
}
