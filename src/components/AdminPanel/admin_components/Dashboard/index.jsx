import {
  Button,
  Divider,
  Avatar,
  Image,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import React, { useEffect, useState, Children } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faBook,
  faRightFromBracket,
  faRightLeft,
  faXmark,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../../../../assets/images/ellogo.png";

import Swal from "sweetalert2";
import UserTable from "../Users/userList";
import { Get, GetDetail } from "../../../../../utils/API/api";
const Container = ({ text, children }) => {
  const ID = localStorage.getItem("data");
  const [showSidebar, setShowSidebar] = useState(true);
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);
  const [allUserList, setAllUserList] = useState([]);
  useEffect(() => {
    const getUser = async () => {
      const result = await GetDetail("users/", ID);
      setUserData(result.data);
      console.log(result.data, "reswa");
    };

    const getAllUser = async () => {
      const all = await Get("users");
      setAllUserList(all.data);
    };
    getAllUser();
    getUser();
  }, []);
  const logout = () => {
    localStorage.removeItem("data");
    Swal.fire({
      title: "Successful!",
      text: "Logout From Admin!",
      icon: "success",
      // showCancelButton: true,

      showConfirmButton: false,
      timer: 2000,
    });
    navigate("/");
  };
  return (
    <div>
      <div
        className={`top-0 left-0 w-[20vw] bg-blue-950 p-5 flex flex-col gap-2  text-white fixed h-screen scroll-smooth overflow-y-scroll z-40  ease-in-out duration-300 ${
          showSidebar ? " translate-x-0" : " -translate-x-[180px]"
        }`}
      >
        {showSidebar ? (
          <>
            <div className=" h-[40px] overflow-auto">
              <button
                onClick={() => setShowSidebar(!showSidebar)}
                className={`fixed  z-30 flex items-center cursor-pointer ${
                  showSidebar
                    ? "left-[100px] translate-x-[100px]"
                    : "left-[200px] -translate-x-[100px]"
                } top-6`}
              >
                <FontAwesomeIcon icon={faXmark} size="xl" />
              </button>
            </div>

            <Link
              to="/users"
              className="text-[16px] md:text-[18px] font-semibold text-white"
            >
              <FontAwesomeIcon icon={faUsers} className="w-[40px]" /> &nbsp;
              Users
            </Link>
            <Link
              to="/category"
              className="text-[16px] md:text-[18px] font-semibold text-white"
            >
              <FontAwesomeIcon icon={faList} className="w-[40px]" /> &nbsp;
              Category
            </Link>
            <Divider></Divider>
            <Link
              to="/subject"
              className="text-[16px] md:text-[18px] font-semibold text-white"
            >
              <FontAwesomeIcon icon={faBook} className="w-[40px]" /> &nbsp;
              Subjects
            </Link>
            <Divider></Divider>
            <Link
              to="/subject"
              className="text-[16px] md:text-[18px] font-semibold text-white"
            >
              <FontAwesomeIcon icon={faBook} className="w-[40px]" /> &nbsp;
              Blogs
            </Link>
            <Divider></Divider>
            <div className="overflow-hidden">
              <button
                className="absolute bottom-5  bg-white text-[#000] p-1 rounded-lg w-[100px]"
                onClick={logout}
              >
                <FontAwesomeIcon icon={faRightFromBracket} />
                &nbsp; Logout
              </button>
            </div>
          </>
        ) : (
          <div className="flex flex-col gap-5">
            <span
              className="text-[20px] md:text-[25px] text-end font-semibold text-white"
              onClick={() => setShowSidebar(!showSidebar)}
            >
              <FontAwesomeIcon icon={faRightLeft} size="lg" />
            </span>
            <Link
              to="/users"
              className="text-[20px] md:text-[25px] text-end font-semibold text-white"
            >
              <FontAwesomeIcon icon={faUsers} size="md" />
            </Link>
            <span className="text-[20px] md:text-[25px] text-end font-semibold text-white">
              <FontAwesomeIcon icon={faList} size="lg" />
            </span>
            <span className="text-[20px] md:text-[25px] text-end font-semibold text-white">
              <FontAwesomeIcon icon={faBook} size="lg" />
            </span>
            <div className="overflow-hidden flex justify-end items-end">
              <span
                className="absolute bottom-5 text-[20px] md:text-[25px] text-end  p-1 rounded-lg w-[100px]"
                onClick={logout}
              >
                <FontAwesomeIcon icon={faRightFromBracket} size="lg" />
              </span>
            </div>
          </div>
        )}
      </div>
      <div
        className={`top-0 right-0   flex flex-col   text-white fixed overflow-scroll scroll-smooth  z-40  ease-in-out duration-300 ${
          showSidebar
            ? " translate-x-0 w-[80vw]"
            : "  -translate-x-[12px] w-[92vw]"
        }`}
      >
        <div className="h-[100px] text-black flex justify-between items-center mx-2">
          <Image src={Logo} className="w-[150px] h-[70px]" />
          <div className="flex gap-2 justify-center items-center">
            <span>
              {userData.name} {text}
              {children}
            </span>
            <Avatar
              src={
                "http://localhost:5000/upload/" + userData?.image?.originalname
              }
              className=" w-[40px] h-[40px]"
            />
          </div>
        </div>

        <div className="h-[500px] text-black p-2">
          {useLocation().pathname === "/users" && <UserTable />}
        </div>
      </div>
    </div>
  );
};
export default Container;
