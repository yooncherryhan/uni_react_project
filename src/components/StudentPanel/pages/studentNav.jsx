import { useEffect, useState } from "react";

import Logo from "../../../assets/images/ellogo.png";
import {
  Navbar,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Image,
  NavbarMenuToggle,
  Avatar,
} from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  User,
} from "@nextui-org/react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { GetDetail } from "../../../../utils/API/api";
import CardList from "./cardList";

export default function StudentNav() {
  const location = useLocation();
  const ID = localStorage.getItem("data");
  const [userData, setUserData] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("data");
    Swal.fire({
      title: "Successful!",
      text: "Logout From Student!",
      icon: "success",
      // showCancelButton: true,

      showConfirmButton: false,
      timer: 2000,
    });
    navigate("/");
  };
  useEffect(() => {
    const getUser = async () => {
      const result = await GetDetail("users/", ID);
      setUserData(result.data);
      console.log(result.data, "reswa");
    };

    getUser();
  }, []);
  return (
    <>
      <div className="fixed bg-white z-50  md:shadow-md lg:shadow-lg w-full  md:p-1 lg:p-6 2xl:p-2 ">
        <div className="flex sm:gap-10 gap-20  xl:gap-5 2xl:gap-[50px]  w-full  justify-between sm:justify-between lg:justify-around ">
          <div className="">
            <Image
              src={Logo}
              className={
                isMenuOpen
                  ? "hidden"
                  : "w-[200px] md:w-[200px] xl:w-[250px] 2xl:w-[300px] 2xl:h-[120px]"
              }
            />
          </div>
          <div
            className="hidden lg:flex justify-end 2xl:justify-end gap-3 xl:gap-5 2xl:gap-8 items-center w-full lg:w-[1024px] xl:w-[1280px] 2xl:w-[1536px] "
            style={{
              borderRadius: "200px",

              padding: "12px",

              color: "#224362",
            }}
          >
            {/* <span className='hover:-translate-y-1 hover:scale-105 duration-500'>
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
                        </span> */}
            <div className="flex items-center gap-4">
              <Dropdown placement="bottom-start">
                <DropdownTrigger>
                  <User
                    as="button"
                    avatarProps={{
                      isBordered: true,
                      src: `http://localhost:5000/upload/${
                        userData?.image?.originalname
                          ? userData?.image?.originalname
                          : ""
                      }`,
                    }}
                    className="transition-transform"
                    description={userData?.email}
                    name={userData?.name}
                  />
                </DropdownTrigger>
                <DropdownMenu aria-label="User Actions" variant="flat">
                  <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-bold">Signed in as</p>
                    <p className="font-bold lowercase">@{userData.name}</p>
                  </DropdownItem>
                  <DropdownItem key="settings">My Settings</DropdownItem>
                  <DropdownItem key="team_settings">Team Settings</DropdownItem>

                  <DropdownItem key="help_and_feedback">
                    Help & Feedback
                  </DropdownItem>
                  <DropdownItem key="logout" color="danger">
                    <button
                      className="hover:-translate-y-1  hover:scale-110 duration-500 "
                      onClick={logout}
                    >
                      Logout
                    </button>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
          <div className="flex justify-end  lg:hidden gap-10 pr-5">
            <Navbar onMenuOpenChange={setIsMenuOpen}>
              <NavbarContent>
                <NavbarMenuToggle
                  aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                  className="lg:hidden"
                />
              </NavbarContent>

              <NavbarMenu className="bg-white top-14">
                <NavbarItem>
                  <Link
                    to="/"
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
                    to="/home-course"
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
                    to="/events"
                    className={
                      location.pathname === "/events" ||
                      location.pathname === `/events/${ID}`
                        ? "font-semibold text-lg"
                        : "text-lg"
                    }
                  >
                    Events
                  </Link>
                </NavbarItem>
                <NavbarItem>
                  <Link
                    to="/news-activities"
                    className={
                      location.pathname === "/news-activities" ||
                      location.pathname === `/news-activities/${ID}`
                        ? "font-semibold text-lg"
                        : "text-lg"
                    }
                  >
                    News & Activities
                  </Link>
                </NavbarItem>

                <NavbarItem>
                  <Link
                    to="/testimonial-page"
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
                    to="/booking"
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
                    to="/about"
                    className={
                      location.pathname === "/about"
                        ? "font-semibold text-lg"
                        : "text-lg"
                    }
                  >
                    About Us
                  </Link>
                </NavbarItem>

                <NavbarItem>
                  <Link
                    to="/contact"
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
                  <Link to="/login">Login</Link>
                </NavbarItem>
              </NavbarMenu>
            </Navbar>
          </div>
        </div>
      </div>
    </>
  );
}
